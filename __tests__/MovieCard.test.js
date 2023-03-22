import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import MovieCard from '../src/components/MovieCard';

describe('MovieCard component', () => {
  const mockOnSelect = jest.fn();
  const mockMovieData = {
    title: 'The Godfather',
    year: '1972',
    poster: 'http://example.com/godfather.jpg',
    imdbID: 'tt0068646',
  };

  test('renders movie card with title, year, and poster', () => {
    const {getByText, getByTestId} = render(
      <MovieCard {...mockMovieData} onSelect={mockOnSelect} />,
    );

    const titleText = getByText(mockMovieData.title);
    const yearText = getByText(mockMovieData.year);
    const posterImage = getByTestId('poster-image');

    expect(titleText).toBeTruthy();
    expect(yearText).toBeTruthy();
    expect(posterImage).toBeTruthy();
    expect(posterImage.props.source.uri).toBe(mockMovieData.poster);
  });

  test('calls onSelect function when card is pressed', () => {
    const {getByTestId} = render(
      <MovieCard {...mockMovieData} onSelect={mockOnSelect} />,
    );

    const card = getByTestId('movie-card');

    fireEvent.press(card);

    expect(mockOnSelect).toHaveBeenCalledTimes(1);
    expect(mockOnSelect).toHaveBeenCalledWith(mockMovieData.imdbID);
  });
});
