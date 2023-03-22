import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles.scss';

const LoadMore = ({loadMore}: {loadMore: () => void}) => {
  return (
    <TouchableOpacity onPress={loadMore}>
      <Text style={styles.loadMoreBtn}>Load more</Text>
    </TouchableOpacity>
  );
};

export default LoadMore;
