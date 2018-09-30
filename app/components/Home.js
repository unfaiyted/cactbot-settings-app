// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
import styles from './Home.scss';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <h2>CactBot v8.0.3</h2>

        <h4>Recent News</h4>

        <ul>
          <li>Lastest Reverison... date blah</li>
          <li>Lastest Reverison... date blah</li>
        </ul>

      </div>
    );
  }
}
