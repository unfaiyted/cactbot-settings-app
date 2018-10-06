import * as React from "react";
import PropTypes from 'prop-types';
import LangaugeHelper from '../../utils/language';
import styles from './Trigger.scss'
import Highlight from 'react-highlight.js'

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
        <div className={styles.title}>{name}</div>
        {(itemType === "function") ? (
          <Highlight language='javascript'>
            {item.toString()}
          </Highlight>
          ) : (
          <div className={styles[id]}>

            {Object.keys(item).map((key) => (
                  <div>
                    <span>
                      {this.langaugeHelper.getNameFromCode(key)}
                    </span>
                    <span>
                      {item[key]}
                    </span>
                  </div>))}
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

