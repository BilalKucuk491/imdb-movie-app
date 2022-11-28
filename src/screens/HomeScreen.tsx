import {View, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import CardList from '../components/Card/CardList';
import {COLORS} from '../constants';
import {API_URL} from '../../Api';
import Header from '../components/Header';

const HomeScreen = () => {
  

  const [_data, _setData] = useState([]);
  const getData = async () => {
    await fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        _setData(data.results);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <Header/>
      {/* <Search /> */}
      <CardList data={_data} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor,
  },
});

export default HomeScreen;
