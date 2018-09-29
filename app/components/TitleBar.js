import React from 'react';
import styles from './TitleBar.scss';

export default class TitleBar extends React.Component {

  closeWindow() {
    const {remote} =  window.require('electron');
    remote.getCurrentWindow().close();
  }

  minimizeWindow() {
    const {remote} = window.require('electron');
    remote.getCurrentWindow().minimize();
  }

  render() {
    return (
      <div className={styles.titleBarContainer} >
        <div id='titleBar' className={styles.titleBar}>
          <div>
            <img src='../resources/cactaur-ffd.png' alt='Cactbot'/>
            <span>Cactbot</span>
          </div>
        </div>
          <div className={styles.actionBar}>
            <span onClick={this.minimizeWindow}>
              <i className="fa fa-window-minimize" aria-hidden="true" /></span>
            <span onClick={this.closeWindow}>
              <i className="fa fa-times" aria-hidden="true" />
            </span>
          </div>
      </div>
    )
  }

}
