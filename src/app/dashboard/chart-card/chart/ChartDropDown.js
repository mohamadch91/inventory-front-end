
import React, {useState} from "react";

import classes from "./ChartDropDown.module.css";

const ChartDropDown = (props) =>{
    const [selectedValue, setSelectedValue] = useState('Facilities');

    const ddChangeHandler = (e) =>{
        setSelectedValue(e.target.value);
    }


return(
    <div className={classes.drop} >
            <select value={selectedValue} onChange={ddChangeHandler}>
                {props.options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                ))}
            </select>

    </div>

)
}

export default ChartDropDown;