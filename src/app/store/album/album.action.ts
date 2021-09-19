import { createAction, props } from '@ngrx/store';
import { Album } from '../../models/album';

export const loadAllAlbums = createAction('[Album Resolver] Load all Albums');

export const setAlbums = createAction('[Album Effect] set all Albums', props< {albums: Album[]} >() );
