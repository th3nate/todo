import {Injectable} from '@angular/core';
import {TodoInterface} from './interfaces/todo.interface';
import * as todoFactory from './todo.factory';

@Injectable({providedIn: 'root'})
export class TodoDataService {
    // TODO: This class should contain an http data layer that interacts with a backend and a proper data store.

    public lastId                 = 0;
    public todos: TodoInterface[] = [];

    // POST /todos
    add(title: string, text: string): void {
        const todo = todoFactory.createTodo(title, text, ++this.lastId);
        this.todos.push(todo);
    }

    // DELETE /todos/:id
    deleteById(id: number): void {
        this.todos = this.todos
                .filter(todo => todo.id !== id);
    }

    // PUT /todos/:id
    updateById(id: number, title: string, text: string): void {
        const todo = this.getById(id);
        if (!todo) {
            return null;
        }
        todo.title = title;
        todo.text  = text;
    }

    // GET /todos
    getAll(): TodoInterface[] {
        return this.todos;
    }

    // GET /todos/:id
    getById(id: number): TodoInterface {
        return this.todos
                .filter(todo => todo.id === id)
                .pop();
    }

}
