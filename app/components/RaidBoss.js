// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
import styles from './Home.scss';
import Section from "../containers/Section";

import Alerts from "./raidboss/Alerts";
import Timeline from "./raidboss/Timeline";
import Sounds from "./raidboss/Sounds";
import Nicknames from "./raidboss/Nicknames";

type Props = {};

export default class RaidBoss extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container} data-tid="container">

        <h1>Raid Boss</h1>
        <Section
          title='Timeline'
          enableToggle={true}
          children={<Timeline/>}/>

        <Section
          title='Alerts'
          enableToggle={true}
          children={<Alerts/>}/>

        <Section
          title='Sounds and Volumes'
          children={<Sounds/>}/>

        <Section
          title='Nicknames'
          children={<Nicknames/>}/>


      </div>
    );
  }
}
