import Gitlab from './Gitlab'

const instances = {
  gitlab: {
    instance: null,
    create: () => new Gitlab(),
  },
}

function singleton(api) {
  if (!instances[api].instance) {
    instances[api].instance = instances[api].create()
  }
  return instances[api].instance
}

export default {
  get Gitlab() {
    return singleton('gitlab')
  },
}
