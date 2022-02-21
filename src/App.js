import { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

const HomePage = lazy(() => import("./pages/home/home.jsx"));
const MoivesPage = lazy(() => import("./pages/movies/movies.jsx"));
const MovieDetailsPage = lazy(() =>
  import("./components/MovieDetails/MovieDetails.jsx")
);

export const App = () => {
  return (
    <div>
      <Suspense fallback={<h1>LOADING...</h1>}>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/movies">
            <MoivesPage />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </div>
  );
};
