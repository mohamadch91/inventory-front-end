import React from 'react';
import SubFacilitiesTableRow from "./SubFacilitiesTableRow";

import Card from "../../shared/UI/Card";
const DUMMY = [
    {

        num: 1,
        name: 'Central Store',
        level: 1,
        levelName: 'Central 1',
        registered: 56,
        total: 11,
        lastChangesOn: '01/01/2019',
        lastLogin: '01/01/2019'
    },{
        num: 2,
        name: '\tAjloun Gov Store - مستودع محافظة عجلون',
        level: 2,
        levelName: 'Directorare',
        registered: 90,
        total: 21,
        lastChangesOn: '01/01/2019',
        lastLogin: '01/01/2019'
    },
    {

        num: 1,
        name: 'Central Store',
        level: 1,
        levelName: 'Central 1',
        registered: 56,
        total: 11,
        lastChangesOn: '01/01/2019',
        lastLogin: '01/01/2019'
    },
    {

        num: 1,
        name: 'Central Store',
        level: 1,
        levelName: 'Central 1',
        registered: 56,
        total: 11,
        lastChangesOn: '01/01/2019',
        lastLogin: '01/01/2019'
    },
    {

        num: 1,
        name: 'Central Store',
        level: 1,
        levelName: 'Central 1',
        registered: 56,
        total: 11,
        lastChangesOn: '01/01/2019',
        lastLogin: '01/01/2019'
    }
]

const SubFacilitiesTable = () => {

    const generateRows = () => {
        let rows = [];
        for (let i = 0; i < DUMMY.length; i++) {
            const variant = i % 2 === 0 ? 'success' : 'warning';
            rows.push(<SubFacilitiesTableRow
                                             num={i + 1}
                                             name={DUMMY[i].name}
                                             level={DUMMY[i].level}
                                             levelName={DUMMY[i].levelName}
                                             registered={DUMMY[i].registered}
                                             total={DUMMY[i].total}
                                             lastChangesOn={DUMMY[i].lastChangesOn}
                                             lastLogin={DUMMY[i].lastLogin}
                                             variant={variant} />);
        }
        return rows;
    }
    return (

        <Card>
                <h4 className="card-title"> Sub Facilities</h4>
                <p className="card-description"> list of all sub facilities contained in the organizaion </p>
                <div className="table-responsive">

                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th> # </th>
                            <th> Facility Name </th>
                            <th> Level - Level name </th>
                            <th> Registered </th>
                            <th> Total </th>
                            <th> Last Changes On </th>
                            <th> Last Login </th>
                        </tr>
                        </thead>

                        <tbody>
                        {generateRows()}
                        </tbody>
                    </table>
                </div>

        </Card>

    )
}

export default SubFacilitiesTable;