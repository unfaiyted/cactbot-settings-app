import React from 'react';
import {Link} from "react-router-dom";
import styles from './MainMenu.scss';
import routes from "../../constants/routes";

export default class MainMenu extends React.Component {

  componentWillMount(){
    this.setState({showMenu: false});
  }


  showMenu = () => {
    this.setState({
      showMenu: true
    })
  };

  hideMenu = ()  => {
    this.setState({
      showMenu: false
    })
  };

  render() {
    const {showMenu} = this.state;
    return (
      <div className={styles.menuBar}>
        <span onClick={this.showMenu} role='button'>
          <i className="fas fa-bars"></i>
        </span>
          <div className={(showMenu) ? styles.menuContainer : styles.hiddenMenu} onMouseLeave={this.hideMenu}>
            <ul>
              <li>
                <Link to={routes.HOME}>Home</Link>
              </li>
              <li>
                <Link to={routes.RAIDBOSS} onClick={this.hideMenu} >RaidBoss</Link>
              </li>
              <li>
                <Link to={routes.RAIDBOSS} onClick={this.hideMenu}>OppsyRaid</Link>
              </li>
              <li>
                <Link to={routes.HOME} onClick={this.hideMenu}>Eureka</Link>
              </li>
              <li>
                <Link to={routes.RAIDBOSS} onClick={this.hideMenu}>Jobs</Link>
              </li>
              <li>
                <Link to={routes.HOME} onClick={this.hideMenu}>DPS</Link>
              </li>
            </ul>
          </div>
      </div>
    )
  }

}
