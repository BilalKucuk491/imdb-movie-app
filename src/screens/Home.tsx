import {View, StyleSheet, TouchableOpacity, Button} from 'react-native';
import React, {useState, useEffect} from 'react';
import CardList from '../components/Card/CardList';
import Search from '../components/Search';
import {COLORS} from '../constants';
import {useSelector} from 'react-redux';
import {MovieState} from '../redux/reducers/movieReducer';

const data = [];

const Home = () => {
  const state = useSelector<MovieState,MovieState["searchText"]>(
    state => state.searchText,
  );

  const [_data, _setData] = useState([]);
  const getData = async (value:string) => {

    const searchValue = value;

    const response = await fetch(
      `https://omdbapi.com/?apikey=c0f561f2&s=${searchValue}`,
    );
    const jsonData = await response.json();

    _setData(jsonData.Search);
    data.push(jsonData.Search);
  };

  useEffect(() => {
    getData(state.searchText);

  }, [state]);

  
  return (
    <View style={styles.container}>
      <Search />
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

export default Home;
