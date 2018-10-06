import * as React from 'react';
import Select from "../form/Select";
import Cactbot from "../../utils/cactbot";
import Section from "../../containers/Section";
import RegExHelper from "../../utils/regex";

export default class Timelines extends React.Component<Props> {
  constructor(props){
    super(props);

    const Store = window.require('electron-store');
    this.store = new Store();
    this.regExHelper = new RegExHelper();
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
    const {data, timelines} = this.state;

    const regEx = /timelines\/(.*?).txt/;

    const timelineNames =  data.timelines.map(
      (text) => {
        return ({
          text,
          value: this.regExHelper.getMatch(text, regEx).toUpperCase()
        });
      });

    return (
      <div>


        <Section title='Timelines'
                 bgColor='#49585D'
        />

        {(data) ? <Select
          id='timelines-select'
          onSelectChange={this.getTimeline}
          items={timelineNames}/> : null }


        <button>Add Timeline</button>
      </div>
    );
  }
}
