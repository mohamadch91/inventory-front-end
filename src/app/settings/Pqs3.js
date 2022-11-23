import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { useEffect, useState } from "react";
import CloseIcon from "../shared/CloseIcon";
import EditIcon from "../shared/EditIcon";
import SharedTable from "../shared/SharedTable";
import toast from "react-hot-toast";
import Spinner from "../shared/Spinner";
import "../styles/table.scss";
import "../styles/inputs.scss";
import ItemsService from "../services/items.service";
import UserService from "../services/user.service";
import * as XLSX from "xlsx";
import userService from "../services/user.service";
import * as React from "react";
import TablePagination from "@mui/material/TablePagination";
import { useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import { Trans } from "react-i18next";
import { seperator } from "../helpers/seperator";

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}
TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};
function Pqs3() {
  const [pqs4, setPqs4] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const [isLoading, setIsLoading] = useState(true);
  const [selectedItemClass, setSelectedItemClass] = useState(null);

  function getPqs() {
    userService
      .getpqs3()
      .then((res) => {
        setPqs4(res.data);
        setIsLoading(false);
        setPage(res.data.length / 10);
      })
      .catch((err) => {
                toast.error(<Trans>There is a problem loading data</Trans>);

        setIsLoading(false);
      });
  }

  useEffect(() => {
    getPqs();
    setPage(0);
    setRowsPerPage(5);
  }, []);

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - pqs4.length) : 0;

  const [excel, setExcel] = useState(null);
  const [excelName, setExcelName] = useState(null);

  const handleImport = (e) => {
    const [file] = e.target.files;
    setExcelName(file.name);
    const reader = new FileReader();
    reader.onload = (evt) => {
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: "binary" });
      const wsname = wb.SheetNames[0];
       const ws = wb.Sheets[wsname];
       setExcel(ws);
    };
    reader.readAsBinaryString(file);
  };
  const handleExcel = () => {
    setIsLoading(true);
    let pqs = [];
    const len = XLSX.utils.sheet_to_json(excel).length + 2;
    console.log(len)
    for (let i = 7; i < len; i++) {
      let x = 0.0;
      let y = 0.0;
      let z = 0.0;
      if (excel["Z" + i] === "###" || excel["Z" + i] === undefined) {
        x = 0.0;
      } else {
        x = parseFloat(excel["Z" + i].w);
      }
    if (excel["AA" + i] === "###" || excel["AA" + i] === undefined) {
      y = 0.0;
    } else {
      y = parseFloat(excel["AA" + i].w);
    }
    if (excel["AB" + i] === "###" || excel["AB" + i] === undefined) {
      z = 0.0;
    } else {
      console.log(excel["AB" + i])
      z = parseFloat(excel["AB" + i].w);
    }
    
    
      const data = {
        description: excel["A" + i] === undefined ? "" : excel["A" + i].v,
        make: excel["B" + i] === undefined ? "" : excel["B" + i].v,
        model: excel["C" + i] === undefined ? "" : excel["C" + i].v,
        pqscode: excel["D" + i] === undefined ? "" : excel["D" + i].v,
        refrigerant: excel["F" + i] === undefined ? "" : excel["F" + i].v,
        refrigeratorcapacity:
          excel["I" + i] === undefined ? 0.0 : excel["I" + i].v,
        freezercapacity: excel["J" + i] === undefined ? 0.0 : excel["J" + i].v,
        kg_24_hrs: excel["M" + i] === undefined ? 0.0 : excel["M" + i].v,
        h: x,
        w: y,
        l: z,
      };
      pqs.push(data);
    }
    // console.log(pqs)
    UserService.addpqs3(pqs)
      .then((res) => {
        toast.success(<Trans>Data imported successfully</Trans>);
        getPqs();
      })
      .catch((err) => {
        toast.error(<Trans>There is a problem importing data</Trans>);
        setIsLoading(false);
      });
  };
  const defaultLabelDisplayedRows = ({ from, to, count }) => {
    return `${Math.ceil(from)}–${to} of ${
      count !== -1 ? Math.ceil(count) : `more than ${to}`
    }`;
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="item-class-page">
      <h3 className="page-title mb-3">
        <Trans>Import PQS/PIS 003 and view</Trans>
      </h3>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="add-row mt-4 mb-4">
            <h3 className="mb-3 mt-3">
              <Trans>Insert PQS excel file</Trans>
            </h3>
            <div className="row">
              <div className="col-md-3 flex-column d-flex">
                <label className="mb-3">
                  <Trans>Excel file</Trans>
                </label>
                <label className="btn btn-primary">
                  <Trans>Choose file</Trans>

                  <input
                    name="describe"
                    type="file"
                    onChange={handleImport}
                    style={{ display: "none" }}
                    required
                  ></input>
                </label>
                <span className="glyphicon glyphicon-upload mt-3 text-black"> {excelName}</span>
              </div>
              <div className="col-md-3 flex-column d-flex ">
                <label className="">
                  <Trans>
                    If you click on submit, all old data will be erased!
                  </Trans>
                </label>
                <button onClick={handleExcel} className="save-btn mt-3">
                  <Trans>Submit</Trans>
                </button>
              </div>
              <div className="col-md-3 ml-2 mt-1">
                <a href="./sample/PQS-import-sampleV1.xlsx" download>
                  <Trans>Download sample excel file</Trans>
                </a>
              </div>
            </div>
          </div>
          <div className="row mb-4 mt-4">
            <div className="col-md-2 d-flex align-items-center">
              <h4>
                <Trans>PQS list</Trans>
              </h4>
            </div>
          </div>
          <div className="table-container">
            <SharedTable>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Trans>PQS/PIS Code</Trans>
                  </TableCell>
                  <TableCell>
                    <Trans>PQS/PIS type</Trans>
                  </TableCell>
                  <TableCell>
                    <Trans>Manufacturer</Trans>
                  </TableCell>
                  <TableCell>
                    <Trans>Model</Trans>
                  </TableCell>
                  <TableCell>
                    <Trans>Refrigerant gas</Trans>
                  </TableCell>
                  <TableCell>
                    <Trans>Net vaccine storage capacity (lit.)</Trans>
                  </TableCell>
                  <TableCell>
                    <Trans>Net freeze capacity (lit.)</Trans>
                  </TableCell>
                  <TableCell>
                    <Trans>
                      CCoolant pack production capacity (Kg/24 hours)
                    </Trans>{" "}
                  </TableCell>

                  <TableCell>
                    <Trans>Height (cm)</Trans>
                  </TableCell>
                  <TableCell>
                    <Trans>Width (cm)</Trans>
                  </TableCell>
                  <TableCell>
                    <Trans>Length (cm)</Trans>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {pqs4 &&
                  (rowsPerPage > 0
                    ? pqs4.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                    : pqs4
                  ).map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{item.pqscode}</TableCell>
                      <TableCell>{item.description}</TableCell>
                      <TableCell>{item.make}</TableCell>
                      <TableCell>{item.model}</TableCell>
                      <TableCell>{item.refrigerant}</TableCell>
                      <TableCell>{item.refrigeratorcapacity}</TableCell>
                      <TableCell>{item.freezercapacity}</TableCell>
                      <TableCell>
                        {item.kg_24_hrs
                          .toFixed(2)
                          .toString()
                          .replace(".", seperator())}
                      </TableCell>
                      <TableCell>
                        {item.h.toFixed(2).toString().replace(".", seperator())}
                      </TableCell>
                      <TableCell>
                        {item.w.toFixed(2).toString().replace(".", seperator())}
                      </TableCell>
                      <TableCell>
                        {item.l.toFixed(2).toString().replace(".", seperator())}
                      </TableCell>
                    </TableRow>
                  ))}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </SharedTable>
            <TablePagination
              rowsPerPageOptions={[
                5,
                10,
                15,
                25,
                { label: "All", value: pqs4.length },
              ]}
              colSpan={3}
              count={pqs4.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  "aria-label": "rows per page",
                },
                native: true,
              }}
              labelDisplayedRows={defaultLabelDisplayedRows}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Pqs3;
