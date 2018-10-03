import React from 'react';
import {Link} from "react-router-dom";
import styles from './PageHeader.scss';

type Props = {

}

export default class PageHeader extends React.Component {

  changeView = (e) => {
    const { onSelect } = this.props;
    const key = e.target.getAttribute('data-id');

    onSelect(key);
  };

  render() {
    const {header} = this.props;
    return (
      <div className={styles.pageHeader}>
        <div>
          <h1>{header}</h1>
        </div>

        <div>
          <i className="fas fa-stopwatch"></i>

          <i
            onClick={this.changeView}
            data-id='triggers'
            className="fas fa-crosshairs"></i>

          <i onClick={this.changeView}
             data-id='settings'
             className="fa fa-cogs"
             aria-hidden="true"></i>
        </div>
      </div>
    )
  }

}
