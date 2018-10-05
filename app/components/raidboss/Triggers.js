import * as React from 'react';
import Select from "../form/Select";
import Cactbot from "../../utils/cactbot";
import Trigger from "./Trigger";
import styles from "./Trigger.scss";
import Section from "../../containers/Section";
import RegExHelper from "../../utils/regex";


export default class Triggers extends React.Component<Props> {
  constructor(props){
    super(props);

    const Store = window.require('electron-store');
    this.store = new Store();

    this.regExHelper = new RegExHelper();


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

    const regEx = /triggers\/(?<name>.*?).js/g;

    data.triggers.map((text) => this.regExHelper.getMatchByName(text, regEx, 'name'));

    return (
      <div>

        <Section title='Triggers'
          bgColor='rgb(49, 58, 46)'
        />

        {(data) ?
          <Select
            id='triggers-select'
            onSelectChange={this.getTriggers}
            items={data.triggers}/> : null }

            <button>Add Trigger</button>

        <ul className={styles.triggers}>
            {(triggers) ?
              triggers.triggers.map((item) => <Trigger trigger={item} />) : null}
        </ul>


      </div>
    );
  }
}
