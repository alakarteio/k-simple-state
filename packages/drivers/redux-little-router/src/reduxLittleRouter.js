import { routerForBrowser, push, replace, go, goBack, goForward, block, unblock } from 'redux-little-router'
import { compose, applyMiddleware } from 'redux'

const getParentResultParam = (result, key) => {
  if (!result) return undefined
  if (result[key]) return result[key]
  return getParentResultParam(result.parent, key)
}

const isParentResultParam = (result, key, value) => {
  if (!result) return false
  if (result[key] === value) return true
  return isParentResultParam(result.parent, key, value)
}

export default (config, selector, implem) => {
  const { reducer, middleware, enhancer } = implem ? implem(config) : routerForBrowser(config)

  const driver = ({ dispatch, getState }) => {
    const get = () => selector(getState())
    const getResult = () => get().result
    return ({
      /* actions */
      push: path => dispatch(push(path)),
      replace: path => dispatch(replace(path)),
      go: nbLocations => dispatch(go(nbLocations)),
      goBack: () => dispatch(goBack()),
      goForward: () => dispatch(goForward()),
      block: callback => dispatch(block(callback)),
      unblock: () => dispatch(unblock()),
      /* route selectors */
      get,
      getRouteParam: key => get().params && get().params[key],
      getQueryParam: key => get().query && get().query[key],
      getResultParam: key => getResult() && getResult()[key],
      getParentResultParam: key => getParentResultParam(getResult(), key),
      isRoute: route => get().route === route,
      isParentResultParam: (key, value) => isParentResultParam(getResult(), key, value),
    })
  }

  driver.getReducer = () => reducer
  driver.getEnhancer = () => compose(enhancer, applyMiddleware(middleware))

  return driver
}
