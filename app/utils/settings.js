
export default class Settings {
  constructor() {

    // Setup storage for local file system in settings
    const Store = window.require('electron-store');
    this.store = new Store();

  }

}
