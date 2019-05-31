import React, { Component } from 'react';

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            userInput: '',
            items: []
        }
    }

    // Détecte l'ajout de texte dans le champs
    onChange(event) {
        this.setState({
            userInput: event.target.value
        }, () => console.log(this.state.userInput));
    }

    // Ajouter une tâche
    addTodo(event) {
        event.preventDefault();
        this.setState({
            userInput: '',
            items: [...this.state.items, this.state.userInput]
        }, () => console.log(this.state));
    }
    
    // Supprimer une tâche
    deleteTodo(event) {
        event.preventDefault();
        const array = this.state.items;
        const index = array.indexOf(event.target.value);
        array.splice(index, 1);
        this.setState({
            items: array
        });
    }

    // Afficher la tâche et le bouton supprimer
    renderTodo() {
        return this.state.items.map((item) => {
            return (
                <div className="list-group-item col-md-6 d-flex justify-content-between" key={item}>
                    <strong>{item}</strong>
                    <button 
                        className="btn btn-danger" 
                        onClick={this.deleteTodo.bind(this)}>
                        -
                    </button>
                </div>
            );
        });
    }

    render() {
        return(
            <div>
                <h1 className="text-center p-5">Todo List</h1>
                <form className="mb-5">
                    <div className="d-flex">
                        <input 
                            className="form-control"
                            value={this.state.userInput} 
                            type="text" 
                            placeholder="Ajouter une tâche..."
                            onChange={this.onChange.bind(this)}
                            />
                        <button 
                            className="btn btn-secondary"
                            onClick={this.addTodo.bind(this)}>+</button>
                    </div>
                </form>
                <div className="list-group list-group-flush">
                    {this.renderTodo()}
                </div>
            </div>
        )
    }
}

export default TodoList;