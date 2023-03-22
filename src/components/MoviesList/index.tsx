import React from 'react';
import {FlatList} from 'react-native';
import {Movie} from '../../../types';
import LoadMore from '../Buttons/LoadMore';
import Reset from '../Buttons/Reset';
import EmptyView from '../EmptyView';
import MovieCard from '../MovieCard';

interface Props {
  yearFilter: number | null;
  filteredData: Movie[];
  moviesData: Movie[];
  handleNavigation: (x: string) => void;
  loadMore: () => void;
  reset: () => void;
}

const MoviesList = ({
  yearFilter,
  filteredData,
  moviesData,
  handleNavigation,
  loadMore,
  reset,
}: Props) => {
  return (
    <FlatList
      data={yearFilter ? filteredData : moviesData}
      renderItem={movie => (
        <MovieCard
          title={movie?.item.Title}
          year={movie?.item.Year}
          poster={movie?.item.Poster}
          onSelect={(imdbID: string) => handleNavigation(imdbID)}
          imdbID={movie?.item.imdbID}
          key={movie?.item.imdbID}
        />
      )}
      keyExtractor={item => item?.imdbID}
      ListFooterComponent={
        !yearFilter ? <LoadMore loadMore={loadMore} /> : <Reset reset={reset} />
      }
      ListEmptyComponent={<EmptyView />}
      numColumns={2}
    />
  );
};

export default MoviesList;
