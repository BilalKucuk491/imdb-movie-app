import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>TRENDS</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 90,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {color: COLORS.checkIconColor, marginTop: 8, fontSize: 30},
});
export default Header;
