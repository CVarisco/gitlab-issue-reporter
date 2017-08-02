let instance = null;

// Singlton
class GitlabAPI {
    constructor(token, baseURL) {
        if (!instance) {
            instance = this;
        }
        this.token = token;
        this.baseURL = baseURL;
        return instance;
    }

    setToken(token) {
        this.token = token;
        return this;
    }
    setBaseURL(baseURL) {
        this.baseURL = baseURL;
        return this;
    }
    get(url) {
        return fetch(this.baseURL + url, {
            headers: {
                "PRIVATE-TOKEN": this.token
            }
        });
    }
    post(url, data) {
        return fetch(this.baseURL + url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "PRIVATE-TOKEN": this.token,
                "Content-Type": "application/json"
            }
        });
    }
    getProjects() {
        return this.get(
            "/api/projects/all?per_page=10&order_by=last_activity_at"
        );
    }
    getLabels(projectId) {
        return this.get(`/projects/${projectId}/labels`);
    }
    postIssue(projectId, issue) {
        return this.post(`/projects/${projectId}/issues`, issue);
    }
}

export default GitlabAPI;
