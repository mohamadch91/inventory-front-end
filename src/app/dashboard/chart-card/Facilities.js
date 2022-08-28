import React, {useEffect, useState} from 'react';
import CircularChart from "./chart/CircularChart";
import ChartDropDown from "./chart/ChartDropDown";
import classes from "./Facilities.module.css";
import Card from "../../shared/UI/Card";
const DUMMY_DATA = [{
    label: 'lorem ipsum 1',
    value: 'v1'
},{
    label: 'lorem ipsum 2 ',
    value: 'v2'
}
];

const Facilities = ()=>{
    const [ddValue, setDdValue] = useState('Facilities');

    useEffect(()=>{

    },[ddValue]);

    const ddChangeHandler = (e) =>{
        e.preventDefault();
        setDdValue(e.target.value);
    }

    return(

            <div className={classes.facilities}>
                <Card>
                <h3>🏢  Facilities </h3>
                <ChartDropDown onChange={ddChangeHandler} options={DUMMY_DATA} />
                <CircularChart percentage={77} text={'Defined!'} color={'#44ce42'}/>
                    <span>{232}</span>
                <p>  Subset Facilities </p>
                </Card>
            </div>


    )
}

export default Facilities;