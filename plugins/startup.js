// Fake test parameters

const locale = 'it'
const structureConfig = {
  structureId: 1,
  portalId: 1,
  userLanguageCode: 'it'
}

export default ({app, store}) => {
  console.log('-- startup')
  return store.dispatch('app/init', {locale, structureConfig, store}, {root: true})
    .then(() => { console.log('-- startup then') })
}
