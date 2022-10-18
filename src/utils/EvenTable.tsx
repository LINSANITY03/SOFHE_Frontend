import React, { useState, useCallback } from "react";

import Moment from 'react-moment';
import EditEvent from "../components/EditEvent";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";

import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';

import './EvenTable.scss';

interface Data {
  title: string;
  description: string;
  credit: number;
  status: boolean;
  task_datetime: string;
  id: number;
}

function createData(
  title: string,
  description: string,
  credit: number,
  status: boolean,
  task_datetime: string,
  id: number,
): Data {
  return {
    title,
    description,
    credit,
    status,
    task_datetime,
    id,
  };
}

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (
  a: { [key in Key]: number | string | boolean },
  b: { [key in Key]: number | string | boolean },
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: 'title',
    numeric: false,
    disablePadding: true,
    label: 'Title',
  },
  {
    id: 'description',
    numeric: true,
    disablePadding: false,
    label: 'Description',
  },
  {
    id: 'credit',
    numeric: true,
    disablePadding: false,
    label: 'Credit',
  },
  {
    id: 'status',
    numeric: true,
    disablePadding: false,
    label: 'Status',
  },
  {
    id: 'task_datetime',
    numeric: true,
    disablePadding: false,
    label: 'Updated',
  },
];

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            // align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              <Typography
                fontWeight="600"
                fontFamily='Elina'
              >{headCell.label}</Typography>

              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

// interface with key as numSelected
interface EnhancedTableToolbarProps {
  numSelected: number;
}

// EnhancedTableToolbar is responsible to make toolbar dynamic when user selected an array
const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {/* when user selects an array the toolbar need to display additional information */}
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
          fontWeight="600"
          fontFamily='Elina'
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h5"
          id="tableTitle"
          fontWeight="600"
          fontFamily='Elina'
          component="div"
        >
          User Events
        </Typography>
      )}
      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

// interface for the props 
interface EventsProps {
  events: {
    id: number
    title: string
    description: string
    credit: number
    date_only: string
    time_only: string
    status: boolean
    task_datetime: string
  }[],
  user: string | null,
  getEvents: {
    id: number
    title: string
    description: string
    credit: number
    date_only: string
    time_only: string
    status: boolean
    task_datetime: string
  }[]
}

// main function export
function EnhancedTable(props: EventsProps) {
  const [order, setOrder] = useState<Order>('asc'); /* initialize with asc string with Order type */
  const [orderBy, setOrderBy] = useState<keyof Data>('title');

  /* only dict key can be used with calories initialized */
  const [selected, setSelected] = useState<readonly string[]>([]);
  /* initialize with empty array of string which is immutable */
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [selectevent, setSelectEvent] = useState<Data | string | boolean>("");

  // callback function to show/hide the +Create Model with the help of setstate
  const ShowEditModel = useCallback(() => {
    setSelectEvent(!selectevent);
  }, [selectevent]);


  // get array of data from api and store in rows 
  const rows = props.events.map((event) => (
    createData(event.title, event.description, event.credit, event.status, event.task_datetime, event.id)
  ));

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    console.log('orderBy', orderBy)
    console.log('property', property)
    console.log('order', order)
    console.log('isAsc', isAsc)
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.title);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, title: string) => {
    const selectedIndex = selected.indexOf(title);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, title);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (title: string) => selected.indexOf(title) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <>
      {selectevent ? <div className="overlay"></div> : <></>}
      <div className={`${selectevent ? "show__model" : "hide__model"}`}>
        {selectevent ? (
          <EditEvent
            ShowEditModel={ShowEditModel}
            user={props.user}
            selectevent={selectevent}
            getEvents={props.getEvents}
          />
        ) : (
          ""
        )}
      </div>

      <Box sx={{ width: '100%' }}>
        <Paper sx={{ width: '100%', mb: 2 }}>
          <EnhancedTableToolbar numSelected={selected.length} />
          {/* sends to selected array length to enhancedTableToolbar */}
          <TableContainer>
            <Table
              sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
              size={'medium'}
            >
              <EnhancedTableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              <TableBody>
                {/* if you don't need to support IE11, you can replace the `stableSort` call with:
              rows.slice().sort(getComparator(order, orderBy)) */}
                {stableSort(rows, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(row.title);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.title}
                        selected={isItemSelected}
                        className='table__row'
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            color="primary"
                            checked={isItemSelected}
                            inputProps={{
                              'aria-labelledby': labelId,
                            }}
                            onClick={(event) => handleClick(event, row.title)}
                          />
                        </TableCell>

                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                        >
                          <Typography
                            fontFamily='Elina'
                            fontSize={12}
                            fontWeight={600}
                          >{row.title}</Typography>
                        </TableCell>

                        <TableCell ><Typography
                          fontFamily='Elina'
                          fontSize={12}
                          fontWeight={600}
                        >{row.description}</Typography></TableCell>

                        <TableCell ><Typography
                          fontFamily='Elina'
                          fontSize={12}
                          fontWeight={600}
                        >{row.credit.toLocaleString()}</Typography></TableCell>

                        <TableCell >{row.status ?
                          <FontAwesomeIcon
                            icon={faCaretDown}
                            id="downward__icon"
                            size="2x"
                          /> : <FontAwesomeIcon
                            icon={faCaretUp}
                            id="upward__icon"
                            size="2x"
                          />}</TableCell>
                        <TableCell>

                          <Typography
                            fontFamily='Elina'
                            fontSize={12}
                            fontWeight={600}
                          >
                            <Moment format="YYYY-MM-DD">{row.task_datetime}</Moment><Moment format="HH:mm A">{row.task_datetime}</Moment>
                          </Typography>
                        </TableCell>

                        <TableCell>
                          <div className="buttons__content">
                            <div className="edit__btn">
                              <button
                                className="event__edit btns"
                                type="button"
                                onClick={() => setSelectEvent(row)}
                              >
                                Edit
                              </button>
                            </div>
                            <div className="delete__btn">
                              <button
                                className="event__delete btns"
                                type="button"
                              // onClick={() => DeletingTask(event.id)}
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: (53) * emptyRows,
                    }}
                  >
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            sx={{
              ".MuiTablePagination-selectLabel, .MuiInputBase-root, .MuiTablePagination-displayedRows": {
                fontFamily: 'Elina',
                fontWeight: 600
              }
            }}
          />
        </Paper>
      </Box >
    </>
  );
}

export default EnhancedTable;
