const KEYS = {
  API_KEY: "API_KEY",
  PROJECT_NAME: "PROJECT_NAME",
  GITLAB_URL: "GITLAB_URL"
};

function saveOnStore(obj, callback = () => {}) {
  chrome.storage.sync.set(obj, callback);
}

function getFromStore(obj, callback = () => {}) {
  chrome.storage.sync.get(obj, callback);
}

export { KEYS, saveOnStore, getFromStore };
