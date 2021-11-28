import React from 'react';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import { useAssets } from 'expo-asset';
import AppLoading from 'expo-app-loading';

const someImg1 = require('./assets/rob-wicks-wmTmWDuvQUg-unsplash.jpg');
const someImg2 = require('./assets/daniel-mirlea-rOaDZwvsIDs-unsplash.jpg');
const someImg3 = require('./assets/steven-cordes-qE1Ss102UJE-unsplash.jpg');

export default function App() {
  const [assets, error] = useAssets([
    someImg1,
    someImg2,
    someImg3,
  ]);

  if (!assets) {
    return <AppLoading />;
  }

  if (error) {
    Alert.alert('Error during useAssets hook', error.message);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Bug is reproduceble with one image, 2 more added for better visible effect.
      </Text>

      <Text style={styles.text}>
        Loaded {assets.length} assets.
      </Text>

      <View style={styles.imgWrapper}>
        <Image source={someImg1} style={styles.img} />
      </View>

      <View style={styles.imgWrapper}>
        <Image source={someImg2} style={styles.img} />
      </View>

      <View style={styles.imgWrapper}>
        <Image source={someImg3} style={styles.img} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBB',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: '#FFF',
    fontSize: 20,
  },

  imgWrapper: {
    overflow: 'hidden',
    borderRadius: 5,
    marginTop: 20,
    elevation: 10,
  },

  img: {
    width: 120,
    height: 120,
  },
});
