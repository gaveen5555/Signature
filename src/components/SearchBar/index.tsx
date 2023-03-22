import React, {useState} from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import styles from './styles.scss';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface Props {
  placeholder: string;
  onSearch: (x: string) => void;
}

const SearchBar = ({placeholder, onSearch}: Props) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="gray"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <TouchableOpacity onPress={() => handleSearch()}>
        <MaterialIcons name="search" size={38} color="#ffc700" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
