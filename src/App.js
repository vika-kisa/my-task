import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import List from './components/List';
import {getNetworksRequest, getStationsRequest} from './api';
import {setNetworks, setSelectedNetworkName, setStations} from './store/slices';

import './App.css';
import InfoAboutStations from './components/InfoAboutStations';


const App = () => {
    const networks = useSelector(state => state.networks);
    const stations = useSelector(state => state.stations);
    const selectedNetworkName = useSelector(state => state.selectedNetworkName)
    const dispatch = useDispatch();

    const [likes, setLikes] = useState( 
        JSON.parse(localStorage.getItem('likes'))
    );

    useEffect (() => {
        getNetworksRequest()
            .then(response => {
                dispatch(setNetworks(response.data.networks));
            });
    }, []);

    const onClickNetwork = (network) => {
        dispatch(setSelectedNetworkName(network.name))

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
            <InfoAboutStations
                data={stations}
                name={selectedNetworkName}
            />
            {
                <div className='app__list'>
                    <List
                        data={networks}
                        onClickElement={onClickNetwork}
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
