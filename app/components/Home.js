// @flow
import React, { Component } from 'react';
import styles from './Home.scss';
import PageHeader from "./menu/PageHeader";
import Settings from "./app/Settings";
import Main from "./app/Main";

type Props = {};

export default class Home extends Component<Props> {
  constructor(props){
    super(props);

    const Store = window.require('electron-store');
    this.store = new Store();

  }

  componentWillMount() {

     const cbFolderSet = (this.store.has('application.location'));

     this.setState({
          view: 'main',
          cbFolderSet,
        });
  }


  handleView = (view) => {
    this.setState({
      view
    });
  };


  render() {

    const { view, cbFolderSet } = this.state;
    return (
      <div className={styles.container} data-tid="container">

        <PageHeader
          header='CactBot'
          onSelect={this.handleView}
          options={['settings']}
        />

        <div className={styles.setup}>{(!cbFolderSet) ? 'Set Cactbot location in settings!' : ' Cactbot Located. Ready to go.' }</div>

        {(view === "settings") ? <Settings/> : <Main/>}

      </div>
    );
  }
}
