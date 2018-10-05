import * as React from 'react';
import Tooltip from "./Tooltip";
import styles from "./Action.scss";

const actionTypes = {
  home: 'fas fa-arrow-left',
  triggers: 'fas fa-crosshairs',
  timeline: 'fas fa-stopwatch',
  settings: 'fa fa-cogs',
  mute: 'fas fa-volume-off',
  unMute: 'fas fa-volume-up',
  hide: 'far fa-eye-slash',
  unHide: 'far fa-eye',
};


export default class Action extends React.Component<Props> {


  componentWillMount() {
    const {active} = this.props;

    this.setState({
      displayTip: false,
      active
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

  componentWillReceiveProps(nextProps) {
    const {active}  = this.props;
    if(active !== nextProps.active)
      this.setState({
        active: nextProps.active
      })
  }

  toggleActive = (e) => {
    const {onSelected} = this.props;
    onSelected(e);
  };

  render() {

    const { id, tooltipContent, type, onSelected} = this.props;
    const { displayTip, active } = this.state;

    const  icon = actionTypes[type];

    return (
      <div className={styles.action}
           onMouseEnter={this.showTip}
           onMouseLeave={this.hideTip}
           onClick={this.toggleActive}
      >
      <i data-id={id} className={(!active) ? icon : [icon, styles.active].join(' ')}></i>
        {(tooltipContent) ?  <Tooltip text={tooltipContent} displayTip={displayTip} /> : null}
      </div>
    )
  }
}
