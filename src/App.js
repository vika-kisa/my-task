import axios from 'axios';
import { useEffect, useState } from 'react';

import List from './components/List';

import './App.css';

const url = 'http://api.citybik.es/v2/networks';

const App = () => {
    const [networks, setNetworks] = useState([]);
    const [stations, setStations] = useState([]);

    useEffect ( () => {
        axios.get(url)
        .then(response => {
            setStations(response.data.networks);
            setNetworks(response.data.networks);
        })
    }, []);
    

    return (
        <div className="App">
            {
                networks.length === 0 ? "Loading.." : (
                    <>
                        <List data={networks} dataKey='name' />
                        <List data={stations} dataKey='id' />
                    </>
                )

            }
        </div>
    );
};


export default App;
