import React from 'react';
import { Form, Button } from 'semantic-ui-react';

class AddTodo extends React.Component {
    constructor() {
        super();
        this.state = {
            text: '',
            status: true
        }
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        const { text, status } = this.state;
        let todoList = localStorage.getItem('todos');
        todoList = JSON.parse(todoList);

        if (Array.isArray(todoList)) {
            todoList.push({ text, status });
        } else {
            todoList = [{ text, status }];
        }

        todoList = JSON.stringify(todoList);
        localStorage.setItem('todos', todoList);
        this.setState({ text: '', status: true });
        this.props.onSubmit();
    }

    render() {
        return (
            <div className="todo-form">
                <Form onSubmit={this.onSubmit}>
                    <Form.Group widths="equal">
                        <Form.Field>
                            <input placeholder="Type here..." name="text" value={this.state.text} autoComplete="off" onChange={this.onChange}/>
                        </Form.Field>
                        <Button type="submit">Submit</Button>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}

export default AddTodo;
