import { createStackNavigator} from 'react-navigation';

import Main from './pages/main';
import Product from './pages/product';

export default createStackNavigator({
    Main,
    Product
}, 
{
    navigationOptions: {
        backgrounColor: "#DA552F"
    },
    headerTintColor: "#FFF"
});