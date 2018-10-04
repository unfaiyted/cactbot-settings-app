import React from 'react';
import {Link} from "react-router-dom";
import styles from './PageHeader.scss';

type Props = {

}

export default class PageHeader extends React.Component {
  constructor(props) {

  }

  changeView = (e) => {
    const { onSelect } = this.props;
    const key = e.target.getAttribute('data-id');

    onSelect(key);
  };

  render() {
    const {header} = this.props;
    return (
      <div>
        <i
          onClick={this.changeView}
          data-id='triggers'
          className="fas fa-crosshairs"></i>
      </div>
          <i className="fas fa-stopwatch"></i>



          <i onClick={this.changeView}
             data-id='settings'
             className="fa fa-cogs"
             aria-hidden="true"></i>
    )
  }

}
