import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import Button from "@mui/material/Button";
import MenuItem from '@mui/material/MenuItem';

const div_style={
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
    padding:"25px",
}
export default function Setting() {

  return (
    <div style={div_style}>
      <Typography  variant="h6" gutterBottom>
        <h2>center setting </h2>
        
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Country"
            name="Country"
            label="Country"
            fullWidth
            autoComplete="Country"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Country-code"
            name="Country-code"
            label="Country code"
            fullWidth
            autoComplete="Countrycode"
            variant="standard"
          />
        </Grid>
     
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Currency"
            name="Currency"
            label="Currency"
            fullWidth
            autoComplete="Currency"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="Allow levels"
            name="Allow levels"
            label="Allow levels"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Annual Population Growth Rate"
            name="Annual Population Growth Rate"
            label="Annual Population Growth Rate"
            fullWidth
            autoComplete="Annual Population Growth Rate"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Main Location"
            name="Main Location"
            label="Main Location"
            fullWidth
            autoComplete="Main Location"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={3}>

        <TextField
            required
            id="enable Hr"
            name="enable Hr"
            label="Enable HR"
            fullWidth
            select
            autoComplete="enable Hr"
            variant="standard"
          >
            <MenuItem key="Yes" value="Yes">
            Yes
            </MenuItem>
            <MenuItem key="No" value="No">
            No
            </MenuItem>
            </TextField>
            </Grid>
            <Grid item xs={12} sm={3}></Grid>
            <Grid item xs={12} sm={3}>

<TextField
    required
    id="Target Population"
    name="Target Population"
    label="Target Population"
    fullWidth
    select
    autoComplete="Target Population"
    variant="standard"
  >
    <MenuItem key="General population" value="General population">
    General population
    </MenuItem>
    <MenuItem key="Under-1 Population" value="Under-1 Population">
    Under-1 Population
    </MenuItem>
    </TextField>
    </Grid>   
    <Grid item xs={12} sm={3}></Grid>
    <Grid item xs={12} sm={3}>

<TextField
    required
    id="Enable Maintenance"
    name="Enable Maintenance"
    label="Enable Maintenance"
    fullWidth
    select
    autoComplete="Enable Maintenance"
    variant="standard"
  >
     <MenuItem key="Yes" value="Yes">
            Yes
            </MenuItem>
            <MenuItem key="No" value="No">
            No
            </MenuItem>
    </TextField>
    </Grid>   
    <Grid item xs={12} sm={3}></Grid>
    <Grid item xs={12} sm={3}>

<TextField
    required
    id="Require Capacity"
    name="Require Capacity"
    label="Require Capacity"
    fullWidth
    select
    autoComplete="Require Capacity"
    variant="standard"
  >
     <MenuItem key="Yes" value="Yes">
     Estimate required capacity by using Assistant Tool (in MS Excel)
            </MenuItem>
            <MenuItem key="No" value="No">
            Enter required capacity manually
            </MenuItem>
    </TextField>
    </Grid>   
    <Grid item xs={12} sm={3}></Grid>

        <Grid item xs={12} sm={3}>
        <Button variant="contained" component="label">
  Upload logo
  <input hidden accept="image/*" multiple type="file" />
</Button>

        </Grid>
        <Grid item xs={12} sm={3}></Grid>
        

<Grid item xs={12} sm={3}>
<Button variant="contained" component="label">
Upload second  logo
<input hidden accept="image/*" multiple type="file" />
</Button>


</Grid>
<Grid item xs={12} sm={6}></Grid>
<Grid item xs={12} sm={3}>
<Button variant="contained" component="label">
save

</Button>
</Grid>
        
      </Grid>
  </div>
  );
}