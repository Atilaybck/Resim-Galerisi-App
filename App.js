import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Image, StyleSheet, View } from 'react-native';
import { Images } from './Images';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />

      <ScrollView contentContainerStyle={styles.imageContainer}>
        {Images.map((item) => (
          <Image
            key={item.id}
            style={styles.image}
            source={{ uri: item.image }}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  image: {
    width: 150,
    height: 150,
    margin: 5,
  },
});
