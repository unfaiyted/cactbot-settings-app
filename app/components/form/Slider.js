import * as React from 'react';
import styles from './Slider.scss';

type Props = {
  id: string,
  label: string,
  unit: string,
  min: number,
  max: number,
  step: number,
  startingValue: number,
  beforeColor: string,
  afterColor: string
};



export default class Slider extends React.Component<Props> {
  props: Props;

  static defaultProps = {
    id: "SET_ID",
    label: "Default Slider Label",
    unit: 'unit',
    min: 0,
    max: 100,
    step: 1,
    beforeColor: '#6D92A0',
    afterColor: '#ccc'
  };



  componentWillMount() {
    const { beforeColor, afterColor, startingValue , max} = this.props;

    const value = ((typeof startingValue !== "undefined") ? startingValue : max/2) / max;

    this.setState({
      valueSet: (startingValue) || max/2,
      currentValue: startingValue,
      barStyle: {
        backgroundImage:
        `-webkit-gradient(
            linear,
            left top,
            right top,
          color-stop(${value}, ${beforeColor}),
          color-stop(${value}, ${afterColor})
        )`
      },

    })
  }

  changeValue = (e) => {
    const { beforeColor, afterColor, max} = this.props;
    const {valueSet} = this.state;

    const value = e.target.value / max;

    this.setState({
      valueSet: e.target.value,
      currentValue: e.target.value,
      barStyle: {
        backgroundImage:
          `-webkit-gradient(
            linear,
            left top,
            right top,
          color-stop(${value}, ${beforeColor}),
          color-stop(${value}, ${afterColor})
        )`
      },


    });


  };

  render() {

    const { id, label, unit, min, max } = this.props;
    const { barStyle, valueSet, currentValue } = this.state;

    return (
      <div id={id} className={styles["slider-bar"]}>
        <span className={styles.label}>{label}</span>
        <div className={styles.inputWrapper}>
          <div>
            <input type='range'
                 onChange={this.changeValue}
                 className={styles.slider}
                 min={min}
                 max={max}
                 value={(currentValue)}
                  />
            <div style={barStyle} className={styles.bar}></div>
          </div>
          <div className={styles["slider-val"]}>{valueSet} {unit}</div>
        </div>
      </div>
    );
  }

}
