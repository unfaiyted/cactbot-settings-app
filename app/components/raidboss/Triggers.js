import * as React from 'react';
import Select from "../form/Select";
import Cactbot from "../../utils/cactbot";

export default class Triggers extends React.Component<Props> {
  constructor(props){
    super(props);

    const Store = window.require('electron-store');
    this.store = new Store();

    if(this.store.get('application.location')) {
      this.cactbot = new Cactbot(this.store.get('application.location'));
    }
  }

  componentWillMount() {
    const data = this.cactbot.getManifest();
    this.setState({
      data,
    });
  };


  getTriggers = (trigger) => {
    this.setState({
      triggers:  this.cactbot.loadTrigger(trigger)
    })

  };

  getTimeline = (timeline) => {
    console.log(timeline);
    this.cactbot.loadTimeline(timeline);
  };

  render() {
    const {data, triggers} = this.state;

    return (
      <div>

        <button onClick={this.getManifest}>Get Data From Manifest</button>

        {(data) ?
          <Select
            id='triggers-select'
            label='Triggers'
            onSelectChange={this.getTriggers}
            items={data.triggers}/> : null }

        <div>
          <span>Triggers:
            {(triggers) ? triggers.triggers.length : 0}
          </span>
        </div>

      </div>
    );
  }
}
