class LocalStorage {
  getItem (item) {
    return localStorage.getItem(item) ? JSON.parse(localStorage.getItem(item)) : ''
  }
  setItem (item, obj) {
    localStorage.setItem(item, JSON.stringify(obj))
  }
  claerItem (item) {
    localStorage.removeItem(item)
  }
}
export default LocalStorage
