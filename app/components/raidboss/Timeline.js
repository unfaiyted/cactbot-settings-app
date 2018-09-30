import * as React from 'react';
import Slider from "../form/Slider";

export default class Timeline extends React.Component<Props> {
  props: Props;

  render() {
    return (
      <div>
        <p>Timeline</p>

        <Slider id='timeShownBeforeAction'
                label='Show timer bars before action'
                unit='second'
                min={0} max={100} />
      </div>
    );
  }
}
