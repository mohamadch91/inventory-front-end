    import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
    import { useEffect, useState } from "react";
    import CloseIcon from "../shared/CloseIcon";
    import EditIcon from "../shared/EditIcon";
    import SharedTable from "../shared/SharedTable";
    import toast from "react-hot-toast";
    import Spinner from "../shared/Spinner";
    import "../styles/table.scss";
    import "../styles/inputs.scss";
    import "./pqs.css"
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
    function Pqs4() {
      const [pqs4, setPqs4] = useState([]);
        const [page, setPage] = React.useState(0);
        const [rowsPerPage, setRowsPerPage] = React.useState(5);

      const [isLoading, setIsLoading] = useState(true);
      const [selectedItemClass, setSelectedItemClass] = useState(null);

  
          function getPqs() {
            userService.getpqs4()
              .then((res) => {
                setPqs4(res.data);
                setIsLoading(false);
                setPage(res.data.length/10);
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
  const [excelName, setExcelName] = useState("");
  const handleImport = (e) => {
    const [file] = e.target.files;
    setExcelName(file.name);
    const reader = new FileReader();
    reader.onload = (evt) => {
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: "binary" });
      const wsname = wb.SheetNames[1];
      const ws = wb.Sheets[wsname];
      setExcel(ws);
    };
    reader.readAsBinaryString(file);
  };
  const handleExcel = () => {
    setIsLoading(true);
   let pqs=[]
    const len=XLSX.utils.sheet_to_json(excel).length+2;
    for (let i=6;i<len;i++){
        let x=0.0
        if(typeof excel["P"+i]=== "string"){
               x = parseFloat(excel["P"+i].split("&")[0]); 
        }
        const data = {
          pqsnumber: excel["B" + i] === undefined ? "" : excel["B" + i].v,
          type: excel["C" + i] === undefined ? "" : excel["C" + i].v,
          manufacturer: excel["D" + i] === undefined ? "" : excel["D" + i].v,
          model: excel["E" + i] === undefined ? "" : excel["E" + i].v,
          vaccinenetstoragecapacity:
            excel["G" + i] === undefined ? 0.0 : excel["G" + i].v,
          coolantpacknominalcapacity: x,
          numbercoolantpacks:
            excel["Q" + i] === undefined ? 0.0 : excel["Q" + i].v,
          externalvolume: excel["V" + i] === undefined ? 0.0 : excel["V" + i].v,
        };
        pqs.push(data)
    }
    UserService.addpqs4(pqs).then((res) => {
        toast.success(<Trans>Data imported successfully</Trans>);
        getPqs();
        }).catch((err) => {
            toast.error(<Trans>There is a problem importing data</Trans>);
            setIsLoading(false);
        }
    )
        
   
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
            <Trans>Import PQS/PIS 004 and view</Trans>
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
                      <Trans>From Excel file</Trans>
                    </label>
                    <label className="btn btn-primary w-25">
                      <Trans>Choose file</Trans>
                      <input
                        name="describe"
                        type="file"
                        onChange={handleImport}
                        style={{ display: "none" }}
                        required
                      ></input>
                    </label>
                    <span className="glyphicon glyphicon-upload mt-3 text-black">
                      {" "}
                      {excelName}
                    </span>
                  </div>
                  <div className="col-md-4 flex-column d-flex ">
                    <label className=" mb-3">
                      <Trans>
                        If you click on submit, all old data will be erased!
                      </Trans>
                    </label>
                    <button onClick={handleExcel} className="save-btn">
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
                        <Trans>Net vaccine storage capacity (lit.)</Trans>
                      </TableCell>
                      <TableCell>
                        <Trans>Coolant pack nominal capacity (lit.)</Trans>
                      </TableCell>
                      <TableCell>
                        <Trans>Number of coolant pack</Trans>
                      </TableCell>
                      <TableCell>
                        <Trans>Gross volume (lit.)</Trans>:
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
                          <TableCell>{item.pqsnumber}</TableCell>
                          <TableCell>{item.type}</TableCell>
                          <TableCell>{item.manufacturer}</TableCell>
                          <TableCell>{item.model}</TableCell>
                          <TableCell>
                            {item.vaccinenetstoragecapacity}
                          </TableCell>
                          <TableCell>
                            {item.coolantpacknominalcapacity}
                          </TableCell>
                          <TableCell>{item.numbercoolantpacks}</TableCell>
                          <TableCell>
                            {item.externalvolume
                              .toFixed(2)
                              .toString()
                              .replace(".", seperator())}
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
                      "aria-label": <Trans>rows per page</Trans>,
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

    export default Pqs4;
