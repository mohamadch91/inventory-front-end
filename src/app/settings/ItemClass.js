import { TableCell, TableHead, TableRow } from "@mui/material";
import SharedTable from "../shared/SharedTable";

function ItemClass() {
  return (
    <div>
      <h3 className="page-title">Item class list</h3>
      <div>
        <SharedTable>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Code</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
          </TableHead>
        </SharedTable>
      </div>
    </div>
  );
}

export default ItemClass;
