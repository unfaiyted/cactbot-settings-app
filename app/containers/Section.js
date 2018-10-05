// @flow
import * as React from 'react';
import styles from './Section.scss';
import Toggle from "../components/form/Toggle";

type Props = {
  children: React.Node,
  title: string
};

export default class Section extends React.Component<Props> {
  props: Props;

  componentWillMount() {
    this.setState({
      expandMenu:  false
    })
  }

  toggleExpand = () => {

    const {expandMenu} = this.state;

    this.setState({
      expandMenu: !expandMenu
    })
  };

  render() {
    const { children, title, enableToggle, bgColor} = this.props;
    const { expandMenu }= this.state;

    const style = {
      backgroundColor: bgColor
    }

    return (
      <div className={styles.section} style={style}>
        <div className={styles.header}>
          <h2 onClick={this.toggleExpand}>{title}</h2>
          {(enableToggle) ? <Toggle id={title} label={null}/> : null}
        </div>
       <div className={(expandMenu) ? styles.sectionContent : styles.sectionContentHidden}>
         {children}
       </div>
      </div>
    );
  }
}
