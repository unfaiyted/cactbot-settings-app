// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';

import Cactbot from '../utils/cactbot';

import styles from './Home.scss';
import Slider from "./form/Slider";
import Select from "./form/Select";

type Props = {};

export default class Home extends Component<Props> {
  constructor(props){
    super(props);

    const Store = window.require('electron-store');
    this.store = new Store();
    this.cactbot = new Cactbot(this.store.get('application.location'));
  }


  componentWillMount() {
    this.setState({
      data: null,
      settings: {'No data':'Not Fetched'}
    })
  }

  getSettings = () => {
    this.setState({
      settings: this.store.get('application')
    })
  };

  getFolderPath = (e) => {
    e.preventDefault();
    const {dialog} = require('electron').remote;

    let path = dialog.showOpenDialog({
      properties: ['openDirectory']
    });

    this.setState({
      applicationFolder: path
    });

    this.store.set("application",{location: path });
  };

  getManifest = (e) => {
    e.preventDefault();
    const data = this.cactbot.getManifest();
    this.setState({
      data
    })
  };

  setTrigger = (e) => {
    this.setTrigger({
      currentTrigger: e.target.value
    })
  };

  getTriggers = (trigger) => {
    console.log(trigger);
    this.cactbot.loadTrigger(trigger);
  };

  getTimeline = (timeline) => {
    console.log(timeline);
    this.cactbot.loadTimeline(timeline);
  };


  render() {

    const { settings, applicationFolder, data } = this.state;
    return (
      <div className={styles.container} data-tid="container">
        <h2>CactBot v8.0.3</h2>

        <button onClick={this.getFolderPath}>Get Folder</button>

        <div>{(applicationFolder) || "none"}</div>


        <button onClick={this.getManifest}>Get Data From Manifest</button>

        <h4>Recent News</h4>

        {(data) ?
          <Select
          id='triggers-select'
          label='Triggers'
          onSelectChange={this.getTriggers}
          items={data.triggers}/> : null }

        {(data) ? <Select
          id='timelines-select'
          label='Timelines'
          onSelectChange={this.getTimeline}
          items={data.timelines}/> : null }
        <ul>
          <li>Lastest Reverison... date blah</li>
        </ul>

       <button onClick={this.getSettings}>Get Settings</button>

            {Object.keys(settings).map((key) => (
               <div>{key} - {settings[key]}</div>
              ))
            }

      </div>
    );
  }
}
