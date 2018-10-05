import * as React from 'react';
import Tooltip from "./Tooltip";
import styles from "./Action.scss";

const actionTypes = {
  home: 'fas fa-arrow-left',
  triggers: 'fas fa-crosshairs',
  timeline: 'fas fa-stopwatch',
  settings: 'fa fa-cogs',
  mute: 'fas fa-volume-off',
  unMute: 'fas fa-volume',
  hide: 'far fa-eye-slash',
  unHide: 'far fa-eye',
};


export default class Action extends React.Component<Props> {


  componentWillMount() {
    this.setState({
      displayTip: false,
    })
  };

  showTip = () => {
    console.log("change tip");
    this.setState({
      displayTip: true,
    })
  };

  hideTip = () => {
    this.setState({
      displayTip: false,
    })
  };


  render() {

    const { id, tooltipContent, type, onSelected} = this.props;
    const { displayTip } = this.state;

    const  icon = actionTypes[type];

    return (
      <div className={styles.action}
           onMouseEnter={this.showTip}
           onMouseLeave={this.hideTip}
           onClick={onSelected}
      >
      <i data-id={id} className={icon}></i>
        {(tooltipContent) ?  <Tooltip text={tooltipContent} displayTip={displayTip} /> : null}
      </div>
    )
  }
}
