import React from 'react';
import styles from './TitleBar.scss';
import MainMenu from "./MainMenu";

export default class TitleBar extends React.Component {

  static closeWindow() {
    const {remote} =  window.require('electron');
    remote.getCurrentWindow().close();
  }

  static minimizeWindow() {
    const {remote} = window.require('electron');
    remote.getCurrentWindow().minimize();
  }

  render() {
    return (
      <div className={styles.titleBarContainer} >
        <MainMenu/>
        <div id='titleBar' className={styles.titleBar}>
          <span>Cactbot</span>
        </div>
          <div className={styles.actionBar}>
            <span onClick={TitleBar.minimizeWindow} role='button'>
              <i className="fa fa-window-minimize" aria-hidden="true" /></span>
            <span onClick={TitleBar.closeWindow} role='button'>
              <i className="fa fa-times" aria-hidden="true" />
            </span>
          </div>
      </div>
    )
  }

}
