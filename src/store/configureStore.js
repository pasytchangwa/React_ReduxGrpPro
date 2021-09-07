import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';
// import logger from './middleware/logger';
import func from './middleware/func';
import api from './middleware/api';

export default configureStore({
  reducer,
  middleware: [
    // logger({ destination: 'console' }),
    func,
    api,
  ],
});
