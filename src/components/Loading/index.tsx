import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles.scss';

const Loading = () => {
  return (
    <View style={styles.container}>
      <Text>Loading...</Text>
    </View>
  );
};

export default Loading;
