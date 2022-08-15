import {configureStore} from '@reduxjs/toolkit';
import bikesSlice from './slices';

export default configureStore({
  reducer: bikesSlice,
});