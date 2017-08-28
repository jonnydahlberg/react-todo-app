import * as React from 'react';

class TodoItems extends React.Component<any, any> {
    render() {
        var todoEntries = this.props.entries;
        function createTasks(item: any) {
            return <li key={item.key}>{item.text}</li>
        }

        var listItems = todoEntries.map(createTasks);
        return (
            <div className="todoItemsMain">
                <ul className="theList">
                    {listItems}
                </ul>
            </div>
        );
    }
}

export default TodoItems;