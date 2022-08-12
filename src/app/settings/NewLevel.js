import * as React from "react";
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
import { Form } from "react-bootstrap";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import "./newLevel.css";
import { visuallyHidden } from "@mui/utils";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import CreateIcon from "@mui/icons-material/Create";
import DoneIcon from "@mui/icons-material/Done";
import { ContactSupportOutlined } from "@mui/icons-material";
function createData(
  id,
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
    id,
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

const StyledBox = styled(Box)(({ theme }) => ({
  height: 300,
  width: "100%",
  "& .MuiDataGrid-cell--editing": {
    backgroundColor: "rgb(255,215,115, 0.19)",
    color: "#1a3e72",
    "& .MuiInputBase-root": {
      height: "100%",
    },
  },
  "& .Mui-error": {
    backgroundColor: `rgb(126,10,15, ${
      theme.palette.mode === "dark" ? 0 : 0.1
    })`,
    color: theme.palette.error.main,
  },
}));

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
    disablePadding: false,
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
          {/* {console.log(JSON.parse(localStorage.getItem("country")).poptarget)} */}
        </TableCell>
        <TableCell colSpan={6}></TableCell>
      </TableRow>
      <TableRow>
        <TableCell colSpan={2}></TableCell>
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
            align={headCell.numeric ? "center" : "center"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
            {headCell.label}
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
  const [rows, setRows] = React.useState([]);
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [dense, setDense] = React.useState(false);
  const [isEdit, setEdit] = React.useState(false);
  const [disable, setDisable] = React.useState(true);
  const [showConfirm, setShowConfirm] = React.useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const handleEdit = (i) => {
    // If edit mode is true setEdit will
    // set it to false and vice versa
    setEdit(!isEdit);
  };
  const handleAdd = () => {
    setRows([
      ...rows,
      {
        id: rows.length + 1,
        firstname: "",
        lastname: "",
        city: "",
      },
    ]);
    setEdit(true);
  };
  const handleSave = () => {
    setEdit(!isEdit);
    setRows(rows);
    console.log("saved : ", rows);
    setDisable(true);
    // const req = JSON.stringify({ rows: rows });
    // console.log(req)
     UserService.putLevels( rows )
       .then((response) => {
         const country = JSON.parse(localStorage.getItem("country"));
         let row = [];
         for (let i = 0; i < country.levels; i++) {
           row.push(
             createData(
               response.data[i].id,
               response.data[i].name,
               parseInt(response.data[i].maxpop),
               parseInt(response.data[i].minpop),
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
         // console.log(e);
       });
    setOpen(true);
  };
  const handleInputChange = (e, index) => {
    setDisable(false);
     let number = e.target.value;
     const flag = number.split(".").length;
     console.log(flag);
     if (flag > 1) {
       const num = number.split(".")[0];
       const floatpoint = number.split(".")[1].slice(0, 2);
       number = num + "." + floatpoint;
       console.log(number);
     }
    const { name, value } = e.target;
    const list = [...rows];
    list[index][name] = number;
    setRows(list);
  };

  // Showing delete confirmation to users
  const handleConfirm = () => {
    setShowConfirm(true);
  };

  // Handle the case of delete confirmation where
  // user click yes delete a specific row of id:i
  const handleRemoveClick = (i) => {
    const list = [...rows];
    list.splice(i, 1);
    setRows(list);
    setShowConfirm(false);
  };

  // Handle the case of delete confirmation
  // where user click no
  const handleNo = () => {
    setShowConfirm(false);
  };

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

  const separator = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const levelValidator = (text) => {
    if (text.length > 0) {
      return true;
    }
  };
  const minpopValidator = (text) => {
    if (text.toString().length > 0) {
      return true;
    }
  };
  const maxpopValidator = (text) => {
    if (text.toString().length > 0) {
      return true;
    }
  };
  const capacityValidator = (text) => {
    // console.log(text)
    const check=parseFloat(text)
    console.log(check)
    if (check < 0) {
      return false;
    }
    if (check.toString().length > 0) {
      return true;
    }
    return true
  };
  React.useEffect(() => {
    // get
    UserService.getLevels()
      .then((response) => {
        const country = JSON.parse(localStorage.getItem("country"));
        let row = [];
        for (let i = 0; i < country.levels; i++) {
          row.push(
            createData(
              response.data[i].id,
              response.data[i].name,
              parseInt(response.data[i].maxpop),
              parseInt(response.data[i].minpop),
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
  }, []);

  return (
    
    <div>
      <div className="page-header">
        <h3 className="page-title"> Level Configurations </h3>
      </div>
      {rows.length !== 0 && (
        <div>
          {disable ? (
            <Button disabled align="right" onClick={handleSave}>
              <DoneIcon />
              SAVE
            </Button>
          ) : (
            <Button align="right" onClick={handleSave}>
              <DoneIcon />
              SAVE
            </Button>
          )}
          <Button align="right" onClick={handleEdit}>
            <CreateIcon />
            EDIT
          </Button>
        </div>
      )}
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
                 {console.log(rows)}
                {stableSort(rows, getComparator(order, orderBy)).map(
                  (row, i) => {
                    const isItemSelected = isSelected(row.name);
                    const labelId = `enhanced-table-checkbox-${i}`;
                    console.log(row)
                    return (
                      <>
                        {isEdit ? (
                          <TableRow
                            hover
                            role="checkbox"
                            aria-checked={isItemSelected}
                            tabIndex={-1}
                            key={row.id}
                            selected={isItemSelected}
                          >
                            <TableCell
                              className="text-center"
                              scope="row"
                              padding="none"
                            >
                              {row.id}
                            </TableCell>
                            <TableCell
                              component="th"
                              id={labelId}
                              scope="row"
                              padding="none"
                              className="text-center"
                            >
                              <input
                                required
                                isValid={levelValidator(rows[i].name)}
                                value={rows[i].name}
                                name="name"
                                onChange={(e) => {
                                  handleInputChange(e, i);
                                }}
                                type="text"
                              />
                              <span></span>
                            </TableCell>
                            <TableCell
                              sx={{ borderLeft: "1px solid black" }}
                              padding="none"
                              align="center"
                            >
                              <input
                                required
                                isValid={capacityValidator(rows[i].m25vol)}
                                isInvalid={!capacityValidator(rows[i].m25vol)}
                                value={rows[i].m25vol}
                                onChange={(e) => {
                                  handleInputChange(e, i);
                                }}
                                name="m25vol"
                                type="number"
                                placeholder="0"
                                min="0"
                              />
                             
                              <span></span>
                            </TableCell>
                            <TableCell padding="none" align="center">
                              <input
                                required
                                isValid={capacityValidator(rows[i].uppervol)}
                                value={rows[i].uppervol}
                                onChange={(e) => {
                                  handleInputChange(e, i);
                                }}
                                name="uppervol"
                                type="number"
                                placeholder="0"
                                min="0"
                              />
                              <span></span>
                            </TableCell>
                            <TableCell padding="none" align="center">
                              <input
                                required
                                isValid={capacityValidator(rows[i].undervol)}
                                value={rows[i].undervol}
                                onChange={(e) => {
                                  handleInputChange(e, i);
                                }}
                                name="undervol"
                                type="number"
                                placeholder="0"
                                min="0"
                              />
                              <span></span>
                            </TableCell>
                            <TableCell padding="none" align="center">
                              <input
                                required
                                isValid={capacityValidator(rows[i].m70vol)}
                                value={rows[i].m70vol}
                                onChange={(e) => {
                                  handleInputChange(e, i);
                                }}
                                name="m70vol"
                                type="number"
                                placeholder="0"
                                min="0"
                              />
                              <span></span>
                            </TableCell>
                            <TableCell padding="none" align="center">
                              <input
                                required
                                isValid={capacityValidator(rows[i].dryvol)}
                                value={rows[i].dryvol}
                                onChange={(e) => {
                                  handleInputChange(e, i);
                                }}
                                name="dryvol"
                                type="number"
                                placeholder="0"
                                min="0"
                              />
                            </TableCell>
                            <TableCell
                              sx={{ borderLeft: "1px solid black" }}
                              padding="none"
                              align="center"
                            >
                              <input
                                required
                                isValid={capacityValidator(rows[i].m25volnew)}
                                value={rows[i].m25volnew}
                                onChange={(e) => {
                                  handleInputChange(e, i);
                                }}
                                name="m25volnew"
                                type="number"
                                placeholder="0"
                                min="0"
                              />
                              <span></span>
                            </TableCell>
                            <TableCell padding="none" align="center">
                              <input
                                required
                                isValid={capacityValidator(rows[i].uppervolnew)}
                                value={rows[i].uppervolnew}
                                onChange={(e) => {
                                  handleInputChange(e, i);
                                }}
                                name="uppervolnew"
                                type="number"
                                placeholder="0"
                                min="0"
                              />
                            </TableCell>
                            <TableCell padding="none" align="center">
                              <input
                                required
                                isValid={capacityValidator(rows[i].undervolnew)}
                                value={rows[i].undervolnew}
                                onChange={(e) => {
                                  handleInputChange(e, i);
                                }}
                                name="undervolnew"
                                type="number"
                                placeholder="0"
                                min="0"
                              />
                              <span></span>
                            </TableCell>
                            <TableCell padding="none" align="center">
                              <input
                                required
                                isValid={capacityValidator(rows[i].m70volnew)}
                                value={rows[i].m70volnew}
                                onChange={(e) => {
                                  handleInputChange(e, i);
                                }}
                                name="m70volnew"
                                type="number"
                                placeholder="0"
                                min="0"
                              />
                              <span></span>
                            </TableCell>
                            <TableCell
                              padding="none"
                              sx={{ borderRight: "1px solid black" }}
                              align="center"
                            >
                              <input
                                required
                                isValid={capacityValidator(rows[i].dryvolnew)}
                                value={rows[i].dryvolnew}
                                onChange={(e) => {
                                  handleInputChange(e, i);
                                }}
                                name="dryvolnew"
                                type="number"
                                placeholder="0"
                                min="0"
                              />
                            </TableCell>

                            <TableCell padding="none" align="center">
                              <input
                                required
                                isValid={minpopValidator(rows[i].maxpop)}
                                value={separator(rows[i].maxpop)}
                                onChange={(e) => {
                                  handleInputChange(e, i);
                                }}
                                name="maxpop"
                                type="number"
                              />
                              <span></span>
                            </TableCell>
                            <TableCell padding="none" align="center">
                              <input
                                required
                                isValid={maxpopValidator(rows[i].minpop)}
                                value={separator(rows[i].minpop)}
                                onChange={(e) => {
                                  handleInputChange(e, i);
                                }}
                                name="minpop"
                                type="number"
                              />
                            </TableCell>
                          </TableRow>
                        ) : (
                          <TableRow
                            hover
                            role="checkbox"
                            aria-checked={isItemSelected}
                            tabIndex={-1}
                            key={row.id}
                            selected={isItemSelected}
                          >
                            <TableCell
                              className="text-center"
                              scope="row"
                              padding="none"
                            >
                              {row.id}
                            </TableCell>
                            <TableCell
                              component="th"
                              id={labelId}
                              scope="row"
                              className="text-center"
                              padding="none"
                            >
                              {row.name}
                            </TableCell>
                            <TableCell
                              sx={{ borderLeft: "1px solid black" }}
                              padding="none"
                              align="center"
                            >
                              {row.m25vol}
                            </TableCell>
                            <TableCell padding="none" align="center">
                              {row.uppervol}
                            </TableCell>
                            <TableCell padding="none" align="center">
                              {row.undervol}
                            </TableCell>
                            <TableCell padding="none" align="center">
                              {row.m70vol}
                            </TableCell>
                            <TableCell padding="none" align="center">
                              {row.dryvol}
                            </TableCell>
                            <TableCell
                              sx={{ borderLeft: "1px solid black" }}
                              padding="none"
                              align="center"
                            >
                              {row.m25volnew}
                            </TableCell>
                            <TableCell padding="none" align="center">
                              {row.uppervolnew}
                            </TableCell>
                            <TableCell padding="none" align="center">
                              {row.undervolnew}
                            </TableCell>
                            <TableCell padding="none" align="center">
                              {row.m70volnew}
                            </TableCell>
                            <TableCell
                              padding="none"
                              sx={{ borderRight: "1px solid black" }}
                              align="center"
                            >
                              {row.dryvolnew}
                            </TableCell>
                            <TableCell padding="none" align="center">
                              {separator(row.minpop)}
                            </TableCell>
                            <TableCell padding="none" align="center">
                              {separator(row.maxpop)}
                            </TableCell>
                          </TableRow>
                        )}
                      </>
                    );
                  }
                )}
              </TableBody>
            </Table>
          </TableContainer>
          {/* pagination */}
        </Paper>
        <FormControlLabel
          control={<Switch checked={dense} onChange={handleChangeDense} />}
          label="Dense padding"
        />
      </Box>
    </div>
  );
}
