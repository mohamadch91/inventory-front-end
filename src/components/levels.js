import * as React from 'react';
import PropTypes from 'prop-types';
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
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import Modal from '@mui/material/Modal';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import './css/levels.css'
function createData(id, name, minp, maxp, mincp,maxcp,az,bz,d2,d8,ds) {
  return {
    id,
    name,
    minp,
    maxp,
    mincp,
    maxcp,
    az,
    bz,
    d2,
    d8,
    ds,
  };
}

const rows = [
  createData(1, 'Central1', 12.20	,3.00	,2.00	,0.15	,4.78	,19.41	,0.17	,2.30,	1.37	,0.27),
  createData(2, 'Directorate', 5.90	,0.37,	3.00,	0.11,	0.32,	1.65,	0.02	,3.40,	0.49,	0.03),
  createData(3, 'District', 0.00,	0.00	,0.00,	0.00,	0.00,	0.00	,0.00	,0.00	,0.00,	0.00),
  createData(4, 'HF', 5.83,	0.32	,4.00	,0.11,	0.25,	0.72	,0.01	,4.50,	0.37,	0.01
  )
  
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'id',
    numeric: true,
    disablePadding: true,
    label: 'id',
  },
  {
    id: 'name',
    numeric: false,
    disablePadding: false,
    label: 'name',
  },
  {
    id: 'Min. Population',
    numeric: true,
    disablePadding: true,
    label: 'Min. Population',
  },
  {
    id: 'Max. Population ',
    numeric: true,
    disablePadding: true,
    label: 'Max. Population ',
  },
  {
    id: 'Min. Population: Children',
    numeric: true,
    disablePadding: true,
    label: 'Min. Population: Children',
  },

  {
    id: 'Max. Population: Children',
    numeric: true,
    disablePadding: true,
    label: 'Max. Population: Children',
  },
  {
    id: 'Above zero (2 - 8 C) in cm3',
    numeric: true,
    disablePadding: true,
    label: 'Above zero (2 - 8 C) in cm3',
  },
  {
    id: 'Below zero (-20 C)',
    numeric: true,
    disablePadding: true,
    label: 'Below zero (-20 C)',
  },
  {
    id: '+25 degree C',
    numeric: true,
    disablePadding: true,
    label: '+25 degree C',
  },
  {
    id: '-80 degree C',
    numeric: true,
    disablePadding: true,
    label: '-80 degree C',
  },
  {
    id: 'Dry Store Volume',
    numeric: true,
    disablePadding: true,
    label: 'Dry Store Volume',
  },
  {
    id: 'edit',
    numeric: true,
    disablePadding: false,
    label: 'edit',
  },













];
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "80%",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
    bacckgroundColor: '#dff6ff56',
    p: 4,
  };
  const div_style={
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
    padding:"25px",
}
function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead sx={{marginLeft:"10px",backgroundColor:"#dff6ff56"}}>
      <TableRow sx={{marginLeft:"10px",backgroundColor:"#dff6ff56"}}>
       
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
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

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = (props) => {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        backgroundColor:"#dff6ff56",
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Level Configuration Information
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

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function Levels() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
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

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 3,boxShadow:"rgba(0, 0, 0, 0.1) 0px 4px 12px" }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer >
          <Table
            sx={{ minWidth: 750,backgroundColor:"#dff6ff56" }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody sx={{backgroundColor:"#dff6ff56"}}>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                    >
                    <TableCell align="right">{row.id}</TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding=""
                        align="left"
                      >
                        {row.name}
                      </TableCell>
                   
                      <TableCell align="right">{row.minp}</TableCell>
                      <TableCell align="right">{row.maxp}</TableCell>
                      <TableCell align="right">{row.mincp}</TableCell>
                      <TableCell align="right">{row.maxcp}</TableCell>
                      <TableCell align="right">{row.az}</TableCell>
                      <TableCell align="right">{row.bz}</TableCell>
                      <TableCell align="right">{row.d2}</TableCell>
                      <TableCell align="right">{row.d8}</TableCell>
                      <TableCell align="right">{row.ds}</TableCell>
                      <TableCell align="right">
                        <IconButton>
                            <EditIcon />
                        </IconButton>

                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
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
          sx={{backgroundColor:"#dff6ff56"}}
          count={rows.length}
          className="pagination"
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
      <Button onClick={handleOpen} variant="contained" component="label">
Add level 
</Button>
      
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
        <div style={div_style}>
      <Typography  variant="h6" gutterBottom>
        <h2>Add Level</h2>
        
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="name"
            name="name"
            label="name"
            fullWidth
            autoComplete="name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="Min. Population"
            name="Min. Population"
            label="Min. Population"
            fullWidth
            autoComplete="Countrycode"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="Max. Population "
            name="Max. Population "
            label="Max. Population "
            fullWidth
            autoComplete="Countrycode"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="Min. Population: Children"
            name="Min. Population: Children"
            label="Min. Population: Children"
            fullWidth
            autoComplete="Min"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="Max. Population: Children"
            name="Max. Population: Children"
            label="Max. Population: Children"
            fullWidth
            autoComplete="Max"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="Above zero (2 - 8 C) "
            name="Above zero (2 - 8 C) "
            label="Above zero (2 - 8 C) "
            fullWidth
            autoComplete="Above zero (2 - 8 C) "
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="Below zero (-20 C)"
            name="Below zero (-20 C)"
            label="Below zero (-20 C)"
            fullWidth
            autoComplete="Below zero (-20 C)"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="+25 degree C"
            name="+25 degree C"
            label="+25 degree C"
            fullWidth
            autoComplete="+25 degree C"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="-80 degree C"
            name="-80 degree C"
            label="-80 degree C"
            fullWidth
            autoComplete="-80 degree C"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="Dry Store Volume"
            name="Dry Store Volume"
            label="Dry Store Volume"
            fullWidth
            autoComplete="Dry Store Volume"
            variant="standard"
          />
        </Grid>
     
        <Grid item xs={12} sm={6}/>
        
<Grid item xs={12} sm={3}>
<Button variant="contained" component="label">
Sumbit

</Button>
</Grid>
        
      </Grid>
  </div>
        </Box>
      </Modal>

    </Box>
  );
}
