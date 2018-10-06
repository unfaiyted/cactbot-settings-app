import * as React from 'react';
import styles  from './Trigger.scss';
import Action from "../menu/Action";
import TriggerText from "./TriggerText";
import Button from "../form/Button";

export default class Trigger extends React.Component<Props> {

  componentWillMount() {
    this.setState({
       enableSound: true,
       enableVisual: true,
       collapsed: true,
    });
  };



  toggleAction = (e) => {

    const {enableSound, enableVisual} = this.state;

    if(e.target.dataset.id === 'mute')
      this.setState({
        enableSound: !enableSound,
      });

    if(e.target.dataset.id === 'hide')
      this.setState({
        enableVisual: !enableVisual,
      })
  };


  toggleExpand =() => {
    const { collapsed } = this.state;

    console.log(collapsed);

    console.log("toggle");
    this.setState({
      collapsed: !collapsed
    })

  }

  render() {
    const {id, regex, alertText, infoText, alarmText, tts, groupTTS} = this.props.trigger;
    const { enableSound, enableVisual, collapsed} = this.state;
    return (
      <li className={styles.trigger}>

        <div  className={styles.id}>
          <div onClick={this.toggleExpand} >
            <Action id={id}
                    type={(collapsed) ? "up" : "down"}
                    tooltipContent="Expand"
                    onSelected={this.toggleExpand}/>

            <span className={styles.headerText}>{id}</span>

          </div>

            <div className={styles.actions}>
                   <Action id="mute"
                        type={(enableSound) ? 'unMute' : 'mute'}
                        tooltipContent="Mute sounds"
                        onSelected={this.toggleAction}/>

                    <Action id="hide"
                        type={(enableVisual) ? 'unHide' : 'hide'}
                        tooltipContent="Hide visuals"
                        onSelected={this.toggleAction}/>
                </div>
        </div>


        <div className={[styles.main,  (collapsed) ? styles.collapsed : null].join(' ')}>
          <div className={styles.regEx}>
            <span>RegEx:</span> {regex.toString()}
          </div>

          <div className={styles.text}>

            {(alarmText) ? <TriggerText item={alarmText} id='alarmText' name='Alarm'/> : null}

            {(alertText) ? <TriggerText item={alertText} id='alertText' name='Alert'/> : null}

            {(infoText) ? <TriggerText item={infoText} id='infoText' name='Info'/> : null}

            {(tts) ? <TriggerText item={tts} id='tts' name="TTS"/> : null}

            {(groupTTS) ? <TriggerText item={groupTTS} id='groupTTS' name='Group TTS'/> : null}

          </div>
        </div>
        <div className={styles.modifyActions}>
          <Button text="Add Text"/>
          <Button text="Add TTS"/>
          <Button text="Add Group TTS"/>
        </div>
      </li>
    );
  }
}

// alertText
// infoText
// tts
// groupTTS
