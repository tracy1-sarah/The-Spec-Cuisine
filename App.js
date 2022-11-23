import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
  import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import COLORS from './data/colors/colors';
import LandingScreen from './views/screens/LandingScreen';
import HomeScreen from './views/screens/HomeScreen';
import DetailScreen from './views/screens/DetailScreen';
import BottomNavigations from './views/navigations/BottomNavigations';
import CategoryFoods from './views/screens/CategoryFoods';

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LandingScreen" component={LandingScreen} />
        <Stack.Screen name="Home" component={BottomNavigations} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
        <Stack.Screen name="CategoryFood" component={CategoryFoods} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}