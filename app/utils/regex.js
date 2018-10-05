
export default class RegExHelper {
  constructor(regex) {

  }
  //

  //const RE_DATE = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
  //
  // const matchObj = RE_DATE.exec('1999-12-31');
  // const year = matchObj[1]; // 1999
  // const month = matchObj[2]; // 12
  // const day = matchObj[3]; // 31
  //
  //  const RE_DATE = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/;
  // const matchObj = RE_DATE.exec('1999-12-31');
  getMatchByName(string, regex, name) {

    const groups = this.getNamedGroups(regex);
    const namelessRegEx = this.getNamelessRegEx(regex);

    let result = regex.exec(string);
    return result.groups[name];
  }


  // This returns a list of named groups.
  // this will return them as regex Matches
  // matches[0]...
  getNamedGroups(regex) {
    //const groupRegEx = /\?\<.*?\>/gmi;
    const groupNameRegEx = /\?\<(.*?)\>/gmi;

    let results = [{
      whole: [],
      groups: [],
    }];

    console.log(results);

    let match;
    while ((match = groupNameRegEx.exec(regex.toString())) != null) {
      results[0].whole.push(match[0]);
      results[0].groups.push(match[1]);
    }


    // results['whole'] = regex.toString().match(groupNameRegEx);
    // results['groups'] = groupNameRegEx.exec(regex.toString());

    return results[0];
  }

  // Removes named entries from regex
  getNamelessRegEx(regex) {
    const replacements = this.getNamedGroups(regex).whole;

    let regString = regex.toString();

    replacements.map((item) => {
       regString = regString.replace(item,'');
    });

    return new RegExp(regString,"g");

  }

}
