import "./App.css";
import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Container from "./components/Container/Container";
import Navigation from "./components/Navigation/Navigation";
import Loader from "react-loader-spinner";

const HomePage = lazy(() =>
  import(
    "./components/HomePage/HomePage" /* webpackChunkName: 'trendingMovies' */
  )
);
const MoviesPage = lazy(() =>
  import("./components/MoviesPage/MoviesPage" /* webpackChunkName: 'movies' */)
);
const MovieDetails = lazy(() =>
  import(
    "./components/MovieDetails/MovieDetails" /* webpackChunkName: 'movieDetails' */
  )
);

function App() {
  return (
    <Container>
      <Navigation />
      <Suspense fallback={<Loader type="ThreeDots" color="crimson" />}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/movies" exact>
            <MoviesPage />
          </Route>
          <Route path="/movies/:id">
            <MovieDetails />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;
