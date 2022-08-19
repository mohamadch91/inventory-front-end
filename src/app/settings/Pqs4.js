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
                toast.error("There is a problem loading data");
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

  const handleImport = (e) => {
    const [file] = e.target.files;
    const reader = new FileReader();
    reader.onload = (evt) => {
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: "binary" });
      const wsname = wb.SheetNames[1];
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_json(ws);
      console.log(data);
      setExcel(data);
    };
    reader.readAsBinaryString(file);
  };
  const handleExcel = () => {
   let pqs=[]
    console.log(excel)
    for (let i=4;i<excel.length;i++){
        let x=0.0
        if(typeof excel[i]["__EMPTY_12"]=== "string"){
               x = parseFloat(excel[i]["__EMPTY_12"].split("&")[0]); 
        }
        const data = {
          pqsnumber: excel[i]["Passive container database"],
          type: excel[i]["__EMPTY"],
          manufacturer: excel[i]["__EMPTY_1"],
          model: excel[i]["__EMPTY_2"],
          vaccinenetstoragecapacity: excel[i]["__EMPTY_3"],
          coolantpacknominalcapacity: x,
          numbercoolantpacks: excel[i]["Index"],
          externalvolume: excel[i]["__EMPTY_17"],
        };
        pqs.push(data)
    }
    UserService.addpqs4(pqs).then((res) => {
        toast.success("Data imported successfully");
        getPqs();
        }).catch((err) => {
            toast.error("There is a problem importing data");
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
          <h3 className="page-title mb-3">Import PQS4/PIS and view</h3>
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              <div className="add-row mt-4 mb-4">
                <h3 className="mb-3 mt-3">Insert PQS excel file</h3>
                <div className="row">
                  <div className="col-md-3 flex-column d-flex">
                    <label>excel file</label>
                    <input
                      name="describe"
                      type="file"
                      onChange={handleImport}
                      required
                    ></input>
                  </div>
                  <div className="col-md-3 flex-column d-flex mt-2">
                    <label>If you sumbit all old datas erased</label>
                    <button onClick={handleExcel} className="save-btn">
                      sumbit
                    </button>
                  </div>
                </div>
              </div>
              <div className="row mb-4 mt-4">
                <div className="col-md-2 d-flex align-items-center">
                  <h4>PQS list</h4>
                </div>
              </div>
              <div>
                <SharedTable>
                  <TableHead>
                    <TableRow>
                      <TableCell>PQS code</TableCell>
                      <TableCell>Type</TableCell>
                      <TableCell>Manufacturer</TableCell>
                      <TableCell>Model</TableCell>
                      <TableCell>VaccineNetStorageCapacity</TableCell>
                      <TableCell>CoolantPack Nominal Capacity (lit.)</TableCell>

                      <TableCell>Number of CoolantPacks</TableCell>
                      <TableCell>Gross volume (lit.):</TableCell>
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
                        <>
                          <TableRow>
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
                            <TableCell>{item.externalvolume}</TableCell>
                          </TableRow>
                        </>
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
                    { label: "All", value: 5 },
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

    export default Pqs4;
