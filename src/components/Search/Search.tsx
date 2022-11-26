import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Search = () => {
  return (
    <View style={styles.container}>
      <Text>Search</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: '#fff',
    borderBottomWidth:1,
  },
});

export default Search;
