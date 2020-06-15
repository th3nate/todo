import {Component, OnInit} from '@angular/core';
import {TodoDataService} from '../todo/todo.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {DialogComponent} from '../todo/dialog/dialog.component';
import {DialogInputDataInterface} from '../todo/dialog/interfaces/dialog-input-data.interface';
import {TodoInterface} from '../todo/interfaces/todo.interface';

@Component({
    selector   : 'app-board',
    templateUrl: './board.component.html',
    styleUrls  : ['./board.component.scss']
})
export class BoardComponent implements OnInit {
    todoForm: FormGroup;

    constructor(private todoDataService: TodoDataService,
                private dialog: MatDialog) {
    }

    createTodo(): void {
        const dialogRef = this.dialog.open(DialogComponent, {
            data: {form: this.todoForm} as DialogInputDataInterface
        } as MatDialogConfig);

        dialogRef.afterClosed().subscribe(async (result): Promise<FormGroup> => {
            if (!result) {
                this.initForm(); // reset form after cancel
                return;
            }
            this.todoDataService.add(result.controls.title.value, result.controls.text.value);
            this.initForm(); // reset form after save
        });
    }

    updateTodo(todo: TodoInterface): void {
        const selectedTodo = this.todoDataService.getById(todo.id); // fetch from data service
        this.todoForm.get('title').setValue(selectedTodo.title); // update form control
        this.todoForm.get('text').setValue(selectedTodo.text); // update form control

        const dialogRef = this.dialog.open(DialogComponent, {
            data: {form: this.todoForm} as DialogInputDataInterface
        } as MatDialogConfig);

        dialogRef.afterClosed().subscribe(async (result): Promise<FormGroup> => {
            if (!result) {
                this.initForm(); // reset form after cancel
                return;
            }
            this.todoDataService.updateById(selectedTodo.id, result.controls.title.value, result.controls.text.value);
            this.initForm(); // reset form after save
        });
    }

    deleteTodo(todo: TodoInterface): void {
        this.todoDataService.deleteById(todo.id);
        this.initForm(); // reset form after delete
    }

    initForm(): void {
        this.todoForm = new FormGroup({
            title: new FormControl('', [Validators.required]),
            text : new FormControl('', [Validators.required])
        });
    }

    ngOnInit() {
        this.initForm();
    }
}
