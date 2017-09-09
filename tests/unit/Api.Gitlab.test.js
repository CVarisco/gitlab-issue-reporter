import Api from '../../src/js/Api'
import { KEYS, saveOnStore } from '../../src/js/storage'

global.chrome = require('chrome-mock')
require('es6-promise').polyfill()
require('isomorphic-fetch')

const TEST_PARAMS = {
  TOKEN: 'K8TRCt-zP-S6Lzy8R8m-',
  BASE_URL: 'https://gitlab.com',
}

describe('GitlabApi', () => {
  beforeAll((done) => {
    saveOnStore(
      {
        [KEYS.API_KEY]: TEST_PARAMS.TOKEN,
        [KEYS.GITLAB_URL]: TEST_PARAMS.BASE_URL,
      },
      done()
    )
  })
  it('setup ', (done) => {
    Api.Gitlab.getProjects().then((wow) => {
      console.log(wow)
      done()
    })
  })
})
