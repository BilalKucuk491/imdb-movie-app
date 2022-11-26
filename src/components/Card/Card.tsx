import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {CardInterface} from '../../types/CardInterface';
import {notFoundImage} from '../../actions/constants/images';

const Card = ({imageUrl, movieName, movieType, movieYear}: CardInterface) => {
  return (
    <View style={styles.container}>
      {imageUrl !== 'N/A' ? (
        <Image source={{uri: imageUrl}} style={styles.image} />
      ) : (
        <Image source={notFoundImage} style={styles.image} />
      )}
      <View style={styles.infoContainer}>
        <Text style={{color: 'white', fontSize: 25}}>
          {movieName !== 'N/A' ? movieName : 'NONE'}
        </Text>
        <Text style={{color: 'white'}}>
          {movieYear !== 'N/A' ? movieYear : 'NONE'}
        </Text>
        <Text style={{color: 'white'}}>
          {movieType !== 'N/A' ? movieType.toUpperCase() : 'NONE'}
        </Text>

        <TouchableOpacity>
          <Icon name="checkmark-circle-sharp" size={56} color={'#F6D632'} />
        </TouchableOpacity>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 25,
    backgroundColor: '#373737',
  },
  image: {
    flex: 1,
    height: 250,
    resizeMode: 'contain',
    backgroundColor: '#373737',
    marginLeft: -20,
  },

  infoContainer: {
    flex: 1,
    alignItems: 'flex-start',
    padding: 10,
    justifyContent: 'space-between',
  },
});

export default Card;
