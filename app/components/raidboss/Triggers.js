import * as React from 'react';
import Select from "../form/Select";
import Cactbot from "../../utils/cactbot";
import Trigger from "./Trigger";
import styles from "./Trigger.scss";

export default class Triggers extends React.Component<Props> {
  constructor(props){
    super(props);

    const Store = window.require('electron-store');
    this.store = new Store();

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


  getTriggers = (trigger) => {
    this.setState({
      triggers:  this.cactbot.loadTrigger(trigger)
    })

  };

  render() {
    const {data, triggers} = this.state;

    return (
      <div>

        {(data) ?
          <Select
            id='triggers-select'
            label='Triggers'
            onSelectChange={this.getTriggers}
            items={data.triggers}/> : null }

        <ul className={styles.triggers}>
            {(triggers) ?
              triggers.triggers.map((item) => <Trigger trigger={item} />) : null}
        </ul>

        <button>Add Trigger</button>

      </div>
    );
  }
}
