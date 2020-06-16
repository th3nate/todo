import {Injectable} from '@angular/core';
import {TodoInterface} from './interfaces/todo.interface';
import * as todoFactory from './todo.factory';
import {maxBy} from 'lodash';

@Injectable({providedIn: 'root'})
export class TodoDataService {
    // TODO: This class should contain an http data layer that interacts with a backend and a proper data store.

    private id                    = 0;
    public todos: TodoInterface[] = [];

    constructor() {
        const savedTodos = this.readFromStorage();
        if (!!savedTodos) {
            this.id = maxBy(savedTodos, 'id').id;
            this.todos  = savedTodos;
        }
    }

    // POST /todos
    add(title: string, text: string): void {
        const todo = todoFactory.createTodo(title, text, ++this.id);
        this.todos.push(todo);
        this.saveToStorage();
    }

    // DELETE /todos/:id
    deleteById(id: number): void {
        this.todos = this.todos
                .filter(todo => todo.id !== id);
        this.saveToStorage();
    }

    // PUT /todos/:id
    updateById(id: number, title: string, text: string): void {
        const todo = this.getById(id);
        if (!todo) {
            return null;
        }
        todo.title = title;
        todo.text  = text;
        this.saveToStorage();
    }

    // GET /todos/:id
    getById(id: number): TodoInterface {
        return this.todos
                .filter(todo => todo.id === id)
                .pop();
    }

    // save todos to localstorage
    saveToStorage(): void {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    // read todos from localstorage
    readFromStorage(): TodoInterface[] {
        return JSON.parse(localStorage.getItem('todos'));
    }

}
