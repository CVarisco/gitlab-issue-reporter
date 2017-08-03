import { KEYS, saveOnStore, getFromStore } from './storage'

/**
 * Clear the storage and exec a callback
 */
function clearStorage(callback) {
  saveOnStore(
    {
      [KEYS.API_KEY]: null,
      [KEYS.GITLAB_URL]: null,
    },
    callback
  )
}

/**
 * Get options from storage and fill the form
 */
function initForm() {
  getFromStore(
    {
      [KEYS.API_KEY]: null,
      [KEYS.GITLAB_URL]: null,
    },
    ({ API_KEY, GITLAB_URL }) => {
      $('#apiKey').val(API_KEY)
      $('#gitlabURL').val(GITLAB_URL)
    }
  )
}

/**
 * Save options parameters
 */
function attacchSaveHandler() {
  $('#options-form').on('submit', (e) => {
    e.preventDefault()
    const apiKey = $('#apiKey').val()
    const gitlabURL = $('#gitlabURL').val()

    saveOnStore({
      [KEYS.API_KEY]: apiKey,
      [KEYS.GITLAB_URL]: gitlabURL,
    })
  })
}

/**
 * Clear form and storage from saved options
 */
function attachClearHandler() {
  $('#delete-button').on('click', (e) => {
    e.preventDefault()
    clearStorage(() => {
      $('#apiKey').val(null)
      $('#gitlabURL').val(null)
    })
  })
}

function init() {
  $(window).on('load', () => {
    initForm()
    attacchSaveHandler()
    attachClearHandler()
  })
}

init()
