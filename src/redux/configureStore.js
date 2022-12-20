import { configureStore } from '@reduxjs/toolkit';
import missions from './missions/missions';
import rocketSlice from '../components/Rockets';

const store = configureStore({
  reducer: {
    missions,
    rockets: rocketSlice.reducer,
  },
});

export default store;
