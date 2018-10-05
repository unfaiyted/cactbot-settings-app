import * as React from 'react';
import styles  from './Trigger.scss';
import Action from "../menu/Action";

export default class Trigger extends React.Component<Props> {


  toggleAction = () => {
    console.log('toggle action')
  };


  render() {
    const {id, regex, alertText, infoText, alarmText, tts, groupTTS} = this.props.trigger;

    return (
      <li className={styles.trigger}>

        <div className={styles.id}>
          <span>{id}</span>


          <div className={styles.actions}>
             <Action id={'mute'}
                      type={'mute'}
                      tooltipContent={'Mute sounds'}
                      onSelected={this.toggleAction}/>
              <Action id={'hide'}
                      type={'hide'}
                      tooltipContent={'Hide visuals'}
                      onSelected={this.toggleAction}/>
              </div>
        </div>


        <div className={styles.main}>
          <div className={styles.regEx}>
            RegEx: {regex.toString()}
          </div>

          <div className={styles.text}>

            {(alarmText) ? <span className={styles.alarmText}>
             Alarm Text:  {(alarmText) ?  alarmText.en : null}
             </span> : null}

            {(alertText) ? <span className={styles.alertText}>
             Alert Text:  {(alertText) ?  alertText.en : null}
             </span> : null}

            {(infoText) ? <span className={styles.infoText}>
             Info Text:  {(infoText) ?  infoText.en : null}
             </span> : null}

            <span></span>
          </div>
        </div>

      </li>
    );
  }
}

// alertText
// infoText
// tts
// groupTTS
