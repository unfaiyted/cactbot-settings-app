// @flow
import React, { Component } from 'react';
import Section from "../../containers/Section";

import Alerts from "./settings/Alerts";
import Timeline from "./settings/Timeline";
import Sounds from "./settings/Sounds";
import Nicknames from "./settings/Nicknames";

type Props = {};

export default class Settings extends Component<Props> {
  props: Props;

  render() {
    return (
      <div>
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
