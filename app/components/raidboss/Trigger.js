import * as React from 'react';
import styles  from './Trigger.scss';
import Action from "../menu/Action";

export default class Trigger extends React.Component<Props> {

  componentWillMount() {
    this.setState({
       enableSound: true,
       enableVisual: true,
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


  render() {
    const {id, regex, alertText, infoText, alarmText, tts, groupTTS} = this.props.trigger;
    const { enableSound, enableVisual} = this.state;
    return (
      <li className={styles.trigger}>

        <div className={styles.id}>
          <span>{id}</span>


          <div className={styles.actions}>
             <Action id={'mute'}
                      type={(enableSound) ? 'unMute' : 'mute'}
                      tooltipContent={'Mute sounds'}
                      onSelected={this.toggleAction}/>

              <Action id={'hide'}
                      type={(enableVisual) ? 'unHide' : 'hide'}
                      tooltipContent={'Hide visuals'}
                      onSelected={this.toggleAction}/>
              </div>
        </div>


        <div className={styles.main}>
          <div className={styles.regEx}>
            <span>RegEx:</span> {regex.toString()}
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

            {(tts) ?
              <span className={styles.tts}>
                {JSON.stringify(tts)}
              </span> : null
            }

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
