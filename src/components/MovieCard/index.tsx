import React from 'react';
import {TouchableOpacity, View, Text, Image, Alert} from 'react-native';
import styles from './styles.scss';

const MovieCard = ({title, year, poster,imdbID, onSelect}) => {
  return (
    <TouchableOpacity
      style={{display: 'flex', flexDirection: 'row'}}
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
        <Text style={styles.genre}>{year}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;
