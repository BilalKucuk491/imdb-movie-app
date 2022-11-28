import {View, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import CardList from '../components/Card/CardList';
import {COLORS} from '../constants';
import {useSelector} from 'react-redux';
import {MovieState} from '../redux/reducers/movieReducer';
import {API_URL, API_SEARCH} from '../../Api';

import SearchMovie from '../components/Search';
const data = [];
const SearchScreen = () => {
  const state = useSelector<MovieState, MovieState['searchText']>(
    state => state.searchText,
  );

  const [_data, _setData] = useState([]);

  const getData = async (searchValue: string) => {
    try {
      const url = API_SEARCH + searchValue;
      const res = await fetch(url);
      const jsonData = await res.json();
      _setData(jsonData.results);
      data.push(jsonData.results);
    } catch (error) {
      console.log('Arama hatasi: ' + error);
    }
  };

  useEffect(() => {
    getData(state.searchText);
  }, [state]);

  return (
    <View style={styles.container}>
      <SearchMovie />
      <CardList data={_data} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor,
  },
  buttonContainer: {},
  header: {
    height: 100,
  },
});

export default SearchScreen;
