import React, {Component} from "react";
import FolderPicker from "../form/FolderPicker";

// Main APP Settings - Cactbot
export default class Settings extends Component<Props> {
  constructor(props){
    super(props);

    const Store = window.require('electron-store');
    this.store = new Store();

  }


  updateCactbotPath = (path) => {
    this.store.set("application",{location: path });

    this.setState({
      applicationFolder: path,
    })

  };

  getSettings = () => {
    this.setState({
      settings: this.store.get('application')
    })
  };

  render() {
    const { settings } = this.props;

    return (
      <div>


        <FolderPicker
          btnText='Connect to cactbot'
          storedPath={(this.store.get('application.location'))}
          onUpdate={this.updateCactbotPath}
        />


        {/* <button onClick={this.getSettings}>Get Settings</button> */}

          {/* {Object.keys(settings).map((key) => ( */}
            {/* <div>{key} - {settings[key]}</div> */}
          {/* )) */}
          {/* } */}


      </div>
    );
  }

}


