// Write your code here

import './index.css'

const TodoItem = props => {
  const {item, deleteFun, id} = props
  const {title} = item
  const onDelete = () => {
    console.log('aaaa')
  }
  return (
    <li className="list">
      <div className="list-container">
        <p>{title}</p>
        <button className="button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
