import React, { Component } from 'react';
<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
import MovieCardsList from './MovieCardsList';
=======
import './App.css';
import logo from './logo.svg';

/*
Use React and the data below to display a list of users alongside their favorite movies.

For detailed instructions, refer to instructions.md.
*/
>>>>>>> ab457c5f791f7e711d313d7a7757353e0789ab39

const profiles = [
  {
    id: 1,
    userID: '1',
    favoriteMovieID: '1',
  },
  {
    id: 2,
    userID: '2',
    favoriteMovieID: '1',
  },
  {
    id: 3,
    userID: '4',
    favoriteMovieID: '5',
  },
  {
    id: 4,
    userID: '5',
    favoriteMovieID: '2',
  },
  {
    id: 5,
    userID: '3',
    favoriteMovieID: '5',
  },
  {
    id: 6,
    userID: '6',
    favoriteMovieID: '4',
  },
];

const users = {
  1: {
    id: 1,
<<<<<<< HEAD
    name: 'Jane Jones',
=======
    name: 'Jane Cruz',
>>>>>>> ab457c5f791f7e711d313d7a7757353e0789ab39
    userName: 'coder',
  },
  2: {
    id: 2,
<<<<<<< HEAD
    name: 'Matthew Page',
=======
    name: 'Matthew Johnson',
>>>>>>> ab457c5f791f7e711d313d7a7757353e0789ab39
    userName: 'mpage',
  },
  3: {
    id: 3,
    name: 'Autumn Green',
    userName: 'user123',
  },
  4: {
<<<<<<< HEAD
    id: 3,
=======
    id: 4,
>>>>>>> ab457c5f791f7e711d313d7a7757353e0789ab39
    name: 'John Doe',
    userName: 'user123',
  },
  5: {
    id: 5,
<<<<<<< HEAD
    name: 'Lauren Johnson',
=======
    name: 'Lauren Carlson',
>>>>>>> ab457c5f791f7e711d313d7a7757353e0789ab39
    userName: 'user123',
  },
  6: {
    id: 6,
    name: 'Nicholas Lain',
    userName: 'user123',
  },
};

const movies = {
  1: {
    id: 1,
    name: 'Planet Earth 1',
  },
  2: {
    id: 2,
    name: 'Selma',
  },
  3: {
    id: 3,
    name: 'Million Dollar Baby',
  },
  4: {
    id: 4,
    name: 'Forrest Gump',
  },
  5: {
    id: 5,
    name: 'Get Out',
  },
};
<<<<<<< HEAD
function App () {
  return (
    <div>
=======

class App extends Component {
  render() {
<<<<<<< HEAD
    /*Return JSX*/
    return (
      /*
      Without this '(', JS will automatically put a ';' after the `return`
      keyword.
      */
=======
    return (
>>>>>>> 03cbdfd956559082fe182186eb23327cb58ff780
      <div>
>>>>>>> ab457c5f791f7e711d313d7a7757353e0789ab39
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
<<<<<<< HEAD
        <h1>How Popular is Your Favorite Movie?</h1>
        <MovieCardsList profiles={profiles} movies={movies} users={users} />
      </div>
  )
}


=======
<<<<<<< HEAD
        <ul>
          <h2>Favorite Movies</h2>

          {profiles.map(profile => {
            const userName = users[profile.userID].name;
            const favMovieName = movies[profile.favoriteMovieID].name;

            return (
              <li key={profile.id}>
                <p>{`${userName}'s favorite movie is "${favMovieName}."`}</p>
              </li>
            );
          })}
        </ul>
=======
        <h2>Favorite Movies</h2>
>>>>>>> 03cbdfd956559082fe182186eb23327cb58ff780
      </div>
    );
  }
}

>>>>>>> ab457c5f791f7e711d313d7a7757353e0789ab39
export default App;
