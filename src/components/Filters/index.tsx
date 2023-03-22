import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import styles from './styles.scss';

interface Props {
  onYearFilterPress: (year: number) => void;
  yearFilter: number | null;
}

const Filters = ({onYearFilterPress, yearFilter}: Props) => {
  const getYears = () => {
    const startYear = 1980;
    const endYear = 2023;
    const years = [];

    for (let i = startYear; i <= endYear; i++) {
      years.push(i);
    }

    return years;
  };

  return (
    <View>
      <Text style={styles.title}>Filter by year </Text>
      <ScrollView horizontal={true}>
        {getYears()?.map((item, key) => {
          return (
            <TouchableOpacity
              key={key}
              style={[
                styles.filterBtn,
                item == yearFilter && styles.activeFilter,
              ]}
              onPress={() => onYearFilterPress(item)}>
              <Text style={styles.filterText}>{item}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Filters;
