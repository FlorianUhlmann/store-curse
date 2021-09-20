import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { Album } from '../../models/album';

export const loadAllAlbums = createAction('[Album Resolver] Load all Albums');

export const setAlbums = createAction('[Album Effect] set all Albums', props<{ albums: Album[] }>() );

export const updateAlbum = createAction('[Album Component] update Album', props<{ update: Update<Album> }>() );

export const deleteAlbum = createAction('[Album Component] delete Album', props<{ id: string }>() );
