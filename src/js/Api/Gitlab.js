import queryString from 'query-string'
import { KEYS, getFromStore } from '../storage'

class Gitlab {
  constructor() {
    this.version = 4

    this.apiPrefix = `/api/v${this.version}`
    return this
  }

  prepareUrl(url) {
    return new Promise((resolve) => {
      getFromStore(
        {
          [KEYS.GITLAB_URL]: null,
        },
        ({ GITLAB_URL }) => resolve(GITLAB_URL + this.apiPrefix + url)
      )
    })
  }
  tokenHeader() {
    return new Promise((resolve) => {
      getFromStore(
        {
          [KEYS.API_KEY]: null,
        },
        ({ API_KEY }) => resolve({ 'PRIVATE-TOKEN': API_KEY })
      )
    })
  }
  prepareFetch(url) {
    return Promise.all([this.prepareUrl(url), this.tokenHeader()])
  }
  get(url) {
    return this.prepareFetch(url).then(([fullUrl, tokenHeader]) => {
      console.log(fullUrl, tokenHeader)
      return fetch(fullUrl, {
        headers: {
          ...tokenHeader,
        },
      }).then(res => res.json())
    })
  }
  post(url, data) {
    return this.prepareFetch(url).then(([fullUrl, tokenHeader]) =>
      fetch(fullUrl, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          ...tokenHeader,
          'Content-Type': 'application/json',
        },
      }).then(res => res.json())
    )
  }
  uploadFile(url, file) {
    return this.prepareFetch(url).then(([fullUrl, tokenHeader]) =>
      fetch(fullUrl, {
        method: 'POST',
        body: file,
        headers: {
          ...tokenHeader,
          'Content-Type': 'multipart/form-data',
        },
      }).then(res => res.json())
    )
  }
  getVersion() {
    return this.get('/version')
  }
  getProjects(options) {
    const query = queryString.stringify({
      ...options,
      simple: true,
      per_page: 10,
      visibility: 'private',
      order_by: 'last_activity_at',
    })
    return this.get(`/projects/?${query}`)
  }
  getLabels(projectId) {
    return this.get(`/projects/${projectId}/labels`)
  }
  uploadProjectFile(projectId, file) {
    return this.post(`/projects/${projectId}/uploads`, file)
  }
  postIssue(projectId, issue) {
    return this.post(`/projects/${projectId}/issues`, issue)
  }
}

export default Gitlab
