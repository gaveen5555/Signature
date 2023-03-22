import React from 'react';
import {TouchableOpacity, View, Text, Image, Dimensions} from 'react-native';
import {MovieCardType} from '../../../types';
import styles from './styles.scss';

const MovieCard = ({title, year, poster, imdbID, onSelect}: MovieCardType) => {
  const {width} = Dimensions.get('window');
  return (
    <TouchableOpacity
      testID="movie-card"
      style={{width: width * 0.5 - 30, margin: 10, height: 280}}
      onPress={() => {
        onSelect(imdbID);
      }}>
      <Image
        style={styles.poster}
        source={{
          uri: poster,
        }}
      />
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.year}>{year}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;
