import React, { Component } from 'react'
import { ProgressBar } from 'react-bootstrap';
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
  const rows = [
    createData(1, 'Central1', 12.20	,3.00	,2.00	,0.15	,4.78	,19.41	,0.17	,2.30,	1.37	,0.27,0.5,0.4,0.3,0.4,0.44),
    createData(2, 'Directorate', 5.90	,0.37,	3.00,	0.11,	0.32,	1.65,	0.02	,3.40,	0.49,	0.03,0.5,0.4,0.3,0.4,0.44),
    createData(3, 'District', 0.00,	0.00	,0.00,	0.00,	0.00,	0.00	,0.00	,0.00	,0.00,	0.00,0.5,0.4,0.3,0.4,0.44),
    createData(4, 'HF', 5.83,	0.32	,4.00	,0.11,	0.25,	0.72	,0.01	,4.50,	0.37,	0.01,0.5,0.4,0.3,0.4,0.44
    )
    
  ];
export class LevelList extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Level Lists </h3>
       
        </div>
        <div className="row">
     
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Levels</h4>
              
                <div className="table-responsive">
                  <table className="table table-striped table-hover">
                    <thead>
                      <tr>
                        <th> id </th>
                        <th> name </th>
                        <th> edit </th>
                        <th> Min. Population </th>
                        <th> Max. Population  </th>
                        <th> Min. Population: Children </th>
                        <th> Max. Population: Children </th>
                        <th> Above zero (2 - 8 C) in cm3 </th>
                        <th> Below zero (-20 C) </th>
                        <th> Below zero (-20 C) </th>
                        <th> +25 degree C </th>
                        <th> -80 degree C </th>
                        <th> Dry Store Volume </th>
                        <th> Dry Store Volume(New) </th>
                        <th> -80 degree C (NEW) </th>
                        <th> +20 degree C (NEW) </th>
                        <th> Below zero (-20 C) (NEW) </th>
                    
                       
                   
                      
                      </tr>
                    </thead>
                    <tbody>
                        {rows.map((row,index) =>{
                            return(
<tr>
<td>{row.id}</td>
                                <td>{row.name}</td>
                                <td><i className="btn btn-primary mdi mdi-pencil" ></i></td>
                                <td>{row.minp}</td>
                                <td>{row.maxp}</td>
                                <td>{row.mincp}</td>
                                <td>{row.maxcp}</td>
                                <td>{row.az}</td>
                                <td>{row.bz}</td>
                                <td>{row.d2}</td>
                                <td>{row.d8}</td>
                                <td>{row.ds}</td>
                                <td>{row.a}</td>
                                <td>{row.bb}</td>
                                <td>{row.cc}</td>
                                <td>{row.dd}</td>
                                <td>{row.ee}</td>
                              
                      </tr>
                          
                            )}
                        )}
    
                      

                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default LevelList
