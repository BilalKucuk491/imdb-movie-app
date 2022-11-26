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
      {data != null ? (
        <ScrollView>
          {data
            .filter(el => {
              return el != null;
            })
            .map((item, key) => {
              return (
                <Card
                  key={key}
                  imageUrl={item.Poster}
                  movieName={item.Title}
                  movieYear={item.Year}
                  movieType={item.Type}
                />
              );
            })}
        </ScrollView>
      ) : (
        <Text style={{padding:20,color: '#fff', fontSize: 20, fontWeight: 'bold'}}>
          Arama sonucu bulunamadi...
        </Text>
      )}
    </View>
  );
};

export default CardList;
