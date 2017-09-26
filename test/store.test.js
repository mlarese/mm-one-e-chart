import test from 'ava'
import { Nuxt, Builder } from 'nuxt'
import { resolve } from 'path'
import Vuex  from 'vuex'
let nuxt = null
test.before('Init Nuxt.js', async t => {
  const rootDir = resolve(__dirname, '..')
  let config = {}
  try { config = require(resolve(rootDir, 'nuxt.config.js')) } catch (e) {}
  config.rootDir = rootDir // project folder
  config.dev = false // production build
  nuxt = new Nuxt(config)
  await new Builder(nuxt).build()
  nuxt.listen(4000, 'localhost')
})

test('Store / Exist', async t => {
  const window = await nuxt.renderAndGetWindow('http://localhost:4000/')

  console.log(window.__nuxt.HTMLDivElement)
  t.is(1, 1)
})

test.after('Closing server and nuxt.js', t => {
  nuxt.close()
})