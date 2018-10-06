
const REPO_URL = 'https://api.github.com/repos/';
const REPO_RELEASES = 'releases';

// Get data from the github rest api
export default class GitHubApi {
  constructor(owner, repo) {
    this.owner = owner;
    this.repo = repo;
  }

  async getReleases() {
    return await fetch(`${REPO_URL}${this.owner}/${this.repo}/${REPO_RELEASES}`)
      .then((resp) => resp.json())
      .catch((err) => console.log(err))
  }

  async getLatestRelease() {
      const releases = await this.getReleases();
    //console.log(releases);
    return releases[0];
  }



}
