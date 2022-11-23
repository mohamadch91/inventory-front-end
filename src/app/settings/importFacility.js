import * as React from "react";
import PropTypes from "prop-types";
import { ProgressBar } from "react-bootstrap";
import UserService from "../services/user.service";
import FacilitiesService from "../services/facilities.service";
import { DataGrid } from "@mui/x-data-grid";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";
import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import { Form } from "react-bootstrap";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import "./newLevel.scss";
import { visuallyHidden } from "@mui/utils";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import Spinner from "../shared/Spinner";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import CreateIcon from "@mui/icons-material/Create";
import DoneIcon from "@mui/icons-material/Done";
import { ContactSupportOutlined } from "@mui/icons-material";
import toast from "react-hot-toast";
import "../styles/table.scss";
import * as XLSX from "xlsx";
import SharedTable from "../shared/SharedTable";
import CloseIcon from "../shared/CloseIcon";
import { Trans } from "react-i18next";

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
    label: "ID",
  },
  {
    id: "name",
    numeric: false,
    disablePadding: false,
    label: "Facility Name",
  },
  {
    id: "code",
    numeric: false,
    disablePadding: true,
    label: "Facility code",
  },
  {
    id: "other",
    numeric: false,
    disablePadding: true,
    label: "Other code",
  },
  {
    id: "parent",
    numeric: false,
    disablePadding: true,
    label: "Parent facility",
  },

  {
    id: "level",
    numeric: false,
    disablePadding: true,
    label: "Facility Level",
  },
  {
    id: "lname",
    numeric: false,
    disablePadding: true,
    label: "Level Name",
  },
  {
    id: "pop",
    numeric: false,
    disablePadding: true,
    label: "Population",
  },
];

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
          {numSelected} <Trans>selected</Trans>
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          <Trans>Imported Facilities</Trans>
        </Typography>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function ImportFacility() {
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
  const [isLoading,setIsloading]=React.useState(false);
  const isMinpopMaxpopValid = (text) => {
    if (
      text.toString().length > 0 &&
      parseInt(text) >= 0 &&
      parseInt(text) <= 100000000 &&
      !text.toString().includes(".")
    ) {
      return true;
    }
    return false;
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
    return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
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
  const capacityValidator = (text) => {
    const check = parseFloat(text);
    if (check < 0) {
      return false;
    }
    if (check.toString().length > 0) {
      return true;
    }
    return true;
  };
  const [excel, setExcel] = React.useState(null);
  const [excelName, setExcelName] = React.useState("");

  const [editFormData, setEditFormData] = React.useState({});
  const [editableRowId, setEditableRowId] = React.useState(null);
  function handleEdit1(i) {
    const formData = rows.find((item) => item.id === i.id);
    setEditFormData(formData);
    setEditableRowId(i.id);
  }
  const handleImport = (e) => {
    const [file] = e.target.files;
    setExcelName(file.name);
    const reader = new FileReader();
    reader.onload = (evt) => {
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: "binary" });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      console.log(ws);
      const data = XLSX.utils.sheet_to_json(ws);
      console.log(data);
      setExcel(data);
    };
    reader.readAsBinaryString(file);
  };
  const handleExcel = () => {
    setIsloading(true);
    let levels = [];
    for (let i = 0; i < excel.length; i++) {
      let data = excel[i];
      if(data.FacilityCode && data.facilityName && data.Level){
      let level = {
        code: data.FacilityCode ? data.FacilityCode : null,
        name: data.facilityName ? data.facilityName : null,
        parentid: data.parentFac ? data.parentFac : null,
        level: data.Level ? data.Level : null,
        pop: data.Population ? data.Population : 0,
      };
      levels.push(level);
    }
  }
    FacilitiesService.importFacilities(levels)
      .then((response) => {
        toast.success("Facility import succesfully");
        setIsloading(false);
        setRows(response.data);
      })
      .catch((err) => {
        console.log(err)
        toast.error(JSON.stringify(err.response.data));
        setIsloading(false);
      })
      .finally(() => {
      });
    console.log(levels);
      
  };
  if(isLoading){
    <Spinner/>
    // console.log("loading")
  }
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">
          {" "}
          <Trans>Import facility</Trans>
        </h1>
      </div>
      <Box sx={{ width: "100%" }}>
        <Paper sx={{ width: "100%", mb: 2 }}>
          <div>
            <div className="item-class-page row mr-5 mt-2 mb-3 ml-5">
              <Typography
                sx={{ flex: "1 1 100%" }}
                variant="h6"
                id="tableTitle"
                component="div"
                className=" mt-3 item-class-page"
              >
                <Trans>Import facility</Trans>
              </Typography>
              <div className="col-md-12 item-class-page">
                <label>
                  <Trans>Upload excel to import facility</Trans>
                </label>
                <div className="row d-flex mb-2 ">
                  <div className="col-md-3">
                    <label className="btn btn-primary">
                      <Trans>Choose file</Trans>

                      <input
                        type="file"
                        className="form-control"
                        onChange={handleImport}
                        style={{ display: "none" }}
                      />
                    </label>
                    <span className="glyphicon glyphicon-upload mt-3 text-black">
                      {" "}
                      {excelName}
                    </span>
                  </div>
                  <div className="col-md-3 ml-2 mt-1">
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        handleExcel();
                      }}
                    >
                      <Trans>Submit</Trans>
                    </Button>
                  </div>
                  <div className="col-md-3 ml-2 mt-1">
                    <a href="./sample/Level-import-sampleV1.xlsx" download>
                      <Trans>Download sample excel file</Trans>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Paper>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Paper sx={{ width: "100%", mb: 2 }}>
          <EnhancedTableToolbar numSelected={selected.length} />
          <SharedTable>
            <TableHead>
              <TableRow className="item-class-page">
                {headCells.map((headCell) => (
                  <TableCell key={headCell.id}>
                    <Trans>{headCell.label}</Trans>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody className="item-class-page">
              {rows.map((row, i) => (
                <>
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    <TableCell
                      className="text-center"
                      scope="row"
                      padding="none"
                    >
                      {row.id}
                    </TableCell>
                    <TableCell
                      scope="row"
                      className="text-center"
                      padding="none"
                    >
                      {row.name}
                    </TableCell>
                    <TableCell
                      sx={{
                        paddongLeft: "2px",
                      }}
                      padding="none"
                      align="center"
                    >
                      {row.code}
                    </TableCell>
                    <TableCell
                      sx={{
                        paddongLeft: "2px",
                      }}
                      padding="none"
                      align="center"
                    >
                      {row.other_code}
                    </TableCell>
                    <TableCell padding="none" align="center">
                      {row.parentid}
                    </TableCell>

                    <TableCell padding="none" align="center">
                      {row.level}
                    </TableCell>
                    <TableCell padding="none" align="center">
                      {row.lname}
                    </TableCell>
                    <TableCell padding="none" align="center">
                      {separator(row.pop)}
                    </TableCell>
                  </TableRow>
                </>
              ))}
            </TableBody>
          </SharedTable>

          {/* pagination */}
        </Paper>
      </Box>
    </div>
  );
}
