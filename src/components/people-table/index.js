import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TablePagination from '@material-ui/core/TablePagination';
import TableContainer from '@material-ui/core/TableContainer';

import { ITEMS_PER_PAGE } from '../../contants';
import PeopleTableHead from './head';
import PeopleTableBody from './body';
import PeopleTableSearch from './search';

const PeopleTable = ({
  items,
  search,
  nameSort,
  favoriteClick,
  getIsFavorite,
  nameSortClick,
  setSearch,
}) => {
  const [page, setPage] = useState(0);
  const slicedItems = items.slice((ITEMS_PER_PAGE * page), ITEMS_PER_PAGE * (page + 1));
  return (
    <>
      <PeopleTableSearch
        search={search}
        setSearch={setSearch}
      />
      <Paper>
        <TableContainer>
          <Table>
            <PeopleTableHead
              nameSort={nameSort}
              nameSortClick={nameSortClick}
            />
            <PeopleTableBody
              items={slicedItems}
              favoriteClick={favoriteClick}
              getIsFavorite={getIsFavorite}
            />
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[ITEMS_PER_PAGE]}
          component="div"
          count={items.length}
          rowsPerPage={ITEMS_PER_PAGE}
          page={page}
          onPageChange={(e, value) => setPage(value)}
          onRowsPerPageChange={() => {}}
        />
      </Paper>
    </>
  );
};

export default PeopleTable;
