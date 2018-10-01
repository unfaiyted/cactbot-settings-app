import * as React from 'react';
import styles from './FilePicker.scss';

type Props = {
  id: string,
  label: string
};

export default class FilePicker extends React.Component<Props> {
  props: Props;

  componentWillMount() {
    this.setState({
      toggleValue: false
    })
  }

  render(){
    const {id, label} = this.props;

    return (
      <div>
        <label htmlFor={id}>{label}</label>
        <input type="file" id={id}/>
      </div>
    );
  }

};
