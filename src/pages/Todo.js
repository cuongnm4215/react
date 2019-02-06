import React from 'react';

import AddTodo from './../components/TodoComponent/AddTodo';
import TodoList from './../components/TodoComponent/TodoList';

class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: []
        }
    }

    componentDidMount() {
        let todoList = localStorage.getItem('todos');
        if (todoList) {
            todoList = JSON.parse(todoList);
            if (Array.isArray(todoList) && todoList.length) {
                this.setState({todos: todoList});
            }
        }
    }
    onSubmit = () => {
        let todoList = localStorage.getItem('todos');
        if (todoList) {
            todoList = JSON.parse(todoList);
            if (Array.isArray(todoList) && todoList.length) {
                this.setState({todos: todoList});
            }
        }
    }
    render() {
        return (
            <div className="container">
                <div className="mt-10 content">
                    <span className="upper-case title mb-1">Todo List</span>
                    <AddTodo onSubmit={this.onSubmit}/>
                    <TodoList todos={this.state.todos}/>
                </div>
            </div>
        )
    }
}

export default Layout;
