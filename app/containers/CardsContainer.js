import * as React from 'react';
import styles from './Cards.scss';

type Props = {
  children: React.Node,
  title: string
};

export default class CardsContainer extends React.Component<Props> {
  props: Props;


  render() {
    const { children, title } = this.props;

    return (
      <div className={styles.cards}>
        <div className={styles.title}>{title}</div>
        {children}
      </div>
    );
  }
}
