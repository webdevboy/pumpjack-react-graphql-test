import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';
import { SearchStyled } from './styled';

const PeopleTableSearch = ({ search, setSearch }) => (
  <SearchStyled>
    <FormControl>
      <InputLabel htmlFor="sw-people-search">Search</InputLabel>
      <Input
        id="sw-people-search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        endAdornment={
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        }
      />
    </FormControl>
  </SearchStyled>
 
);

export default PeopleTableSearch;
