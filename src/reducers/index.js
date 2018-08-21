import { Reducer } from 'kawax-js';

class RootReducer extends Reducer {
  static initialState = {
    todos: [{id:111, text:'default todo'}],
  };

  addTodo = (state, action) => {
    const item = action.payload;
    return {
      todos: [item]
    };
  }

  removeTodo = (state, action) => {
    const id = action.payload;
    return {
      todos: this.removeItem(item => item.id === id)
    };
  }

  state = this.matchSuccess({
    ADD_TODO: this.addTodo,
    REMOVE_TODO: this.removeTodo,
  });
}

export default RootReducer;