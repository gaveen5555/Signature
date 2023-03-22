import React, {useEffect, useMemo, useState} from 'react';
import {View, StatusBar, SafeAreaView} from 'react-native';
import SearchBar from '../../components/SearchBar';
import styles from './styles.scss';
import FetchMoviesService from '../../service/FetchMoviesService';
import config from '../../../config';
import TextHeading from '../../components/TextHeadings';
import Filters from '../../components/Filters';
import {Movie} from '../../../types';
import MoviesList from '../../components/MoviesList';
import Loading from '../../components/Loading';

const HomeScreen: React.FC = ({navigation}: any) => {
  const [moviesData, setMoviesData] = useState<Movie[]>([]);
  const [page, setPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [cachedData, setCachedData] = useState<any>({});
  const [yearFilter, setYearFilter] = useState<number | null>(null);
  const [filteredData, setFilteredData] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //Memoizing the type of movie to fetch. Default movie or the searched movie.
  const moviesToDisplay = useMemo(
    () => (searchQuery !== '' ? searchQuery : config.DEFAULT_MOVIE),
    [searchQuery],
  );

  //Fetches data from the omdbapi
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const cachedResult = cachedData[moviesToDisplay + page];
      if (cachedResult) {
        setMoviesData(prevMoviesData => [
          ...prevMoviesData,
          ...cachedResult?.Search,
        ]);
        return;
      }

      const data = await FetchMoviesService.get(moviesToDisplay, page);

      setMoviesData(prevMoviesData => [...prevMoviesData, ...data?.Search]);

      setCachedData((prevCachedData: any) => ({
        ...prevCachedData,
        [moviesToDisplay + page]: data,
      }));
      setIsLoading(false);
    }

    fetchData();
  }, [moviesToDisplay, page]);

  //If a year filter is selected, the movie data list will be filtered accordingly.
  useEffect(() => {
    if (yearFilter) {
      const filterdMoviesByYear = moviesData.filter(
        item => item.Year == yearFilter.toString(),
      );
      setFilteredData(filterdMoviesByYear);
    }
  }, [yearFilter]);

  const loadMore = () => {
    setPage(page + 1);
  };

  const reset = () => {
    setYearFilter(null);
  };

  const handleSearch = (searchString: string) => {
    setSearchQuery(searchString);
    setMoviesData([]);
    setPage(1);
  };

  const handleYearFilter = (year: number) => {
    setYearFilter(year);
  };

  const handleNavigation = (imdbID: string) => {
    navigation.navigate('Details', {id: imdbID});
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      {isLoading ? (
        <Loading />
      ) : (
        <View style={{paddingTop: StatusBar.currentHeight, flex: 1}}>
          <TextHeading style={styles.title}>
            What do you want to watch?
          </TextHeading>

          <SearchBar placeholder={'Seach for movies'} onSearch={handleSearch} />
          <View style={styles.filterContainer}>
            <Filters
              onYearFilterPress={(year: number) => handleYearFilter(year)}
              yearFilter={yearFilter}
            />
          </View>

          <View style={styles.listContainer}>
            <MoviesList
              yearFilter={yearFilter}
              filteredData={filteredData}
              moviesData={moviesData}
              handleNavigation={handleNavigation}
              loadMore={loadMore}
              reset={reset}
            />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
