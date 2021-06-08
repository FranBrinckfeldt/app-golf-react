type StorageType = 'session' | 'local'

const storageTypes = {
  session: window.sessionStorage,
  local: window.localStorage
}

const getStorage = (type: StorageType = 'local'): Storage | undefined => {
  if (typeof Storage !== 'undefined') {
    return storageTypes[type]
  }
  // eslint-disable-next-line no-console
  console.error('LocalStorage is unavailable in your browser')
}

export default getStorage
