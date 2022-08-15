import axios from "axios";

export const getNetworksRequest = () => 
    axios.get('http://api.citybik.es/v2/networks');

export const getStationsRequest = (networkId) => 
    axios.get(`http://api.citybik.es/v2/networks/${networkId}`);

