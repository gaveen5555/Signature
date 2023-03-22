import React, {useEffect, useState} from 'react';
import {Text, View, Image, StatusBar, ScrollView} from 'react-native';
import FetchMovieDetails from '../../service/FetchMovieDetails';
import styles from './styles.scss';
import StarRating from 'react-native-star-rating';
import {MovieDetails} from '../../../types';
import {RouteProp} from '@react-navigation/native';
import Loading from '../../components/Loading';

interface MovieDetailProps {
  route: RouteProp<{params: {id: string}}, 'params'>;
}

const MovieDetail: React.FC<MovieDetailProps> = ({route}) => {
  const [movieDetails, setMovieDetails] = useState<MovieDetails>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {id} = route.params;

  //Fetch movie details using the id
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const data = await FetchMovieDetails.get(id);
      setMovieDetails(data);
      setIsLoading(false);
    }
    fetchData();
  }, [id]);

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />

      <View>
        {isLoading ? (
          <Loading />
        ) : (
          <View>
            {movieDetails?.Poster ? (
              <Image
                style={styles.poster}
                source={{
                  uri: movieDetails?.Poster,
                }}
              />
            ) : (
              <Image
                source={require('../../assets/posterplaceholder.png')}
                style={styles.placeholderImage}
              />
            )}

            <ScrollView style={styles.innerContainer}>
              <Text style={styles.title}>{movieDetails?.Title}</Text>
              <View style={styles.ratingContainer}>
                <Text style={styles.rating}>{movieDetails?.imdbRating}</Text>
                <StarRating
                  disabled={false}
                  maxStars={10}
                  rating={movieDetails?.imdbRating}
                  emptyStar={'star-border'}
                  fullStar={'star'}
                  halfStar={'star-half'}
                  iconSet={'MaterialIcons'}
                  fullStarColor={'#ffc700'}
                  starSize={22}
                />
              </View>
              <Text style={styles.subtitle}>{movieDetails?.Year}</Text>
              <Text style={styles.subtitle}>{movieDetails?.Director}</Text>
              <Text style={styles.plot}>{movieDetails?.Plot}</Text>
            </ScrollView>
          </View>
        )}
      </View>
    </View>
  );
};

export default MovieDetail;
