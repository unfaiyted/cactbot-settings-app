import * as React from "react";
import styles from './DutyImage.scss'

export default class DutyImage extends React.Component<Props> {


    render(){
      const {children, duty} = this.props
      return (
        <div className={styles.dutyImage} style={{
          backgroundImage: `url('../resources/duty/${duty}.png')`
        }}>
          {children}
        </div>
      )
    }


}
