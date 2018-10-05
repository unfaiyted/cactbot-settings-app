import React from 'react';
import {Link} from "react-router-dom";
import styles from './PageHeader.scss';
import Action from "./Action";

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

            <Action id={'home'}
                    type={'home'}
                    tooltipContent={'Home'}
                    onSelected={this.changeView}/>
              : null }

          {(options.includes("timeline")) ?
            <Action id={'timeline'}
                    type={'timeline'}
                    tooltipContent={'Timeline'}
                    onSelected={this.changeView}/>
            : null }

          {(options.includes("triggers")) ?
            <Action id={'triggers'}
                    type={'triggers'}
                    tooltipContent={'Triggers'}
                    onSelected={this.changeView}/>
            : null }

          {(options.includes("settings")) ?
            <Action id={'settings'}
                    type={'settings'}
                    tooltipContent={'Settings'}
                    onSelected={this.changeView}/>
            : null }

        </div>
      </div>
    )
  }

}
