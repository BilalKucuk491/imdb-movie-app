import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import CardList from '../components/Card/CardList';
import Search from '../components/Search';
import {COLORS} from '../constants';
import {useSelector} from 'react-redux';
import {MovieState} from '../redux/reducers/movieReducer';
import {API_URL} from '../../Api';
import Header from '../components/Header';

const data = [];

const HomeScreen = () => {
  const state = useSelector<MovieState, MovieState['searchText']>(
    state => state.searchText,
  );

  const [_data, _setData] = useState([]);
  const getData = async () => {
    await fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        console.log(data.results[0].original_title);
        _setData(data.results);
      });
  };

  useEffect(() => {
    getData();
  }, [state]);

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
