import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import MovieCard from '../../components/MovieCard';
import SearchBar from '../../components/SearchBar';
import styles from './styles.scss';
import FetchMoviesService from '../../service/FetchMoviesService';
import config from '../../../config';

const HomeScreen: React.FC = ({navigation}) => {
  console.log('navigation', navigation.navigate);
  const [moviesData, setMoviesData] = useState([]);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    async function fetchData() {
      const moviesToDisplay =
        searchQuery !== '' ? searchQuery : config.DEFAULT_MOVIE;

      const data = await FetchMoviesService.get(moviesToDisplay, page);
      console.log('data', data);
      setMoviesData([...moviesData, ...data?.Search]);
    }
    fetchData();
  }, [page, searchQuery]);

  const loadMore = () => {
    setPage(page + 1);
  };

  const handleSearch = (searchQuery: string) => {
    setSearchQuery(searchQuery);
    setMoviesData([]);
    setPage(1);
  };

  const handleNavigation = imdbID => {
    navigation.navigate('Details', {id: imdbID});
  };

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={[styles.container, {paddingTop: StatusBar.currentHeight}]}>
          <SearchBar placeholder={'Seach for movies'} onSearch={handleSearch} />
          {moviesData?.map((movie, key) => {
            return (
              <MovieCard
                title={movie?.Title}
                year={movie?.Year}
                poster={movie?.Poster}
                onSelect={(imdbID: any) => handleNavigation(imdbID)}
                imdbID={movie?.imdbID}
                key={key}
              />
            );
          })}
          {/* <Button title="test" onPress={() => navigation.navigate('Details')} /> */}
          <Button title="Load more" onPress={loadMore} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
