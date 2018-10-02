const fs = require( 'fs' );
const path = require( 'path' );


export default class CactbotData {
  constructor(dir)
  {
    this.dir = dir[0];
    this.dataDir  = path.join(this.dir, 'ui/raidboss/data/');
    this.manifest = path.join(this.dir, 'ui/raidboss/data/manifest.txt');
  }

  // Gets triggers and timelines from manifest file.
  getManifest() {

    console.log(this.manifest);

    let array = fs.readFileSync(this.manifest).toString().split("\n");

    const triggers = array.filter((item => item.includes('triggers/')));
    const timelines = array.filter((item => item.includes('timelines/')));

   return {
     triggers,
     timelines
   };
  }


  loadTrigger(file) {
    const pathToFile= path.join(this.dataDir, file);

    console.log(pathToFile);
    const json = JSON.parse(fs.readFileSync(pathToFile));
  }

  loadTimeline(file) {
    let array = fs.readFileSync(path.join(this.dataDir, file)).toString().split("\n");
    return array;
  }


}
