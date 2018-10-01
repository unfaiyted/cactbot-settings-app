import * as React from 'react';
import Slider from "../form/Slider";

export default class Timeline extends React.Component<Props> {
  props: Props;

  render() {
    return (
      <div>

        <Slider id='timeShownBeforeAction'
                label='Show timer bars before action'
                unit='second'
                startingValue={10}
                min={0} max={100}
        />

        <Slider id='timeShownBeforeAction'
                label='Show timer bars before action'
                unit='second'
                startingValue={3}
                min={0} max={100}
        />

        <Slider id='keepExpiredBarFor'
                label='Keep expired bar for'
                unit='second'
                min={0} max={20}
        />

        <Slider id='BarExpiresSoon'
                label='Bar will expire soon indicator starts at'
                unit='second'
                min={0} max={20}
        />

        <Slider id='maxNumberOfTimerBars'
                label='Maximum number of bars at once'
                unit='bar'
                min={0} max={10}
        />
      </div>
    );
  }
}
