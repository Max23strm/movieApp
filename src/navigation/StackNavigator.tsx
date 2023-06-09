import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import { theme } from '../theme/Theme';
import { Movie } from '../interfaces/movieInterface';

export type RootStackParams ={
  Home: undefined,
  Details: Movie
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () : JSX.Element => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown:false,
            cardStyle:{
                backgroundColor:theme.light.background.main
            }
        }}
    >
    
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailScreen} />
    </Stack.Navigator>
  );
}