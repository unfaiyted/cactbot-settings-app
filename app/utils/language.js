import Languages from '../constants/languages';

// Maps lanauage data, will help with changing default language ect, later.
export default class LanguageHelper {

  getNameFromCode(code) {
      return Languages[code];
  }

}


