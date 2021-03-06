import {TodoInterface} from './interfaces/todo.interface';

export class Todo implements TodoInterface {
    public createdOn: Date;
    public id: number;
    public title: string;
    public text: string;

    constructor(title, text, id) {
        this.id        = id;
        this.title     = title;
        this.text      = text;
        this.createdOn = new Date();
    }
}

export function createTodo(title: string, text: string, id: number): TodoInterface {
    return new Todo(title, text, id);
}
