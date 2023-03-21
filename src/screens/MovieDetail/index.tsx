import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import styles from './styles.scss';

const MovieDetail: React.FC = ({ route, navigation }) => {

  const {id} = route.params;
  console.debug("IMDBID",id);
  return (
    <View style={styles.container}>
     <Text style={styles.title}>{id}</Text>
    </View>
  );
};

export default MovieDetail;
