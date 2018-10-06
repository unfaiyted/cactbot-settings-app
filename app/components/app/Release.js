import React, {Component} from "react";
import Highlight from 'react-highlight.js'
import GitHubApi from '../../utils/github';
import styles from './Release.scss';

// Main APP Settings - Cactbot
export default class Release extends Component<Props> {
  constructor(props) {
    super(props);
    this.gitData = new GitHubApi("quisquous","cactbot");
  }

  async componentWillMount() {
    this.setState({
      data: null
    });

    const data = await this.gitData.getLatestRelease();
      this.setState({
        data
      });
  }

  openLink = (e) => {
    e.preventDefault();
      const link = e.target.href;
      require("electron").shell.openExternal(link);
  };


  render() {
    const {data} = this.state;

    return (
      <div className={styles.release}>
        {(data == null) ? "Loading..." :
          (
          <div>
            <h3>Release Info</h3>
        <hr/>
            <div className={styles.title}>Updated: {data.name}</div>
            <Highlight language="markdown">{data.body}</Highlight>
            <div className={styles.footer}>
              <span>Latest {data.tag_name}</span>
              <a href={data.html_url} onClick={this.openLink}>Go To Release</a>
            </div>
          </div>
          ) }
      </div>
    );
  }

}


