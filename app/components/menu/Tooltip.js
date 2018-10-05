import * as React from 'react';
import styles from './Tooltip.scss';

export default class Tooltip extends React.Component<Props> {

  componentWillMount() {
    const {displayTip} = this.props;

    this.setState({
      display: displayTip,
    })

  }

  componentWillReceiveProps(nextProps) {
     const {displayTip} = this.props;

    if(displayTip !== nextProps.displayTip) {
      this.setState({
        display: nextProps.displayTip,
      })
    }

  }

  render() {

    const {text, displayTip} = this.props;
    const {display} = this.state;

    return (
      <div className={(display) ? styles.tooltip : styles.hideTooltip}>
        <span>{text}</span>
      </div>
    )
  }
}
