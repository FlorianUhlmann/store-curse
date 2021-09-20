import { Component, ChangeDetectionStrategy, Inject, HostListener } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Album } from 'src/app/models/album';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Update } from '@ngrx/entity';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { updateAlbum, deleteAlbum } from 'src/app/store/album/album.action';
import { AlbumCardComponent } from '../album-card/album-card/album-card.component';

export enum KEY_CODE {
  ENTER = 13,
}

@Component({
  selector: 'app-edit-album-dialog',
  templateUrl: './edit-album-dialog.component.html',
  styleUrls: ['./edit-album-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditAlbumDialogComponent {

  form: FormGroup;

  dialogTitle: string;

  album: Album;

  mode: 'update' | 'delete';

  disableRead = false;

  loading$:Observable<boolean>;

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {

    if (event.key == 'Enter' ) {
      if( this.mode === 'delete'){ this.onDelete(); }
      else { this.onSave() }
    }

    if (event.key == 'Escape' ) {
      this.onClose();
    }

  }

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditAlbumDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: any,
    private store: Store<Album>) {

    this.dialogTitle = data.dialogTitle;
    this.album = data.album;
    this.mode = data.mode;


    const formControls = {
      userId: ['', Validators.required],
      title: ['', Validators.required],
    };

    this.form = this.fb.group(formControls);
    this.form.patchValue({...data.album});

    if ( this.mode == 'delete') {
      console.log("in delete",this.mode)
      this.disableRead = true;
    }

  }

  onClose() {
    this.dialogRef.close();
  }

  onDelete(){
    this.store.dispatch(deleteAlbum( {id : this.album.id.toString() }))
    this.dialogRef.close();
  }

  onSave() {

    const album: Album = {
      ...this.album,
      ...this.form.value
    };

    const update: Update<Album> = {
      id: album.id,
      changes: album
    };

    this.store.dispatch(updateAlbum( {update} ));

    this.dialogRef.close();

  }


}

