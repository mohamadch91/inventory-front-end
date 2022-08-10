import React, { Component, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ProgressBar } from "react-bootstrap";
import UserService from "../services/user.service";
import { DataGrid } from "@mui/x-data-grid";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Level from "./Level";
import { alpha } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import "./new.css";
import { visuallyHidden } from "@mui/utils";

function createData(
  number,
  name,
  maxpop,
  minpop,
  uppervol,
  undervol,
  m25vol,
  m70vol,
  dryvol,
  m25volnew,
  m70volnew,
  uppervolnew,
  undervolnew,
  dryvolnew,
  country,
  parent
) {
  return {
    number,
    name,
    maxpop,
    minpop,
    uppervol,
    undervol,
    m25vol,
    m70vol,
    dryvol,
    m25volnew,
    m70volnew,
    uppervolnew,
    undervolnew,
    dryvolnew,
    country,
    parent,
  };
}

const columns = [
  { field: "id", headerName: "id", width: 70 },
  { field: "name", headerName: "name", width: 130 },
  { field: "minp", headerName: "Min. Population", width: 130 },
  { field: "maxp", headerName: "Max. Population", width: 130 },
  { field: "az", headerName: "Min. Population: Children", width: 130 },
  { field: "bz", headerName: "Max. Population: Children", width: 130 },
  { field: "d2", headerName: "Above zero (2 - 8 C) in cm3", width: 130 },
  { field: "d8", headerName: "Below zero (-20 C)", width: 130 },
  { field: "ds", headerName: "Below zero (-20 C)", width: 130 },
  { field: "a", headerName: "+25 degree C", width: 130 },
  { field: "bb", headerName: "-80 degree C", width: 130 },
  { field: "cc", headerName: "Dry Store Volume", width: 130 },
  { field: "dd", headerName: "Dry Store Volume(New)", width: 130 },
  { field: "ee", headerName: "-80 degree C (NEW)", width: 130 },
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
  return order === "desc"
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

const style = {
  position: "absolute",
  top: "50%",
  left: "55%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const headCells = [
  {
    id: "number",
    numeric: false,
    disablePadding: true,
    label: "Levels",
  },
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "name",
  },
  {
    id: "m25vol",
    numeric: false,
    disablePadding: true,
    label: "+25 C",
  },
  {
    id: "uppervol",
    numeric: false,
    disablePadding: true,
    label: "+2 - +8 C",
  },
  {
    id: "undervol",
    numeric: false,
    disablePadding: true,
    label: "-20 C",
  },
  {
    id: "m70vol",
    numeric: false,
    disablePadding: true,
    label: "-70 C",
  },
  {
    id: "dryvol",
    numeric: false,
    disablePadding: true,
    label: "Dry store",
  },
  {
    id: "m25volnew",
    numeric: false,
    disablePadding: true,
    label: "+25 C",
  },
  {
    id: "uppervolnew",
    numeric: false,
    disablePadding: true,
    label: "+2 - +8 C",
  },
  {
    id: "undervolnew",
    numeric: false,
    disablePadding: true,
    label: "-20 C",
  },
  {
    id: "m70volnew",
    numeric: false,
    disablePadding: true,
    label: "-70 C",
  },
  {
    id: "dryvolnew",
    numeric: false,
    disablePadding: true,
    label: "Dry store",
  },
  {
    id: "minpop",
    numeric: false,
    disablePadding: true,
    label: "Min pop",
  },
  {
    id: "max pop",
    numeric: false,
    disablePadding: true,
    label: "max pop",
  },
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell colSpan={5}></TableCell>
        <TableCell colSpan={4}>
          Target Population :
          {JSON.parse(localStorage.getItem("country")).poptarget}
          {console.log(JSON.parse(localStorage.getItem("country")).poptarget)}
        </TableCell>
        <TableCell colSpan={6}></TableCell>
      </TableRow>
      <TableRow>
        <TableCell colSpan={3}></TableCell>
        <TableCell
          sx={{
            backgroundColor: "#82c4ed",
            textAlign: "center",
            borderLeft: "1px solid black",
          }}
          colSpan={5}
        >
          Current values
        </TableCell>
        <TableCell
          sx={{
            backgroundColor: "#2f7ebf",
            textAlign: "center",
            borderLeft: "1px solid black",
            borderRight: "1px solid black",
          }}
          colSpan={5}
        >
          Planned values
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell x padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            sx={
              headCell.id == "m25vol" || headCell.id == "m25volnew"
                ? { borderLeft: "1px solid black" }
                : headCell.id == "dryvolnew"
                ? { borderRight: "1px solid black" }
                : ""
            }
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
const EnhancedTableToolbar = (props) => {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Level list
        </Typography>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

export default function DataTable() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [rows, setRows] = useState([]);
  const [rowUpdate, setRowUpdate] = useState([]);
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.name);
      setSelected(newSelected);
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
        selected.slice(selectedIndex + 1)
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

  useEffect(() => {
    // get
    UserService.getLevels()
      .then((response) => {
        let row = [];
        for (let i = 0; i < response.data.length; i++) {
          row.push(
            createData(
              response.data[i].number,
              response.data[i].name,
              response.data[i].maxpop,
              response.data[i].minpop,
              response.data[i].uppervol,
              response.data[i].undervol,
              response.data[i].m25vol,
              response.data[i].m70vol,
              response.data[i].dryvol,
              response.data[i].m25volnew,
              response.data[i].m70volnew,
              response.data[i].uppervolnew,
              response.data[i].undervolnew,
              response.data[i].dryvolnew,
              response.data[i].country,
              response.data[i].parent
            )
          );
        }
        setRows(row);
      })
      .catch((e) => {
        console.log(e);
      });
    // put
    UserService.putLevels()
      .then((res) => {
        localStorage.setItem("level-put", JSON.stringify(res.data));
        const level = JSON.parse(localStorage.getItem("level-put"));
        setRowUpdate({
          id: level.id,
          number: level.number,
          maxpop: level.maxpop,
          minpop: level.minpop,
          uppervol: level.uppervol,
          undervol: level.undervol,
          m25vol: level.m25vol,
          m70vol: level.m70vol,
          m25volnew: level.m25volnew,
          m70volnew: level.m70volnew,
          uppervolnew: level.uppervolnew,
          undervolnew: level.undervolnew,
          name: level.name,
          dryvol: level.dryvol,
          dryvolnew: level.dryvolnew,
          country: level.dryvolnew,
          parent: level.parent,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div>
      <div className="page-header">
        <h3 className="page-title"> Level Configurations </h3>
      </div>

      <Box sx={{ width: "100%" }}>
        <Paper sx={{ width: "100%", mb: 2 }}>
          <EnhancedTableToolbar numSelected={selected.length} />
          <TableContainer>
            <Table
              sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
              size={dense ? "small" : "medium"}
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
                        <TableCell align="right" padding="checkbox">
                          <Checkbox
                            color="primary"
                            checked={isItemSelected}
                            inputProps={{
                              "aria-labelledby": labelId,
                            }}
                          />
                        </TableCell>
                        <TableCell scope="row" padding="none">
                          {row.number}
                        </TableCell>
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                        >
                          {row.name}
                        </TableCell>
                        <TableCell
                          sx={{ borderLeft: "1px solid black" }}
                          padding="none"
                          align="rigth"
                        >
                          {row.m25vol}
                        </TableCell>
                        <TableCell padding="none" align="left">
                          {row.uppervol}
                        </TableCell>
                        <TableCell padding="none" align="left">
                          {row.undervol}
                        </TableCell>
                        <TableCell padding="none" align="left">
                          {row.m70vol}
                        </TableCell>
                        <TableCell padding="none" align="left">
                          {row.dryvol}
                        </TableCell>
                        <TableCell
                          sx={{ borderLeft: "1px solid black" }}
                          padding="none"
                          align="left"
                        >
                          {row.m25volnew}
                        </TableCell>
                        <TableCell padding="none" align="left">
                          {row.uppervolnew}
                        </TableCell>
                        <TableCell padding="none" align="left">
                          {row.undervolnew}
                        </TableCell>
                        <TableCell padding="none" align="left">
                          {row.m70volnew}
                        </TableCell>
                        <TableCell
                          padding="none"
                          sx={{ borderRight: "1px solid black" }}
                          align="left"
                        >
                          {row.dryvolnew}
                        </TableCell>
                        <TableCell padding="none" align="left">
                          {row.minpop}
                        </TableCell>
                        <TableCell padding="none" align="left">
                          {row.maxpop}
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
          {/* pagination */}
          <TablePagination
            sx={{ marginBottom: "0" }}
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
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
      </Box>
    </div>
  );
}
