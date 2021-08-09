import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import IconButton from '@material-ui/core/IconButton';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const PeopleTableHead = ({ nameSort, nameSortClick }) => (
  <TableHead>
    <TableRow>
      <TableCell
        align="left"
      >
        <span>Name</span>
        {nameSort === 'dec' && (
          <IconButton onClick={() => nameSortClick('inc')} aria-label="down">
            <ArrowDownwardIcon />
          </IconButton>
        )}
        {nameSort === 'inc' && (
          <IconButton onClick={() => nameSortClick('dec')} aria-label="up">
            <ArrowUpwardIcon />
          </IconButton>
        )}
      </TableCell>
      <TableCell
        align="center"
      >
        Birth Year
      </TableCell>
      <TableCell
        align="center"
      >
        Gender
      </TableCell>
      <TableCell
        align="center"
      >
        Home World
      </TableCell>
      <TableCell
        align="center"
      >
        Species
      </TableCell>
      <TableCell align="right">Options</TableCell>
    </TableRow>
  </TableHead>
);

export default PeopleTableHead;
