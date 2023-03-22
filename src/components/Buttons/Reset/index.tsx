import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles.scss';

const Reset = ({reset}: {reset: () => void}) => {
  return (
    <TouchableOpacity onPress={reset}>
      <Text style={styles.resetBtn}>Reset filter</Text>
    </TouchableOpacity>
  );
};

export default Reset;
