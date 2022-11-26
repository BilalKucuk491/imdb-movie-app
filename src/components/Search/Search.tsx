import {View, StyleSheet} from 'react-native';
import React from 'react';
import Input from './Input';
import { COLORS } from '../../constants';
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
    backgroundColor: COLORS.cardColor,
    borderBottomWidth: 1,
  },
});

export default Search;
