import {createSlice} from '@reduxjs/toolkit';

export const bikesSlice = createSlice({
  name: 'bikes',
  initialState: {
    stations: [],
    networks: [],
  },
  reducers: {
    setStations: (state,action) => {
      state.stations = action.payload;
    },
    setNetworks: (state, action) => {
      state.networks = action.payload;
    },
  },
});

export const {setStations, setNetworks} = bikesSlice.actions;

export default bikesSlice.reducer;