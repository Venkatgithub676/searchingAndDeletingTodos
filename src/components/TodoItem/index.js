// Write your code here
import './index.css'

const TodoItem = props => {
  const {items, onDelete} = props
  const {title, id} = items

  const onClickDelete = () => {
    onDelete(id)
  }

  return (
    <li className="list-con">
      <p>{title}</p>
      <button type="button" onClick={onClickDelete} className="del-btn">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
