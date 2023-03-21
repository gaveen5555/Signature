import React, {useState} from 'react';
import {Alert, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './styles.scss';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SearchBar = ({placeholder, onSearch}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <TouchableOpacity onPress={() => handleSearch()}>
        <MaterialIcons name="search" size={20} color="#4F8EF7" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
