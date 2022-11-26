import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {CardInterface} from '../../types/CardInterface';
import {COLORS, images} from '../../constants/index';

const Card = ({imageUrl, movieName, movieType, movieYear}: CardInterface) => {
  return (
    <View style={styles.container}>
      {imageUrl !== 'N/A' ? (
        <Image source={{uri: imageUrl}} style={styles.image} />
      ) : (
        <Image source={images.notFoundImage} style={styles.image} />
      )}
      <View style={styles.infoContainer}>
        <Text style={{...styles.text, fontSize: 25}}>
          {movieName !== 'N/A' ? movieName : 'NONE'}
        </Text>
        <Text style={styles.text}>
          {movieYear !== 'N/A' ? movieYear : 'NONE'}
        </Text>
        <Text style={styles.text}>
          {movieType !== 'N/A' ? movieType.toUpperCase() : 'NONE'}
        </Text>

        <TouchableOpacity>
          <Icon
            name="checkmark-circle-sharp"
            size={56}
            color={COLORS.checkIconColor}
          />
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
    backgroundColor: COLORS.cardColor,
  },
  text: {
    color: COLORS.titleColor,
  },
  image: {
    flex: 1,
    height: 250,
    resizeMode: 'contain',
    backgroundColor: COLORS.cardColor,
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
