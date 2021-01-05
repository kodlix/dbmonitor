import React, { useState, useEffect } from 'react';

const Monitor = () => {
    const [db, setDb] = useState({});
    const [fetchError, setFetchError] = useState(false);

    useEffect(async () => {
        try {
            const request = await fetch('http://127.0.0.1:5000/api/monitor');
            const result = await request.json();
            setDb(result);
            console.log(result);
        } catch (error) {
            console.log("network error", error.statusText);
            setFetchError(error !== null || error != undefined);
        }
    }, [])
    return (
        <main role="main" className="container">
            <div className="">
                <h1> Database Metrics</h1>
                <form className="form-inline mt-2 mt-md-0">
                    {/* <label className="pr-2">Select Period: </label> */}
                    {/* <select disabled>
                        <option>Today</option> */}
                    {/* <option>This Week</option>
              <option>This Month</option> */}
                    {/* </select> */}
                    <label className="pl-2 font-weight-bold">Today: &nbsp;{new Date().toUTCString().substring(0, 25)}</label>
                    { fetchError && <span className="p-2 ml-4 text-light bg-danger float-end"> Error ocurred while connection to the server</span>}
                    <hr className="py-4" />
                    <table className="table text-left ">
                        {!fetchError && <caption className="text-right font-weight-bold text-secondary">
                            Download database metrics in excel format :
                        <a className="text-primary" href="http://127.0.0.1:5000/api/download">
                                <i className="bi bi-download px-1"></i>
                                database.xls
                        </a></caption>}
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Database Name</th>
                                <th scope="col">Size Yestarday (mb)</th>
                                <th scope="col">Current Size (mb)</th>
                                <th scope="col">Daily Growth Rate (%)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                db.data && db.data.length > 0 && db.data.map((item, index) =>
                                    <tr key={item.id}>
                                        <th scope="row">{index + 1} {console.log(item)}</th>
                                        <td className="text-uppercase font-weight-bold">{item.db_name}</td>
                                        <td>{item.size} </td>
                                        <td>{item.size || '--'}</td>
                                        <td>{((item.size - item.size) / item.size) * 100}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </form>
            </div>
        </main>
    );
}

export default Monitor;