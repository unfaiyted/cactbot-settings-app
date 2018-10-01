// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
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

  render() {

    const { settings, applicationFolder } = this.state;
    return (
      <div className={styles.container} data-tid="container">
        <h2>CactBot v8.0.3</h2>

        <button onClick={this.getFolderPath}>Get Folder</button>

        <div>{(applicationFolder) || "none"}</div>


        <button onClick={this.getFolderPath}>Get Data From Folder</button>

        <h4>Recent News</h4>

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
