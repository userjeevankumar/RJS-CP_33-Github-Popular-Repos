// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {isSelected, filterItem, filterRepositories} = props

  const onClickBtn = () => {
    filterRepositories(filterItem.id)
  }
  return (
    <li className="language-filter-container">
      <button
        type="button"
        className={`tab-btn ${isSelected ? 'highlight' : ''}`}
        onClick={onClickBtn}
      >
        {filterItem.language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
