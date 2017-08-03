let instance = null

// Singlton
class GitlabApi {
  constructor(token, baseURL) {
    if (!instance) {
      instance = this
    }
    this.version = 4
    this.token = token
    this.baseURL = baseURL
    this.apiPrefix = `/api/v${this.version}`
    return instance
  }

  setToken(token) {
    this.token = token
    return this
  }
  setBaseURL(baseURL) {
    this.baseURL = baseURL
    return this
  }
  prepareUrl(url) {
    return this.baseURL + this.apiPrefix + url
  }
  tokenHeader() {
    return { 'PRIVATE-TOKEN': this.token }
  }
  get(url) {
    return fetch(this.prepareUrl(url), {
      headers: {
        ...this.tokenHeader(),
      },
    })
  }
  post(url, data) {
    return fetch(this.prepareUrl(url), {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        ...this.tokenHeader(),
        'Content-Type': 'application/json',
      },
    })
  }
  getVersion() {
    return this.get('/version')
  }
  getProjects() {
    return this.get('/projects/all?per_page=10&order_by=last_activity_at')
  }
  getLabels(projectId) {
    return this.get(`/projects/${projectId}/labels`)
  }
  postIssue(projectId, issue) {
    return this.post(`/projects/${projectId}/issues`, issue)
  }
}

export default GitlabApi
