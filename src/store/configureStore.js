import { configureStore } from '@reduxjs/toolkit';
import logger from './middleware/logger';
import reducer from './reducer';

export default configureStore({
  reducer,
  middleware: [logger],
});
