import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface SignInData {
  user: string;
  password: string;
  newPasswordRequired: boolean;
  newPassword: string;
}

@Component({
  selector: 'app-sign-in-dialog',
  templateUrl: './sign-in-dialog.component.html',
  styleUrls: ['./sign-in-dialog.component.scss']
})
export class SignInDialogComponent {
  
  constructor(
    public dialogRef: MatDialogRef<SignInDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SignInData,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onClick(): void {
    this.dialogRef.close();
  }
}