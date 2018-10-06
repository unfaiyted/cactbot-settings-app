import React, { Component } from 'react';
import styles from './Button.scss';


export default class Button extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {


  }

  render() {
    const {text, style} = this.props;

    return (
      <div className={[styles.btn, styles.square, styles.md, styles.square, styles["btn-filled-grey"], ].join(' ') }>
        {text}
      </div>
    )
  }


}
