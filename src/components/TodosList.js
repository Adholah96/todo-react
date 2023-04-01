import TodoItem from './TodoItem';

const TodosList = (props) => {
  const { todosProps, handleChange, delTodo, setUpdate } = props;
  return (
    <ul>
      {todosProps.map((todo) => (
        <TodoItem
          key={todo.id}
          itemProp={todo}
          handleChange={handleChange}
          delTodo={delTodo}
          setUpdate={setUpdate}
        />
      ))}
    </ul>
  );
};
export default TodosList;
