import React, { useState, useEffect } from 'react';

const Monitor = () => {
    const [db, setDb] = useState({});

    useEffect(async () => {
        const request = await fetch('http://127.0.0.1:5000/api/monitor');
        const result = await request.json();
        setDb(result);
        console.log(result);
        // return () => {
        //     cleanup
        // }
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
                    <hr className="py-4" />
                    <table className="table text-left ">
                        <caption className="text-right font-weight-bold text-secondary">Download database metrics in excel format :
                        <a className="text-primary" href="#">
                                <i class="bi bi-download px-1"></i>
                                database.xls
                        </a></caption>
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