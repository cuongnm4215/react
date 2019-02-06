import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
    render() {
        let todoList = this.props.todos;
        let todos = 'No todos found!';
        if (todoList && Array.isArray(todoList) && todoList.length) {
            todos = todoList.map((item, key) => <TodoItem key={key} item={item} />);
        }
        return <div className="todo-items">{ todos }</div>;
    }
}

export default TodoList;
