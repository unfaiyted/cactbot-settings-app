import * as React from 'react';
import Select from "../form/Select";
import Cactbot from "../../utils/cactbot";

export default class Timelines extends React.Component<Props> {
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

  getTimeline = (timeline) => {
    this.cactbot.loadTimeline(timeline);
  };

  render() {
    const {data, triggers} = this.state;

    return (
      <div>

        <div>
          <span>Timelines:
            {(triggers) ? triggers.triggers.length : 0}
          </span>
        </div>

        {(data) ? <Select
          id='timelines-select'
          label='Timelines'
          onSelectChange={this.getTimeline}
          items={data.timelines}/> : null }

      </div>
    );
  }
}
