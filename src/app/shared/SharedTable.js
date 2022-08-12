import { Table, TableContainer } from "@mui/material";

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
