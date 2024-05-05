import './index.css'

const DishCategory = props => {
  const {isActive, categoryDetails, setActiveCategoryId} = props
  const {categoryId, category} = categoryDetails
  const btnClassName = isActive
    ? 'language-btn active-language-btn'
    : 'language-btn'
  const onClickLanguageFilter = () => {
    setActiveCategoryId(categoryId)
  }

  return (
    <li>
      <button
        className={btnClassName}
        onClick={onClickLanguageFilter}
        type="button"
      >
        {category}
      </button>
    </li>
  )
}

export default DishCategory
