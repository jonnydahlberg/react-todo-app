import * as React from "react";
import TodoItems from './TodoItems'

class TodoList extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            items: [],
            textInput: ''
        };
        this.input = '';
    }
    input: any
    addItem(e: any) {
        let itemArray = this.state.items;
        let textInput = this.input.value;

        itemArray.push({
            text: textInput,
            key: Date.now()
        });
        this.input.value = '';
        this.setState({
            items: itemArray
        })
        e.preventDefault();
    }
    render() {
        return (
            <div className="todoListMain" >
                <div className="header">
                    <form onSubmit={(e) => this.addItem(e)}>
                        <input ref={(a) => this.input = a}
                            placeholder="enter task">
                        </input>
                        <button type="submit">add</button>
                    </form>
                </div>
                <TodoItems entries={this.state.items} />
            </div >
        );
    }
};

export default TodoList;