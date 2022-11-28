import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {CardInterface} from '../../types/CardInterface';
import {COLORS, images} from '../../constants/index';
import {API_IMG} from '../../../Api';

const Card = ({
  original_language,
  original_title,
  overview,
  poster_path,
  vote_average,
  release_date,
}: CardInterface) => {
  return (
    <View style={styles.container}>
      {poster_path !== null ? (
        <Image source={{uri: API_IMG + poster_path}} style={styles.image} />
      ) : (
        <Image source={images.notFoundImage} style={styles.image} />
      )}

      <View style={styles.infoContainer}>
        <Text style={{...styles.text, fontSize: 20}}>
          {original_title == null ? 'NONE' : original_title}
        </Text>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginTop: 5,
          }}>
          <Text style={styles.text}>
            {release_date == null ? 'NONE' : release_date}
          </Text>
          <Text style={{...styles.text, color: COLORS.checkIconColor}}>
            {original_language == null ? 'NONE' : original_language.toLocaleUpperCase()}
          </Text>
        </View>
        <View style={styles.infoBody}>
          <Text style={styles.text}>
            {overview === null
              ? 'NONE'
              : (overview.length < 250
              ? `${overview}`
              : `${overview.substring(0, 100)}...`)}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 25,
    backgroundColor: COLORS.cardColor,
    height: 250,
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
    marginVertical: 15,
    marginRight: 25,
  },
  infoBody: {
    marginVertical: 15,
  },
});

export default Card;
