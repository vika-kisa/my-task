import {createSlice} from '@reduxjs/toolkit';

export const bikesSlice = createSlice({
  name: 'bikes',
  initialState: {
    stations: [],
    networks: [],
    selectedNetworkName: '',
  },
  reducers: {
    setStations: (state,action) => {
      state.stations = action.payload;
    },
    setNetworks: (state, action) => {
      state.networks = action.payload;
    },
    setSelectedNetworkName: (state, action) => {
      state.selectedNetworkName = action.payload;
    },
  },
});

export const {setStations, setNetworks, setSelectedNetworkName} = bikesSlice.actions;

export default bikesSlice.reducer;