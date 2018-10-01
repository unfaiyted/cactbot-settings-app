import * as React from 'react';
import Slider from "../form/Slider";
import FilePicker from "../form/FilePicker";

export default class Sounds extends React.Component<Props> {
  props: Props;

  render() {
    return (
      <div>

        <div className="sound-type">
          <FilePicker id='infoSoundFile' label='Info Sound' />
          <Slider id='infoVolume'
                  unit='%'
                  label='Info Sound'
                  min={0} max={100}
          />
        </div>


      </div>
    );
  }
}
