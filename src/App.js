import {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';


import List from './components/List';
import {getNetworksRequest, getStationsRequest} from './api';
import { setNetworks, setStations} from './store/slices';

import './App.css';


const App = () => {
    const networks = useSelector(state => state.networks);
    const stations = useSelector(state => state.stations);
    const dispatch = useDispatch();


    useEffect ( () => {
        getNetworksRequest()
        .then(response => {
            dispatch(setNetworks(response.data.networks));
        });
    }, []);

    const getStations = (id) => {
        getStationsRequest(id)
        .then(response => {
            dispatch(setStations(response.data.network.stations));
        });
    };
    

    return (
        <div className="App">
            {
                <>
                    <List data={networks} dataKey='name' onClickElement={getStations} name='Networks'/>
                    <List data={stations} dataKey='name' name='Stations'/>
                </>
            }
        </div>
    );
};


export default App;
