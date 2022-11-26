import {View, StyleSheet} from 'react-native';
import React from 'react';
import Input from './Input';
const Search = () => {
  return (
    <View style={styles.container}>
      <Input />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 90,
    backgroundColor: '#373737',
    borderBottomWidth: 1,
  },
});

export default Search;
