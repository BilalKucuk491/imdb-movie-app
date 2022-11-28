import {View, ScrollView, Text} from 'react-native';
import React from 'react';
import Card from './Card';
import {Search} from '../../types/DataInterface';

interface CardListInterface {
  data: Array<Search>;
}

const CardList = ({data}: CardListInterface) => {
  return (
    <View style={{flex: 1}}>
      {data != '' ? (
        <ScrollView>
          {data
            .filter(el => {
              return el != null;
            })
            .map((item, key) => {
              return (
                <Card
                  key={key}
                  original_language={item.original_language}
                  original_title={item.title}
                  overview={item.overview}
                  poster_path={item.poster_path}
                  release_date={item.release_date}
                  vote_average={item.vote_average}
                />
              );
            })}
        </ScrollView>
      ) : (
        <Text
          style={{
            padding: 20,
            color: '#fff',
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          Arama sonucu bulunamadi...
        </Text>
      )}
    </View>
  );
};

export default CardList;
