import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';


import List from './components/List';
import {getNetworksRequest, getStationsRequest} from './api';
import {setNetworks, setStations} from './store/slices';

import './App.css';
import InfoAboutStation from './components/InfoAboutStation';


const App = () => {
    const networks = useSelector(state => state.networks);
    const stations = useSelector(state => state.stations);
    const dispatch = useDispatch();

    const [likes, setLikes] = useState( 
    JSON.parse(localStorage.getItem('likes'))
    );

    useEffect ( () => {
        getNetworksRequest()
        .then(response => {
            dispatch(setNetworks(response.data.networks));
        });
    }, []);

    const getStations = (network) => {
        getStationsRequest(network.id)
        .then(response => {
            dispatch(setStations(response.data.network.stations));
        });
    };

    const toggleLike = (station) => {
        let newLikesArray = [...likes];
        if (newLikesArray.includes(station.id)) {
            newLikesArray = likes.filter(
                (like) => like !== station.id)
        } else {
            newLikesArray = [...likes, station.id]
        }
        setLikes(newLikesArray);
        localStorage.setItem('likes', JSON.stringify(newLikesArray));
    };
    

    return (
        <div className="App">
            <InfoAboutStation
            data={stations}
            />
            {
                <div className='app__list'>
                    <List
                    data={networks}
                    onClickElement={getStations}
                    name='Networks'
                    />
                    <List
                    data={stations}
                    name='Stations'
                    onClickElement={toggleLike}
                    likes={likes}
                    />
                </div>
            }
        </div>
    );
};


export default App;
