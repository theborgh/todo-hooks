import useLocalStorageState from './useLocalStorageState';
import uuid from 'uuid/v4';

export default initialTodos => {
  const [todos, setTodos] = useLocalStorageState('todos', initialTodos);

  const addTodo = newTodoText => {
    setTodos([...todos, {id: uuid(), text: newTodoText, completed: false}]);
  };

  const removeTodo = todoId => {
    setTodos(todos.filter(todo => todo.id !== todoId));
  };

  const toggleTodoCompletion = todoId => {
    setTodos(
      todos.map(todo =>
        todo.id === todoId ? {...todo, completed: !todo.completed} : todo
      )
    );
  };

  const editTodo = (todoId, newText) => {
    setTodos(
      todos.map(todo => (todo.id === todoId ? {...todo, text: newText} : todo))
    );
  };

  return {todos, addTodo, removeTodo, toggleTodoCompletion, editTodo};
};
