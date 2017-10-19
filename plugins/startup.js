/**
http://exploringjs.com/es6/ch_destructuring.html
const { h: x } = { h: 7, y: 3 }
const [z, y] = ['a', 'b', 'c']
const {length: len} = 'abcdef'

const [xx, ...yy] = 'abcdef'

console.log('x', x, 'y', y, 'z', z, 'len', len)
console.log('xx', xx, 'yy', yy)
**/

// Fake test parameters

const locale = 'it'
const structureConfig = {
  structureId: 1,
  portalId: 1,
  userLanguageCode: 'it'
}

export default ({app, store}) => {
  const initActions = [
    store.dispatch('app/init', {locale}, {root: true}),
    store.dispatch('structure/init', structureConfig, {root: true})
  ]

  Promise.all(initActions)
    .then(() => {
      store.dispatch('booking/loadFlowSetup', null, {root: true})
      store.dispatch('booking/loadStructureConfig', null, {root: true})
      store.dispatch('categories/loadCategories', null, {root: true})
    })
}
