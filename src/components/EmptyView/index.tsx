import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles.scss';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const EmptyView = () => {
  return (
    <View style={styles.container}>
      <MaterialIcons name="info-outline" size={100} color="#ffc700" />
      <Text style={styles.title}>No data for the selected filter </Text>
    </View>
  );
};

export default EmptyView;
