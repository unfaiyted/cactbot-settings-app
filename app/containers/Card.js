// @flow
import * as React from 'react';
import styles from './Cards.scss';

type Props = {
  title: string,
  icon: string,
};

export default class Card extends React.Component<Props> {
  props: Props;


  render() {
    const {title, icon} = this.props;
    return (
      <div className={styles.card} >
        <div className={styles.icon}><i className={icon}></i></div>
        <div className={styles.footer}>{title}</div>
      </div>
    );
  }
}
