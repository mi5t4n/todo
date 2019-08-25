import React, { Component } from 'react';
import { fadeIn } from 'react-animations';
import store from 'store';

import { 
    Section, Container, 
    Form, Button, Notification 
} from 'react-bulma-components/full';

class AppBody extends Component {

    constructor () {
        super();

        // Get the todos from local storage.
        var storedState = store.get('todo_state');        
        
        var counter  = 0;
        var todos    = [];        
        if (undefined !== storedState) {
            var counter  = storedState.counter;
            var todos    = storedState.todos;            
        }
        this.state = {
            counter : counter,
            task    : '',
            priority: 'light',
            todos   : todos
        };

        this.setState();
    }

    render () {
        return (
            <Section className="pt-0">
                <Container>
                    <Form.Field className="has-addons">
                        <Form.Control className="is-expanded">
                            <Form.Input type="text" placeholder="Task" onChange={this.onChangeTask} value={this.state.task} />                        
                        </Form.Control>
                        <Form.Control>
                            <Form.Select name="priority" onChange={this.onChangePriority} value={this.state.priority}>
                                <option value="light">Select priority</option>
                                <option value="light">Low</option>
                                <option value="primary">Normal</option>
                                <option value="success">Medium</option>
                                <option value="danger" selected={'high' === this.state.priority}>High</option>
                            </Form.Select>
                        </Form.Control>
                        <Form.Control>
                            <Button color="info" className="px-4" onClick={this.onAdd}>Add</Button>
                        </Form.Control>
                    </Form.Field>        
                </Container>

                <Container>
                    {this.state.todos.map(todo => (
                        <fadeIn>
                            <Notification key={todo.key} className="py-1 mt-1 mb-1" color={todo.priority}>
                                {todo.msg}
                                <Button remove onClick={() => this.onTaskDelete(todo.key)} />
                            </Notification>
                        </fadeIn>
                    ))}                    
                </Container>
            </Section>
        );
    }

    onTaskDelete = key => {
        this.setState({
            todos: this.state.todos.filter( (todo, index, todos) => {
                return todo.key !== key;
            })
        }, () => {
            // Update the todos in local storage.
            store.set('todo_state', this.state); 
        });        
    }

    onAdd = event => {
        this.setState({
            todos : [...this.state.todos, {
                priority: this.state.priority,
                msg: this.state.task,
                key: 'todo-' + this.state.counter
            }],
            counter: this.state.counter + 1,        
            task: ''
        }, () => {
            // Update the todos in local storage.
            store.set('todo_state', this.state); 
        }); 
        
    }

    onChangePriority = event => {        
        this.setState({
            priority: event.target.value
        });
    }

    onChangeTask = event => {
        this.setState({
            task: event.target.value
        });
    }
}

export default AppBody;