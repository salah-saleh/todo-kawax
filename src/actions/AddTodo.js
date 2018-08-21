import { Action } from 'kawax-js';

let staticId = 100;

class AddTodo extends Action {

  static type = 'ADD_TODO';

  call = async (text) => {
    return {
      id: staticId++,
      text
    };
  };

}

export default AddTodo;


