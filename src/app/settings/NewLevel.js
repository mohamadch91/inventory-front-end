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
import { seperator } from "../helpers/seperator";

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
    label: "Name",
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
    label: "Minimum",
  },
  {
    id: "maxpop",
    numeric: false,
    disablePadding: true,
    label: "Maximum",
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
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          <Trans>Level list</Trans>
        </Typography>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
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
  const [excelName, setExcelName] = React.useState("");

  const isMinpopMaxpopValid = (text) => {
    if (
      text.toString().length > 0 &&
      parseInt(text) >= 0 &&
      parseInt(text) <= 300000000 &&
      !text.toString().includes(".")
    ) {
      return true;
    }
    return false;
  };

  const handleSave = () => {
    setEdit(!isEdit);
    setRows(rows);
    setDisable(true);
    if (
      !isMinpopMaxpopValid(rows[editableRowId - 1].maxpop) ||
      !isMinpopMaxpopValid(rows[editableRowId - 1].minpop)
    ) {
      toast.error(<Trans>Please fill the fields with right format</Trans>);
    }
    else if (parseInt(rows[editableRowId - 1].maxpop) < parseInt(rows[editableRowId - 1].minpop)) {
      toast.error(<Trans>Maximum population must be greater than minimum value</Trans>)
    }
    else {
      console.log(rows)
      const row_data=rows
      for (let i=0;i<row_data.length;i++){
        row_data[i].uppervol = parseFloat(row_data[i].uppervol.replace(seperator(),".")).toFixed(2);
        row_data[i].undervol = parseFloat(row_data[i].undervol.replace(seperator(), ".")).toFixed(2);
        row_data[i].m25vol = parseFloat(row_data[i].m25vol.replace(seperator(), ".")).toFixed(2);
        row_data[i].m70vol = parseFloat(row_data[i].m70vol.replace(seperator(), ".")).toFixed(2);
        row_data[i].dryvol = parseFloat(row_data[i].dryvol.replace(seperator(), ".")).toFixed(2);
        row_data[i].m25volnew = parseFloat(row_data[i].m25volnew.replace(seperator(), ".")).toFixed(2);
        row_data[i].m70volnew = parseFloat(row_data[i].m70volnew.replace(seperator(), ".")).toFixed(2);
        row_data[i].uppervolnew = parseFloat(
          row_data[i].uppervolnew.replace(seperator(), ".")
        ).toFixed(2);
        row_data[i].undervolnew = parseFloat(
          row_data[i].undervolnew.replace(seperator(), ".")
        ).toFixed(2);
        row_data[i].dryvolnew = parseFloat(
          row_data[i].dryvolnew.replace(seperator(), ".")
        ).toFixed(2);


      }
      UserService.putLevels(row_data)
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
                response.data[i].uppervol.toString().replace(".", seperator()),
                response.data[i].undervol.toString().replace(".", seperator()),
                response.data[i].m25vol.toString().replace(".", seperator()),
                response.data[i].m70vol.toString().replace(".", seperator()),
                response.data[i].dryvol.toString().replace(".", seperator()),
                response.data[i].m25volnew.toString().replace(".", seperator()),
                response.data[i].m70volnew.toString().replace(".", seperator()),
                response.data[i].uppervolnew
                  .toString()
                  .replace(".", seperator()),
                response.data[i].undervolnew
                  .toString()
                  .replace(".", seperator()),
                response.data[i].dryvolnew.toString().replace(".", seperator()),
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
      setEditableRowId(null);
      setEditFormData({});
    }
  };
  const handleInputChange = (e, index) => {
    let number = e.target.value;
    setDisable(false);
    const flag = number.split(".").length;
    if (flag > 1) {
      const num = number.split(".")[0];
      const floatpoint = number.split(".")[1].slice(0, 2);
      number = num + "." + floatpoint;
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
  const capacityValidator = (text) => {
    const check = parseFloat(text.replace(seperator(),"."));
    
    if (check < 0) {
      return false;
    }
    if (check.toString().length > 0 ) {
      return true;
    }
    return true;
  };
  const [excel, setExcel] = React.useState(null);
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
      const wsname = wb.SheetNames[3];
      const ws = wb.Sheets[wsname];
      console.log(ws);
      const data = XLSX.utils.sheet_to_json(ws);
      console.log(data);
      setExcel(data);
    };
    reader.readAsBinaryString(file);
  };
  const handleExcel = () => {
    let levels = [];
    const country = JSON.parse(localStorage.getItem("country"));
    for (let i = 0; i < country.levels; i++) {
      let data = excel[i];
      let level = {
        name: data["__EMPTY_2"],
        id: data["__EMPTY_3"],
        uppervol: data["2-8°C"] === "" ? 0.0 : data["2-8°C"].toFixed(2),
        m25vol: data["+25 C"] === "" ? 0.0 : data["+25 C"].toFixed(2),
        undervol: data["-20°C"] === "" ? 0.0 : data["-20°C"].toFixed(2),
        dryvol: data["Dry store"] === "" ? 0.0 : data["Dry store"].toFixed(2),
        m25volnew: data["+25 C"] === "" ? 0.0 : data["+25 C_1"].toFixed(2),
        uppervolnew: data["2-8°C_1"] === "" ? 0.0 : data["2-8°C_1"].toFixed(2),
        undervolnew: data["-20°C_1"] === "" ? 0.0 : data["-20°C_1"].toFixed(2),
        m70volnew: data["-70°C_1"] === "" ? 0.0 : data["-70°C_1"].toFixed(2),
        dryvolnew:
          data["Dry store_1"] === "" ? 0.0 : data["Dry store_1"].toFixed(2),
        m70vol: data["-70°C"] === "" ? 0.0 : data["-70°C"].toFixed(2),
      };
      levels.push(level);
    }
    UserService.putLevels(levels)
      .then((response) => {
        toast.success("Levels imported successfully");
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
      .catch((err) => {
        toast.error("Levels import failed");
      })
      .finally(() => {
      });
    console.log(levels);
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
              response.data[i].uppervol.toString().replace(".", seperator()),
              response.data[i].undervol.toString().replace(".", seperator()),
              response.data[i].m25vol.toString().replace(".", seperator()),
              response.data[i].m70vol.toString().replace(".", seperator()),
              response.data[i].dryvol.toString().replace(".", seperator()),
              response.data[i].m25volnew.toString().replace(".", seperator()),
              response.data[i].m70volnew.toString().replace(".", seperator()),
              response.data[i].uppervolnew.toString().replace(".", seperator()),
              response.data[i].undervolnew.toString().replace(".", seperator()),
              response.data[i].dryvolnew.toString().replace(".", seperator()),
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
        <h1 className="page-title">
          <Trans>Level settings</Trans>{" "}
        </h1>
      </div>
      {JSON.parse(localStorage.getItem("country"))?.usingtool && (
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
                  <Trans>Import levels capacity data</Trans>
                </Typography>
                <div className="col-md-12 item-class-page">
                  <label>
                    <Trans>Import from assistance tool</Trans>
                  </label>
                  <div className="row d-flex mb-2 ">
                    <div className="col-md-3">
                      <label className="btn btn-primary">
                        <Trans>Choose file</Trans>
                        <input
                          type="file"
                          id="Upload"
                          className="form-control filestyle"
                          style={{ display: "none" }}
                          onChange={handleImport}
                        />
                      </label>
                      <span className="glyphicon glyphicon-upload">
                        {" "}
                        {excelName}
                      </span>
                    </div>
                    <div className="col-md-3 ml-2">
                      <Button
                        variant="contained"
                        className="btn btn-primary"
                        onClick={() => {
                          handleExcel();
                        }}
                      >
                        <Trans>Submit</Trans>
                      </Button>
                    </div>
                    <div className="col-md-3 ml-2 mt-1">
                      <a href="./sample/Facility-import-sampleV1.xlsx" download>
                        <Trans>Download sample excel file</Trans>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Paper>
        </Box>
      )}
      <Box sx={{ width: "100%" }}>
        <Paper sx={{ width: "100%", mb: 2 }}>
          <EnhancedTableToolbar numSelected={selected.length} />
          <SharedTable>
            <TableHead>
              <TableRow>
                <TableCell colSpan={7.5}></TableCell>
                <TableCell colSpan={4}>
                  <Trans>Target populations:</Trans>
                  <Trans>
                    {JSON.parse(localStorage.getItem("country"))?.poptarget}
                  </Trans>
                </TableCell>
                <TableCell colSpan={6}></TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={4}></TableCell>
                <TableCell
                  sx={{
                    backgroundColor: "#82c4ed",
                    textAlign: "center",
                    borderLeft: "1px solid black",
                  }}
                  colSpan={5}
                >
                  <Trans>Scenario 1 (in cubic centimetres)</Trans>
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
                  <Trans>Scenario 2 (planned) (in cubic centimetres)</Trans>
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: "#2f7ebf",
                    textAlign: "center",
                    borderLeft: "1px solid black",
                    borderRight: "1px solid black",
                  }}
                  colSpan={2}
                >
                  <Trans>Population</Trans>
                </TableCell>
              </TableRow>
              <TableRow className="item-class-page">
                <TableCell colSpan={2}></TableCell>
                {headCells.map((headCell) => (
                  <TableCell
                    sx={
                      headCell.id === "m25vol" || headCell.id === "m25volnew"
                        ? { borderLeft: "1px solid black" }
                        : headCell.id === "dryvolnew"
                        ? { borderRight: "1px solid black" }
                        : ""
                    }
                    key={headCell.id}
                  >
                    <Trans>{headCell.label}</Trans>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody className="item-class-page">
              {rows.map((row, i) => (
                <>
                  {editableRowId !== row.id ? (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                      <TableCell colSpan={2}>
                        <button
                          className="edit-btn"
                          onClick={(event) => handleEdit1(row)}
                        >
                          <EditIcon />
                        </button>
                      </TableCell>
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
                          borderLeft: "1px solid black",
                          paddongLeft: "2px",
                        }}
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
                  ) : (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                      <TableCell colSpan={2}>
                        <button className="save-btn" onClick={handleSave}>
                          <Trans>Save</Trans>
                        </button>
                        <button
                          className="close-btn"
                          onClick={() => setEditableRowId(null)}
                        >
                          <CloseIcon />
                        </button>
                      </TableCell>
                      <TableCell
                        className="text-center"
                        scope="row"
                        padding="none"
                      >
                        <input
                          required
                          disabled
                          value={row.id}
                          name="name"
                          isValid={levelValidator(rows[i].name)}
                          type="text"
                        />
                      </TableCell>
                      <TableCell
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
                          onKeyPress={(e) => {
                            e.persist();
                            const numericKeys = "0123456789" + seperator();
                            if (numericKeys.indexOf(e.key) === -1) {
                              e.preventDefault();
                              return;
                            }

                            handleInputChange(e, i);
                          }}
                          onChange={(e) => {
                            handleInputChange(e, i);
                          }}
                          name="m25vol"
                          type="text"
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
                          onKeyPress={(e) => {
                            e.persist();
                            const numericKeys = "0123456789" + seperator();
                            if (numericKeys.indexOf(e.key) === -1) {
                              e.preventDefault();
                              return;
                            }

                            handleInputChange(e, i);
                          }}
                          onChange={(e) => {
                            handleInputChange(e, i);
                          }}
                          name="uppervol"
                          type="text"
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
                          onKeyPress={(e) => {
                            e.persist();
                            const numericKeys = "0123456789" + seperator();
                            if (numericKeys.indexOf(e.key) === -1) {
                              e.preventDefault();
                              return;
                            }

                            handleInputChange(e, i);
                          }}
                          onChange={(e) => {
                            handleInputChange(e, i);
                          }}
                          name="undervol"
                          type="text"
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
                          onKeyPress={(e) => {
                            e.persist();
                            const numericKeys = "0123456789" + seperator();
                            if (numericKeys.indexOf(e.key) === -1) {
                              e.preventDefault();
                              return;
                            }

                            handleInputChange(e, i);
                          }}
                          onChange={(e) => {
                            handleInputChange(e, i);
                          }}
                          name="m70vol"
                          type="text"
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
                          onKeyPress={(e) => {
                            e.persist();
                            const numericKeys = "0123456789" + seperator();
                            if (numericKeys.indexOf(e.key) === -1) {
                              e.preventDefault();
                              return;
                            }

                            handleInputChange(e, i);
                          }}
                          onChange={(e) => {
                            handleInputChange(e, i);
                          }}
                          name="dryvol"
                          type="text"
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
                          onKeyPress={(e) => {
                            e.persist();
                            const numericKeys = "0123456789" + seperator();
                            if (numericKeys.indexOf(e.key) === -1) {
                              e.preventDefault();
                              return;
                            }

                            handleInputChange(e, i);
                          }}
                          onChange={(e) => {
                            handleInputChange(e, i);
                          }}
                          name="m25volnew"
                          type="text"
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
                          onKeyPress={(e) => {
                            e.persist();
                            const numericKeys = "0123456789" + seperator();
                            if (numericKeys.indexOf(e.key) === -1) {
                              e.preventDefault();
                              return;
                            }

                            handleInputChange(e, i);
                          }}
                          onChange={(e) => {
                            handleInputChange(e, i);
                          }}
                          name="uppervolnew"
                          type="text"
                          placeholder="0"
                          min="0"
                        />
                      </TableCell>
                      <TableCell padding="none" align="center">
                        <input
                          required
                          isValid={capacityValidator(rows[i].undervolnew)}
                          value={rows[i].undervolnew}
                          onKeyPress={(e) => {
                            e.persist();
                            const numericKeys = "0123456789" + seperator();
                            if (numericKeys.indexOf(e.key) === -1) {
                              e.preventDefault();
                              return;
                            }

                            handleInputChange(e, i);
                          }}
                          onChange={(e) => {
                            handleInputChange(e, i);
                          }}
                          name="undervolnew"
                          type="text"
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
                          onKeyPress={(e) => {
                            e.persist();
                            const numericKeys = "0123456789" + seperator();
                            if (numericKeys.indexOf(e.key) === -1) {
                              e.preventDefault();
                              return;
                            }

                            handleInputChange(e, i);
                          }}
                          onChange={(e) => {
                            handleInputChange(e, i);
                          }}
                          name="m70volnew"
                          type="text"
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
                          onKeyPress={(e) => {
                            e.persist();
                            const numericKeys = "0123456789" + seperator();
                            if (numericKeys.indexOf(e.key) === -1) {
                              e.preventDefault();
                              return;
                            }

                            handleInputChange(e, i);
                          }}
                          onChange={(e) => {
                            handleInputChange(e, i);
                          }}
                          name="dryvolnew"
                          type="text"
                          placeholder="0"
                          min="0"
                        />
                      </TableCell>

                      <TableCell padding="none" align="center">
                        <input
                          required
                          value={rows[i].minpop}
                          onChange={(e) => {
                            handleInputChange(e, i);
                          }}
                          name="minpop"
                          type="number"
                          min="0"
                          max="100000000"
                          step="1"
                        />
                        <span></span>
                      </TableCell>
                      <TableCell padding="none" align="center">
                        <input
                          required
                          value={rows[i].maxpop}
                          onChange={(e) => {
                            handleInputChange(e, i);
                          }}
                          name="maxpop"
                          type="number"
                          min={rows[i].minpop}
                          max="100000000"
                          step="1"
                        />
                      </TableCell>
                    </TableRow>
                  )}
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
