import React, { Component } from 'react';
import styles from './Select.scss';

type Props = {
  id: string,
  items: array,
  label: string,
};

export default class Select extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount() {
    const {items} = this.props;

    this.setState({
      currentvalue:  items[0]
    })
  }

  handleChanges = (e) => {
    const { onSelectChange } = this.props;

    this.setState({
      currentValue: e.target.value
    });

    onSelectChange(e.target.value);

  };

  render() {
    const { items, id, label } = this.props;
    const { currentValue } = this.state;
    return (
      <div className={styles.select}>
       <label htmlFor={id}>{label}</label>
        <select
          id={id}
          onChange={this.handleChanges}
          value={currentValue}
        >
          {(items) ? items.map((item) => <option key={item.value} value={item.text} >{item.value}</option>): null}
        </select>
      </div>
    )
  }


}
