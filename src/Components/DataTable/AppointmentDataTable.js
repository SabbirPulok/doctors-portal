import React from 'react';

const AppointmentDataTable = () => {
    return (
        <React.Fragment>
            <table className="table table-borderless">
                <thead>
                    <tr className="text-center">
                    <th className="text-secondary text-left" scope="col">Sr No</th>
                    <th className="text-secondary" scope="col">Date</th>
                    <th className="text-secondary" scope="col">Time</th>
                    <th className="text-secondary" scope="col">Name</th>
                    <th className="text-secondary" scope="col">Contact</th>
                    <th className="text-secondary" scope="col">Prescription</th>
                    <th className="text-secondary" scope="col">Action</th>
                    </tr>
                </thead>
            </table>
        </React.Fragment>
    );
};

export default AppointmentDataTable;