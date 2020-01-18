import React, { useState } from 'react';
import SavedList from './Movies/SavedList';
import {Route} from 'react-router-dom';
import MovieList from '../src/Movies/MovieList';
import Movie from '../src/Movies/Movie'



const App = () => {
  const [savedList, setSavedList] = useState( [] );
console.log(savedList);
  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div className='App'>
      <SavedList list={savedList} />
      {/* Routes */}
      <Route exact path='/' component={MovieList}/>
      <Route addToSavedList={addToSavedList} path='/movies/:id' component={Movie}/>
    </div>


  );
};

export default App;
