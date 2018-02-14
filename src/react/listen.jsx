import React, { Component } from 'react'
import getWrappedDisplayName from './getWrappedDisplayName'

const defaultListeners = []

const toActionFactory = (name) => {
  const suffix = `${name ? '>' : ''}${name || ''}`
  return type => `@@krm/LISTENERS>${type}${suffix}`
}

export default (listeners = defaultListeners, name) => (WrappedComponent) => {
  const toAction = toActionFactory(name)

  return class extends Component {
    static displayName = `listen(${getWrappedDisplayName(WrappedComponent)}`

    static contextTypes = {
      store: () => null, // this is to avoid importing prop-types
    }

    componentWillMount() {
      const { store } = this.context

      store.dispatch(toAction('ADDING'))
      store.listeners.add(listeners)
      store.dispatch(toAction('ADDED'))
    }

    componentWillUnmount() {
      const { store } = this.context

      store.dispatch(toAction('REMOVING'))
      store.listeners.remove(listeners)
      store.dispatch(toAction('REMOVED'))
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }
}
