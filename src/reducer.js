const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      if (!action.payload) {
        return state;
      }
      if (state.todos.includes(action.payload)) {
        return state;
      }
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case 'ADD_TODO_FROM_DONE': {
      return {
        ...state,
        todos: [...state.todos, action.payload],
        deletedTodos: state.deletedTodos.filter((t) => t !== action.payload),
      };
    }
    case 'DELETE':
      return {
        ...state,
        todos: state.todos.filter((t) => t !== action.payload),
        deletedTodos: [...state.deletedTodos, action.payload],
      };
    case 'THEME':
      return {
        ...state,
        myTheme: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
