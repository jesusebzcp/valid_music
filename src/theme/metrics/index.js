import {Dimensions, Platform} from 'react-native';
import {ifIphoneX} from 'react-native-iphone-x-helper';

const {width, height} = Dimensions.get('window');
const isXSeriesIphone = ifIphoneX;

const addFooter = Platform.OS === 'ios' && isXSeriesIphone ? 20 : 0;
const addHeader = Platform.OS === 'ios' ? (isXSeriesIphone ? 40 : 20) : 0;

const metrics = {
  bigImage: (1200 / 1080) * width,
  middleImage: wth => (600 / 1080) * wth,
  smallImage: wth => (400 / 1080) * wth,
  header: 40 + addHeader,
  addHeader,
  footerMenu: 50 + addFooter,
  itemMenu: 40,
  addFooter,
  marginHorizontal: 10,
  marginVertical: 10,
  baseMargin: 10,
  horizontalLineHeight: 1,
  contentWidth: width * 0.8,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  blurRadius: Platform.OS === 'ios' ? 20 : 10,
  navBarHeight: Platform.OS === 'ios' ? 64 : 54,
  buttonRadius: 4,
  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 50,
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 200,
  },
};

export default metrics;
