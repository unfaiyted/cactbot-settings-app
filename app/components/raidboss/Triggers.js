import * as React from 'react';
import Select from "../form/Select";

export default class Triggers extends React.Component<Props> {
  props: Props;

  componentWillMount() {
    this.setState({
      data: null,
    });
  };

  getManifest = (e) => {
    e.preventDefault();
    const data = this.cactbot.getManifest();

    this.setState({
      data
    })
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
        Hello Triggers

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

        {(data) ? <Select
          id='timelines-select'
          label='Timelines'
          onSelectChange={this.getTimeline}
          items={data.timelines}/> : null }

      </div>
    );
  }
}
