import React, { Component, useEffect, useState } from 'react'
// import { ProgressBar } from 'react-bootstrap';
import UserService from '../services/user.service';
import { DataGrid } from '@mui/x-data-grid';






function createData(id, name, minp, maxp, mincp,maxcp,az,bz,d2,d8,ds,a,bb,cc,dd,ee) {
        return {
          id,
          name,
          minp,
          maxp,
          mincp,
          maxcp,
          az,
          bz,
          d2,
          d8,
          ds,
          a,bb,cc,dd,ee
        };
      }

const columns = [
    { field: 'id', headerName: 'id', width: 70 },
    { field: 'name', headerName: 'name', width: 130 },
    { field: 'minp', headerName: 'Min. Population', width: 130 },
    { field: 'maxp', headerName: 'Max. Population', width: 130 },
    { field: 'az', headerName: 'Min. Population: Children', width: 130 },
    { field: 'bz', headerName: 'Max. Population: Children', width: 130 },
    { field: 'd2', headerName: 'Above zero (2 - 8 C) in cm3', width: 130 },
    { field: 'd8', headerName: 'Below zero (-20 C)', width: 130 },
    { field: 'ds', headerName: 'Below zero (-20 C)', width: 130 },
    { field: 'a', headerName: '+25 degree C', width: 130 },
    { field: 'bb', headerName: '-80 degree C', width: 130 },
    { field: 'cc', headerName: 'Dry Store Volume', width: 130 },
    { field: 'dd', headerName: 'Dry Store Volume(New)', width: 130 },
    { field: 'ee', headerName: '-80 degree C (NEW)', width: 130 },
  ];
  



  
  
  export default function DataTable() {

    const [levels , setLevels] = useState([])

useEffect(() => {
            UserService.getLevels().then((response) => {
              let row=[]
              for(let i=0;i<response.data.length;i++){
                row.push(
        createData(response.data[i].id,response.data[i].name,response.data[i].minpop,response.data[i].maxpop,response.data[i].minpopu1,response.data[i].maxpopu1,response.data[i].undervol,response.data[i].uppervol,response.data[i].m25vol,response.data[i].m70vol,response.data[i].dryvol,response.data[i].dryvolnew,response.data[i].m70volnew,response.data[i].m25volnew,response.data[i].undervolnew,response.data[i].uppervolnew)
        
                )
              }
              setLevels(row)
            }).catch((e) => {
              console.log(e);
            }
            )
},[])


    return (
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={levels}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    );
  }
