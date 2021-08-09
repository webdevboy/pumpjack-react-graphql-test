import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import CircularProgress from '@material-ui/core/CircularProgress';

import { GET_ALL_PEOPLE } from './apollo/queries';
import PeopleTable from './components/people-table';
import { STORAGE_FAVORITES_KEY } from './contants';
import { GlobalStyle } from './globalStyle';
import { AppStyled, AppTitle } from './App.styled';

function App() {
  const [people, setPeople] = useState([]);
  const [peopleFavorites, setPeopleFavorites] = useState([]);
  const [search, setSearch] = useState('');
  const [nameSort, setNameSort] = useState('dec');
  const { loading, error, data } = useQuery(GET_ALL_PEOPLE);

  const getFavorites = () => {
    const favoritesString = localStorage.getItem(STORAGE_FAVORITES_KEY);
    if(favoritesString) {
      const favorites = JSON.parse(favoritesString);
      setPeopleFavorites(favorites);
    }
  };

  const favoriteClick = (item) => {
    const isFavorite = peopleFavorites.find(favorite => favorite.id === item.id);
    if(isFavorite) {
      const newFavorites = peopleFavorites.filter(favorite => favorite.id !== item.id);
      localStorage.setItem(STORAGE_FAVORITES_KEY, JSON.stringify(newFavorites));
      setPeopleFavorites(newFavorites);
    }
    else {
      const newFavorites = [...peopleFavorites, item];
      localStorage.setItem(STORAGE_FAVORITES_KEY, JSON.stringify(newFavorites));
      setPeopleFavorites(newFavorites);
    }
  };

  const getIsFavorite = (item) => {
    return !!peopleFavorites.find(favorite => favorite.id === item.id);
  };

  const sortItemsByName = (items, isDescending) => {
    const sortedItems = items.sort((people1, people2) => {
      const name1 = people1.name.toLowerCase();
      const name2 = people2.name.toLowerCase();
      return (name1 < name2) ? -1 : (name1 > name2) ? 1 : 0;
    });
    return isDescending ? sortedItems : sortedItems.reverse();
  };

  const applySearch = (items) => {
    const searchedItems = items.filter(item => {
      return item.name.toLowerCase().includes(search.toLowerCase());
    });
    return searchedItems;
  };

  useEffect(() => {
    if(error) {
      alert(error.toString());
    }
  }, [error]);

  useEffect(() => {
    if(data?.allPeople?.people) {
      const sortedItems = sortItemsByName([...data.allPeople.people], nameSort === 'dec');
      setPeople(sortedItems);
    }
  }, [nameSort, data]);

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <AppStyled>
      <GlobalStyle />
      <AppTitle>
        Star War Persons
      </AppTitle>
      {loading && (
        <CircularProgress />
      )}
      {!loading && (
        <PeopleTable
          items={applySearch(people)}
          nameSort={nameSort}
          search={search}
          favoriteClick={favoriteClick}
          getIsFavorite={getIsFavorite}
          nameSortClick={setNameSort}
          setSearch={setSearch}
        />
      )}
    </AppStyled>
  );
}

export default App;
