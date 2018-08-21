import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'kawax-js';
import AddTodo from '../actions/AddTodo'
import RemoveTodo from '../actions/RemoveTodo'
import TodoList from '../components/TodoList'

class RootContainer extends React.Component {

  static dispatchToProps = {
    addTodo: AddTodo.export(),
    removeTodo: RemoveTodo.export()
  };

  static stateToProps = ({ select }) => ({
    todos: select('todos')
  });

  static mapStateToProps = state => ({
  })

  static propTypes = {
    addTodo: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired,
  };

  componentDidMount() {
  }

  render() {
    let input
    const { todos, removeTodo, addTodo } = this.props;
    return (
      <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        addTodo(input.value)
        input.value = ''
      }}>
        <input ref={node => input = node} />
        <button type="submit">
          Add Todo
        </button>
      </form>
      <TodoList todos={todos} removeTodo={removeTodo}/>
    </div>
    );
  }

}

export default Container(RootContainer);
