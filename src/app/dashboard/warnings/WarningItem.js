import React from "react";


const WarningItem = (props) => {

    return(
        <div className="d-flex mb-3">
        <div>
            <p className="activity-info bg-warning" style={{color:'#000000'}}> ⚠  </p>
        </div>
        <div className="activity-details"><h4 className="text-dark font-weight-normal">{props.title}</h4>
            <p className="mb-0">{props.text}</p><p className="text-small mb-0">{props.date}</p>
        </div>
    </div>
    )
}

export default WarningItem;