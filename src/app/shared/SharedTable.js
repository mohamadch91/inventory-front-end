import { Table, TableContainer } from "@mui/material";
/**
 * @param  {DOMElement} {children}
 * shared table use in settings and all tables
 */
function SharedTable({ children }) {
  return (
    <>
      <TableContainer>
        <Table>{children}</Table>
      </TableContainer>
    </>
  );
}

export default SharedTable;
