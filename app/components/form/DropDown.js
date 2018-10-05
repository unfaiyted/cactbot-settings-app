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

        </select>
      </div>
    )
  }


}
