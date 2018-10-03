// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';

import Cactbot from '../utils/cactbot';

import styles from './Home.scss';
import Slider from "./form/Slider";
import Select from "./form/Select";
import FolderPicker from "./form/FolderPicker";

type Props = {};

export default class Home extends Component<Props> {
  constructor(props){
    super(props);

    const Store = window.require('electron-store');
    this.store = new Store();

    if(this.store.get('application.location')) {
      this.cactbot = new Cactbot(this.store.get('application.location'));
    }
  }


  componentWillMount() {

    const applicationFolder = this.store.get('application.location');

    this.setState({
      data: null,
      triggers: null,
      applicationFolder,
      settings: {'No data':'Not Fetched'}
    })
  }

  getSettings = () => {
    this.setState({
      settings: this.store.get('application')
    })
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
    this.setState({
      triggers:  this.cactbot.loadTrigger(trigger)
    })

  };

  getTimeline = (timeline) => {
    console.log(timeline);
    this.cactbot.loadTimeline(timeline);
  };


  handleCactbotPath = (path) => {
    this.store.set("application",{location: path });
    this.cactbot = new Cactbot(this.store.get('application.location'));

    this.setState({
      applicationFolder: path,
    })

  };


  render() {

    const { settings, applicationFolder, data, triggers } = this.state;
    return (
      <div className={styles.container} data-tid="container">
        <h2>CactBot</h2>

        {/*<div>{(applicationFolder) ? "Cactbot Folder Set" : "Folder UnSet"}</div>*/}


        <FolderPicker
          btnText='Connect to cactbot'
          storePat={(this.store.get('application.location'))}
          onUpdate={this.handleCactbotPath}
        />

        <h4>Recent News</h4>

        <ul>
          <li>Update recent commit</li>
          <li>version Release</li>
        </ul>

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
