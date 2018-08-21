import { Action } from 'kawax-js';

class RemoveTodo extends Action {

  static type = 'REMOVE_TODO';

  call = async (id) => id;
}

export default RemoveTodo;


