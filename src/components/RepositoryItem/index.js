// Write your code here
const RepositoryItem = props => {
  const {repositoryData} = props

  return (
    <li>
      <img src={repositoryData.imageUrl} alt={repositoryData.name} />
      <h1>{repositoryData.name}</h1>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
        />
        <p>{repositoryData.starsCount} stars</p>
      </div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
        />
        <p>{repositoryData.forksCount} forks</p>
      </div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
        />
        <p>{repositoryData.issuesCount} open issues</p>
      </div>
    </li>
  )
}

export default RepositoryItem
