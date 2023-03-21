import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {SafeAreaView, ScrollView, StatusBar} from 'react-native';

import HomeScreen from './src/screens/Home';
import MovieDetail from './src/screens/MovieDetail';

function App(): JSX.Element {
  const Stack = createStackNavigator();

  return (
    // <SafeAreaView>
    //   {/* TODO: create styles file */}
    //   <StatusBar backgroundColor={'white'} />
    //   <ScrollView contentInsetAdjustmentBehavior="automatic">
    //     <HomeScreen />
    //   </ScrollView>
    // </SafeAreaView>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={MovieDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
