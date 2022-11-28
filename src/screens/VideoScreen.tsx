import {View, StyleSheet, Text} from 'react-native';
import React from 'react';
import {COLORS} from '../constants';

const VideoScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Video Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
});

export default VideoScreen;
