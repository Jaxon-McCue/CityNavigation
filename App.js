import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

function ArtChicagoScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('./images/art.png')} style={styles.image} />
    </View>
  )
}

function MileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('./images/mile.png')} style={styles.image} />
    </View>
  )
}

function PierScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('./images/pier.png')} style={styles.image} />
    </View>
  )
}

function WaterScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('./images/water.png')} style={styles.image} />
    </View>
  )
}

function WillisScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('./images/willis.png')} style={styles.image} />
    </View>
  )
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Art Institute of Chicago'>
        <Drawer.Screen name="Art Institute of Chicago" component={ArtChicagoScreen} />
        <Drawer.Screen name="Magnificent Mile" component={MileScreen} />
        <Drawer.Screen name="Navy Pier" component={PierScreen} />
        <Drawer.Screen name="Water Tower" component={WaterScreen} />
        <Drawer.Screen name="Willis Tower" component={WillisScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 320,
    height: 480,
  }
});
