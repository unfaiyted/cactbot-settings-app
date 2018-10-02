// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';

import Cactbot from '../utils/files';

import styles from './Home.scss';

type Props = {};

export default class Home extends Component<Props> {
  constructor(props){
    super(props);

    const Store = window.require('electron-store');
    this.store = new Store();

    console.log(this.store.path);

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
    const cactbot = new Cactbot(this.store.get('application.location'));

    const data = cactbot.getManifest();

    console.log(data);
    this.setState({
      data
    })
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


        <div>
          {(data) ? data.triggers.map((item) => <div>{item}</div>): null}
        </div>

        <div>
          {(data) ? data.timelines.map((item) => <div>{item}</div>): null}
        </div>

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
