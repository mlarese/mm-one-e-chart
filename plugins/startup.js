// Fake test parameters

const locale = 'it'
const structureConfig = {
  structureId: 1,
  portalId: 1,
  userLanguageCode: 'it'
}
const absServer = 'https://absservername.abs-one.com/RESTfulAPI'
export default ({app, store}) => {
  console.log('-- startup')
  return store.dispatch('app/init', {locale, structureConfig, store, absServer}, {root: true})
    .then(() => { console.log('-- startup then') })
}
