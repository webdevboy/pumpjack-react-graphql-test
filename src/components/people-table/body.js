import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import StarIcon from '@material-ui/icons/Star';

const PeopleTableBody = ({ items, favoriteClick, getIsFavorite }) => (
  <TableBody>
    {items && items.map((item) => {
      const isFavorite = getIsFavorite(item);
      return (
        <TableRow key={item.id}>
          <TableCell
            align="left"
          >
            {item.name}
          </TableCell>
          <TableCell
            align="center"
          >
            {item.birthYear}
          </TableCell>
          <TableCell
            align="center"
          >
            {item.gender}
          </TableCell>
          <TableCell
            align="center"
          >
            {item.homeworld?.name}
          </TableCell>
          <TableCell
            align="center"
          >
            {item.species?.name}
          </TableCell>
          <TableCell align="right">
            <Tooltip title={isFavorite ? 'Remove from favorites' : 'Add to favorites'} placement="top">
              <IconButton onClick={() => favoriteClick(item)} color={isFavorite ? 'secondary' : 'primary'} aria-label="favorite">
                <StarIcon />
              </IconButton>
            </Tooltip>
          </TableCell>
        </TableRow>
      );
    })}
  </TableBody>
);

export default PeopleTableBody;
