import GitlabAPI from '../../src/js/GitlabAPI'

const TEST_PARAMS = {
  TOKEN: '1234',
  BASE_URL: 'www.gitlab.com',
  PROJECT_ID: 1,
  PATH: '/test',
  FULL_PATH: 'www.gitlab.com/api/v4/test',
}

describe('GitlabApi', () => {
  it('setup ', () => {
    const Api = new GitlabAPI(TEST_PARAMS.TOKEN, TEST_PARAMS.BASE_URL)
    expect(Api.token).toEqual(TEST_PARAMS.TOKEN)
    expect(Api.baseURL).toEqual(TEST_PARAMS.BASE_URL)
    expect(Api.prepareUrl(TEST_PARAMS.PATH)).toEqual(TEST_PARAMS.FULL_PATH)
  })
})
