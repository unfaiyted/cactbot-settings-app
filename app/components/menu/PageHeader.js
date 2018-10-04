import React from 'react';
import {Link} from "react-router-dom";
import styles from './PageHeader.scss';

type Props = {

}

export default class PageHeader extends React.Component {

  componentWillMount() {
    this.setState({
      location: 'home'
    });
  };

  changeView = (e) => {
    const { onSelect } = this.props;
    const key = e.target.getAttribute('data-id');

    this.setState({
      location: key,
    })


    onSelect(key);
  };

  render() {
    const {header, options} = this.props;
    const {location} = this.state;
    return (
      <div className={styles.pageHeader}>
        <div>
          <h1>{header}</h1>
        </div>

        <div>

          {(location != "home") ?
            <i
              onClick={this.changeView}
              data-id='home'
              className="fas fa-arrow-left"></i> : null }

          {(options.includes("timeline")) ?
            <i className="fas fa-stopwatch"></i>  : null }

          {(options.includes("triggers")) ?
            <i
            onClick={this.changeView}
            data-id='triggers'
            className="fas fa-crosshairs"></i>  : null }

          {(options.includes("settings")) ?
          <i onClick={this.changeView}
             data-id='settings'
             className="fa fa-cogs"
             aria-hidden="true"></i> : null }


        </div>
      </div>
    )
  }

}
