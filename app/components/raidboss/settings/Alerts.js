import * as React from 'react';
import Toggle from "../../form/Toggle";

export default class Alerts extends React.Component<Props> {
  props: Props;

  render() {
    return (
      <div>
        <p>
          Alerts involve both visual and sound based alerts.
        </p>

        <Toggle id="textAlertsEnabled" label="Text Alerts"
        />

        <Toggle id="soundAlertsEnabled" label="Sound Alerts"
        />
        <Toggle id="spokenAlertsEnabled" label="Spoken Alerts"
        />
        <Toggle id="groupAlertsEnabled" label="Group Spoken Alerts"
        />

        <p>
          Group spoken alerts take priority over spoken alerts if they exist.
        </p>

      </div>
    );
  }
}
