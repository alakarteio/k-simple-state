import { factory } from 'k-redux-factory'
import { getFromPath } from '../utils'

export default (root) => {
  const subtree = (name, path) => {
    // first run
    if (name === undefined) {
      return Object
        .keys(root)
        .map(key => ({ [key]: subtree(key, '') }))
        .reduce(
          (acc, next) => ({ ...acc, ...next }),
          {},
        )
    }

    // other runs
    const nextPath = `${path ? `${path}.` : ''}${name}`
    const options = getFromPath(root, nextPath)
    const { type } = options

    // - leaf
    // -- k-redux-factory
    if (type) {
      return factory({
        name,
        path,
        prefix: (path && path.replace(/\./g, '_')) || '',
        ...options,
      })
    }
    // -- not a k-redux-factory but a common reducer
    if (typeof options === 'function') return options

    // - branch
    return Object
      .keys(options)
      .map(key => ({ [key]: subtree(key, nextPath) }))
      .reduce(
        (acc, next) => ({ ...acc, ...next }),
        {},
      )
  }

  return subtree()
}
