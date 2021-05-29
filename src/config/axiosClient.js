import axios from 'axios';
import Config from 'react-native-config';

const clientAxios = axios.create({
  baseURL: Config.URL,
});

export default clientAxios;
