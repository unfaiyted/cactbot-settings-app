import React, { Component } from 'react';
import styles from './FolderPicker.scss';

type Props = {
  btnText: string
};

export default class FolderPicker extends Component<Props> {

  componentWillMount() {
    const {storedPath} = this.props;

    this.setState({
      path: (storedPath) || null,
    })
  }

  getFolderPath = (e) => {
    e.preventDefault();
    const {dialog} = require('electron').remote;
    const {storedPath, currPath, onUpdate} = this.props;

    const path = dialog.showOpenDialog({
      properties: ['openDirectory']
    });

    if (path !== undefined) {
     this.setState({
       path,
      });

      onUpdate(path);
    }
  };

  render(){
    const { btnText } = this.props;
    const { path } = this.state;


    return (
      <div className={styles.picker}>
        <button onClick={this.getFolderPath}>{btnText}</button>
        <div>{(path) || `Not yet set`}</div>
      </div>
    );
  }
}
