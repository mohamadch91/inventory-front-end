import React, { Component, useEffect, useState } from 'react'
// import { ProgressBar } from 'react-bootstrap';
import UserService from '../services/user.service';
import { DataGrid } from '@mui/x-data-grid';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Level from './Level'






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
  


  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
 
 
  export default function DataTable() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
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
      <div>
        <div>
        <Button onClick={handleOpen} variant="contained">Add Level</Button>
        <Modal
          aria-labelledby="Add Level"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <Typography id="transition-modal-title" variant="h6" component="h2">
                Add Level
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                <Level />
              </Typography>
            </Box>
          </Fade>
        </Modal>
        </div>
        <div className="page-header">
          {/* <h3 className="page-title"> Level Lists </h3> */}
        </div>
        <div className="row">
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Levels list</h4>
              </div>
              <div style={{ minHeight: '400px', width: '100%' }}>
        <DataGrid
          rows={levels}
          columns={columns}
        //   pageSize={50}
          rowsPerPageOptions={[100]}
          checkboxSelection
        />
      </div>
            </div>
            
          </div>

        </div>
      </div>

    );
  }
