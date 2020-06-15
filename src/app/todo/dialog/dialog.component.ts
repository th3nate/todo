import {Component, Inject} from '@angular/core';
import {DialogInputDataInterface} from './interfaces/dialog-input-data.interface';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
    selector   : 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls  : ['./dialog.component.scss']
})
export class DialogComponent {
    constructor(
            public dialogRef: MatDialogRef<DialogComponent>,
            @Inject(MAT_DIALOG_DATA) public dialogData: DialogInputDataInterface) {
    }

    dismissDialogData(): void {
        this.dialogRef.close(false);
    }

    saveDialogData(): void {
        this.dialogRef.close(this.dialogData.form);
    }

    get formIsValid(): boolean {
        return (this.dialogData.form.valid && !this.dialogData.form.pristine);
    }

}
