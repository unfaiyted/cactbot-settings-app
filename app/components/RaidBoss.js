// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
import styles from './Home.scss';

import PageHeader from "./menu/PageHeader";
import Settings from "./raidboss/Settings";
import Triggers from "./raidboss/Triggers";

type Props = {};

export default class RaidBoss extends Component<Props> {
  props: Props;

  componentWillMount() {
    this.setState({
      view: 'triggers'
    });
  };

  handleView = (view) => {
    console.log(view);
    this.setState({
      view
    });
  };

  render() {
    const { view }  = this.state;
    return (
      <div className={styles.container} data-tid="container">

        <PageHeader
          header='Raid Boss'
          onSelect={this.handleView}
        />

        {(view === "settings") ?  <Settings/> : <Triggers/>}

      </div>
    );
  }
}
