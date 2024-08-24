import './TodoItem.css'

const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete}) => {

  const onChangeCheckBox = () => {
    onUpdate(id);
  }

  const onClickDeleteButton = () => {
    onDelete(id)
  }

  return (
    <div className="TodoItem">
      <input
        onChange={onChangeCheckBox}
        readOnly
        checked={isDone}
        type="checkbox"
      />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick = {onClickDeleteButton}>delete</button>
    </div>
  )
}

export default TodoItem;