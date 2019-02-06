import React from 'react';

class TodoItem extends React.Component {
    render() {
        const { item } = this.props;
        return (
            <div className="todo-item">
                <span className="checkbox"></span>
                <span className="todo-text">{ item.text }</span>
            </div>
        )
    }
}

export default TodoItem;
