import 'whatwg-fetch'
import { KEYS, saveOnStore, getFromStore } from './storage'

function getOptions() {
  getFromStore(
    {
      [KEYS.API_KEY]: null,
      [KEYS.GITLAB_URL]: null,
    },
    ({ API_KEY, GITLAB_URL }) => {
      if (!API_KEY || !GITLAB_URL) {
        $('#overlay-error').addClass('active')
      }
    }
  )
}

function initForm() {
  getFromStore(
    {
      [KEYS.ISSUE_TITLE]: null,
      [KEYS.ISSUE_DESCRIPTION]: null,
      [KEYS.ISSUE_PROJECT]: null,
      [KEYS.ISSUE_LABELS]: null,
    },
    ({ ISSUE_TITLE, ISSUE_DESCRIPTION, ISSUE_PROJECT, ISSUE_LABELS }) => {
      $('#title').val(ISSUE_TITLE)
      $('#description').val(ISSUE_DESCRIPTION)
      $('#project').val(ISSUE_PROJECT)
      $('#labels').val(ISSUE_LABELS)
    }
  )
}

function connectPort() {
  const port = chrome.extension.connect({
    name: 'Sample Communication',
  })
}

function init() {
  $(window).on('load', () => {
    connectPort()
    initForm()
  })
}

init()
