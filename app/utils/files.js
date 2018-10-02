const fs = require( 'fs' );
const path = require( 'path' );


export default class CactbotData {
  constructor(dir)
  {
    this.dir = dir;
    this.dataDir  = `${dir}/ui/raidboss/data/`;
    this.manifest = `${dir}/ui/raidboss/data/manifest.txt`;

    this.folders = {
      user: `${dir}/user`,
    };
  }

  // Gets triggers and timelines from manifest file.
  getManifest() {
    let array = fs.readFileSync(this.manifest).toString().split("\n");

    const triggers = array.filter((item => item.includes('triggers/')));
    const timelines = array.filter((item => item.includes('timelines/')));

   return {
     triggers,
     timelines
   };
  }


  loadTrigger(file) {
    let json = JSON.parse(fs.readFileSync(`${this.dataDir}${file}`));
  }

  loadTimeline(file) {
    let array = fs.readFileSync(`${this.dataDir}${file}`).toString().split("\n");
    return array;
  }



}
