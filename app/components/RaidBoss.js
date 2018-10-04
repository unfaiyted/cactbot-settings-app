// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
import styles from './Home.scss';

import PageHeader from "./menu/PageHeader";
import Settings from "./raidboss/Settings";
import Triggers from "./raidboss/Triggers";
import Timelines from "./raidboss/Timelines";

type Props = {};

export default class RaidBoss extends Component<Props> {
  props: Props;

  componentWillMount() {
    this.setState({
      view: 'triggers'
    });
  };

  handleView = (view) => {
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
          options={['settings','triggers','timeline']}
        />

        {(view === "settings") ? <Settings/> : null}
        {(view === "triggers") ? <Triggers/> : null }
        {(view === "timeline") ? <Timelines/> : null}

      </div>
    );
  }
}
