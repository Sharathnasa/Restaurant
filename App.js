import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SearchScreen from "./src/Screen/SearchScreen";
import ResultDetailShowScreen from "./src/Screen/ResultDetailShowScreen";

const navigator = createStackNavigator({
        Search: SearchScreen,
        ResultDetail: ResultDetailShowScreen
    },
    {
        initialRouteName: 'Search',
        defaultNavigationOptions: {
            title: 'Business Search'
        }

    });

export default createAppContainer(navigator);
