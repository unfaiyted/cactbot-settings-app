import * as React from 'react';
import styles from './Slider.scss';

type Props = {
  id: string,
  label: string,
  unit: string,
  min: number,
  max: number
};



export default class Slider extends React.Component<Props> {
  props: Props;

  // static defaultProps = {
  //   id: "ERROR",
  //   label: "Default Label",
  //   unit: 'unit',
  //   min: 0,
  //   max: 100,
  //   step: 1,
  // };

  componentWillMount() {
    this.setState({
      valueSet: 0
    })
  }

  changeValue = () => {
    const {valueSet} = this.state;
    this.setState({
      valueSet: 1
    })

  };

  render() {

    const { id, label, unit, min, max } = this.props;

    return (
      <div id={id} className={styles["slider-bar"]}>
        <span className={styles.label}>{label}</span>
        <input type='range' className={styles.slider} data-min={min} data-max={max} data-unit={unit} />
        <div className={styles["slider-val"]}>0 {unit}</div>
      </div>
    );
  }

}
