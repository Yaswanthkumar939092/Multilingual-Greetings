import './index.css'

const LanguageItem = props => {
  const {item, isActive, changeActiveId} = props
  const buttonClassName = isActive ? 'active' : 'normal'
  const {id, buttonText} = item
  const buttonClicked = () => [changeActiveId(id)]
  return (
    <li className="item">
      <button type="button" onClick={buttonClicked} className={buttonClassName}>
        {buttonText}
      </button>
    </li>
  )
}
export default LanguageItem
