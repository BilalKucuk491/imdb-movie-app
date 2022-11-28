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
  console.log(overview.length);

  return (
    <View style={styles.container}>
      {poster_path !== 'N/A' ? (
        <Image source={{uri: API_IMG + poster_path}} style={styles.image} />
      ) : (
        <Image source={images.notFoundImage} style={styles.image} />
      )}
      <View style={styles.infoContainer}>
        <Text style={{...styles.text, fontSize: 25}}>
          {original_title !== 'N/A' ? original_title : 'NONE'}
        </Text>
        <Text style={styles.text}>
          {release_date !== 'N/A' ? release_date : 'NONE'}
        </Text>
        <Text style={styles.text}>
          {overview.length < 100
            ? `${overview}`
            : `${overview.substring(0, 32)}...`}
        </Text>
        <Text style={styles.text}>
          {original_language !== 'N/A' ? original_language : 'NONE'}
        </Text>
        <Text style={styles.text}>
          {vote_average !== 'N/A' ? vote_average : 'NONE'}
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
