import { useEffect, useState } from 'react';
import { fetchTrendMovies } from '../services/api';
import MovieList from 'components/MovieList/MovieList';
import { LoadingIndicator } from 'components/SharedLayout/LoadingDots';
import { NoCastText } from 'components/Cast/Cast.styled';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setError(false);
        setIsLoading(true);
        const { results } = await fetchTrendMovies();
        setTrendingMovies(results);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingIndicator />
      ) : error ? (
        <NoCastText>
          Sorry, we could not fetch the trending movies. Please try again later.
        </NoCastText>
      ) : (
        <MovieList trendingMovies={trendingMovies} />
      )}
    </>
  );
};

export default Home;
