import { useFonts, OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import Routes from './src/Routes';
import React from 'react';

export default function App() {
  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return (
    <View style={styles.container}>
      <Routes />
      <StatusBar style="dark" />
    </View>
  );
 }
}
const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});
