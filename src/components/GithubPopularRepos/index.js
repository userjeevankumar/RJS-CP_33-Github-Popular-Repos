import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here

class GithubPopularRepos extends Component {
  state = {
    isLoading: true,
    repositoriesData: [],
    selectedLanguageFilter: 'ALL',
  }

  componentDidMount() {
    this.getTeamsList(languageFiltersData[0].id)
  }

  getTeamsList = async selectedLanguageFilter => {
    this.setState({isLoading: true})
    const response = await fetch(
      `https://apis.ccbp.in/popular-repos/${selectedLanguageFilter}`,
    )
    const fetchData = await response.json()
    const updateData = fetchData.popular_repos.map(eachTeam => ({
      name: eachTeam.name,
      id: eachTeam.id,
      issuesCount: eachTeam.issues_count,
      forksCount: eachTeam.forks_count,
      starsCount: eachTeam.stars_count,
      avatarUrl: eachTeam.avatar_url,
    }))
    this.setState({repositoriesData: updateData, isLoading: false})
  }

  renderLanguageFilterItem = () => {
    const {selectedLanguageFilter} = this.state
    return (
      <ul className="language-filter-container">
        {languageFiltersData.map(eachFilterData => (
          <LanguageFilterItem
            isSelected={eachFilterData.id === selectedLanguageFilter}
            key={eachFilterData.id}
            filterItem={eachFilterData}
            filterRepositories={this.filterRepositories}
          />
        ))}
      </ul>
    )
  }

  renderRepositoryItem = () => {
    const {repositoriesData} = this.state
    return (
      <ul>
        {repositoriesData.map(data => (
          <RepositoryItem key={data.id} repositoryData={data} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div data-testid="loader" className="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  filterRepositories = newFilterId => {
    this.setState({selectedLanguageFilter: newFilterId})
    this.getTeamsList(newFilterId)
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Popular</h1>
        {this.renderLanguageFilterItem()}
        {isLoading ? this.renderLoader() : this.renderRepositoryItem()}
      </div>
    )
  }
}

export default GithubPopularRepos
