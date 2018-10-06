import * as React from "react";
import PropTypes from 'prop-types';
import Highlight from 'react-highlight.js'
import LangaugeHelper from '../../utils/language';
import styles from './Trigger.scss'

export default class TriggerText extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.langaugeHelper = new LangaugeHelper;
  }

  static defaultProps = {
    item: {
      en: 'Not set'
    },
    name: "Type"
  };

  componentWillMount() {
    const {item} = this.props;
    this.setState({
        itemType: (typeof item)
    })

  }

  render() {
    const { item, id, name} = this.props;
    const { itemType } = this.state;


    return (
      <div>
        <div className={[styles.title, styles[id], ].join(' ')}>{name}</div>
        {(itemType === "function") ? (
          <Highlight language='javascript'>
            {item.toString()}
          </Highlight>
          ) : (
          <div className={styles[id]}>


            <ul>
            {Object.keys(item).map((key) => (
                  <li>
                    <span className={styles.lang}>
                      {this.langaugeHelper.getNameFromCode(key)}
                    </span>
                    <span>
                      {item[key]}
                    </span>
                  </li>))}
            </ul>
          </div>
        )}


      </div>
    )
  }

}


TriggerText.propTypes = {
  item: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object
  ]),
  name: PropTypes.string
};

