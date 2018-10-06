import * as React from 'react';
import Select from "../form/Select";
import Cactbot from "../../utils/cactbot";
import Trigger from "./Trigger";
import styles from "./Trigger.scss";
import Section from "../../containers/Section";
import RegExHelper from "../../utils/regex";
import Button from "../form/Button";
import DutyImage from "./DutyImage";


export default class Triggers extends React.Component<Props> {
  constructor(props){
    super(props);

    const Store = window.require('electron-store');
    this.store = new Store();

    this.regExHelper = new RegExHelper();
    this.regEx = /triggers\/(.*?).js/;

    if(this.store.get('application.location')) {
      this.cactbot = new Cactbot(this.store.get('application.location'));
    }
  }

  componentWillMount() {
    const data = this.cactbot.getManifest();
    this.setState({
      data,
      currentDuty: 'O1S',
    });
  };


  getTriggers = (trigger) => {
    this.setState({
      triggers:  this.cactbot.loadTrigger(trigger),
      currentDuty: this.regExHelper.getMatch(trigger, this.regEx)
    })

  };

  render() {
    const {data, triggers, currentDuty} = this.state;



    const triggerNames =  data.triggers.map(
      (text) => {
      return ({
        text,
        value: this.regExHelper.getMatch(text, this.regEx).toUpperCase()
      });
    });

    return (
      <div>

        <Section title='Triggers'
          bgColor='#3C6958'
        />


        <DutyImage duty={currentDuty}>
          <div>
        {(data) ?
           <Select
            id='triggers-select'
            onSelectChange={this.getTriggers}
            displayed
            items={triggerNames}/> : null }
         </div>

            <div>
              <Button text='Add Trigger'/>
            </div>
        </DutyImage>



        <ul className={styles.triggers}>
            {(triggers) ?
              triggers.triggers.map((item) => <Trigger trigger={item} />) : null}
        </ul>


      </div>
    );
  }
}
