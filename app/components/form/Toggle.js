import * as React from 'react';
import styles from './Toggle.scss';

type Props = {
  id: string,
  label: string
};

export default class Toggle extends React.Component<Props> {
  props: Props;

  componentWillMount() {
    this.setState({
      toggleValue: false
    })
  }

  toggleOnOff = () => {
    const {expandMenu} = this.state;
    this.setState({
      toggleValue: !toggleValue
    })

  };

  render() {

    const { id, label } = this.props;

    return (
      <div className={styles.toggle}>
        <label htmlFor={id}>{label}</label>
        <input type="checkbox" id={id} className={styles.check}/>
      </div>
    );
  }

}
