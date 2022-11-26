import {View, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import CardList from './src/components/Card';
import Search from './src/components/Search';
const data = [];

const App = () => {
  const [_data, _setData] = useState([]);

  const getData = async () => {
    const response = await fetch(
      'https://omdbapi.com/?apikey=b1916020&s=iyjman',
    );
    const jsonData = await response.json();

    _setData(jsonData.Search);
    data.push(jsonData.Search);
  };

  useEffect(() => {
    getData();
  }, []);

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
    backgroundColor: '#161616',
  },
  header: {
    backgroundColor: 'red',
    height: 100,
  },
});

export default App;
