import React, { useState, useEffect } from 'react';
import './reports.css'
import { IoDownloadOutline } from "react-icons/io5";

const ReportsPage = () => {
    const [reports, setReports] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [reportsPerPage, setReportsPerPage] = useState(10);

    const fetchReports = async () => {
        const dummyReports = [
            { id: 1, name: 'Report 1', date: '2024-04-01T12:30:00' },
            { id: 3, name: 'Report 3', date: '2024-04-02T02:30:00' },
            { id: 2, name: 'Report 2', date: '2024-04-03T14:45:00' },
            { id: 4, name: 'Report 4', date: '2024-04-04T20:15:00' },
            { id: 5, name: 'Report 5', date: '2024-04-05T12:30:00' },
            { id: 6, name: 'Report 6', date: '2024-04-06T09:22:00' },
            { id: 7, name: 'Report 7', date: '2024-04-07T07:55:00' },
            { id: 8, name: 'Report 8', date: '2024-04-08T12:40:00' },
            { id: 9, name: 'Report 9', date: '2024-04-09T11:05:00' },
            { id: 10, name: 'Report 10', date: '2024-04-10T01:30:00' },
            { id: 11, name: 'Report 11', date: '2024-04-11T04:45:00' },
            { id: 12, name: 'Report 12', date: '2024-04-12T06:20:00' },
            { id: 13, name: 'Report 13', date: '2024-04-13T16:30:00' },
            { id: 14, name: 'Report 14', date: '2024-04-14T22:50:00' },
            { id: 15, name: 'Report 15', date: '2024-04-15T15:15:00' },
            { id: 16, name: 'Report 16', date: '2024-04-16T11:40:00' },
            { id: 17, name: 'Report 17', date: '2024-17-17T13:45:00' },
            { id: 18, name: 'Report 18', date: '2024-04-18T17:00:00' },
            { id: 19, name: 'Report 19', date: '2024-04-19T21:05:00' },
            { id: 20, name: 'Report 20', date: '2024-04-20T12:30:00' },
            { id: 21, name: 'Report 21', date: '2024-04-21T00:20:00' },
            // Add more dummy data as needed
        ];
        setReports(dummyReports);
    };

    useEffect(() => {
        fetchReports();
    }, []);

    const indexOfLastReport = currentPage * reportsPerPage;
    const indexOfFirstReport = indexOfLastReport - reportsPerPage;
    const currentReports = reports.slice(indexOfFirstReport, indexOfLastReport);


    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className='container outer'>
            <div className="inside">
                <h1>Recently Generated Reports</h1>
                {/* Report list */}
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" style={{ width: '20%' }}>Date</th>
                                <th scope="col" style={{ width: '60%' }}>Report Name</th>
                                <th scope="col" style={{ width: '20%' }}>Download</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentReports.map((report) => (
                                <tr key={report.id}>
                                    <td>
                                        {/* Date in "day month year" format */}
                                        {new Date(report.date).toLocaleDateString('en-US', {
                                            day: '2-digit',
                                            month: '2-digit',
                                            year: 'numeric'
                                        }).replace(/\//g, '.')}
                                        <br />
                                        {/* Time in "hour:minute" format */}
                                        <small style={{fontSize: '0.7rem'}}>
                                            {new Date(report.date).toLocaleTimeString('en-US', {
                                                hour: '2-digit',
                                                minute: '2-digit'
                                            })}
                                        </small>
                                    </td>
                                    <td>{report.name}</td>
                                    <td>
                                        <a href="#" className="btn btn-primary">
                                            <IoDownloadOutline size={25} />
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {/* Pagination */}
                <div className="footer">
                    <div className="buttons">
                        <button
                            onClick={() => paginate(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="btn btn-primary mr-2"
                        >
                            Previous
                        </button>
                        {/* Display page numbers */}
                        {Array.from({ length: Math.ceil(reports.length / reportsPerPage) }, (_, i) => (
                            <button
                                key={i}
                                onClick={() => paginate(i + 1)}
                                className={`btn ${currentPage === i + 1 ? 'btn-primary' : 'btn-secondary'} mx-1 ${currentPage === i + 1 ? 'active' : ''}`}
                            >
                                {i + 1}
                            </button>
                        ))}
                        <button
                            onClick={() => paginate(currentPage + 1)}
                            disabled={currentReports.length < reportsPerPage}
                            className="btn btn-primary ml-2"
                        >
                            Next
                        </button>
                    </div>
                    <div className="dropdown">
                        <select
                            className="form-select ml-2"
                            value={reportsPerPage}
                            onChange={(e) => {
                                setCurrentPage(1); // Reset to the first page when changing rows per page
                                setReportsPerPage(parseInt(e.target.value));
                            }}
                        >
                            <option value="5">5 rows per page</option>
                            <option value="10">10 rows per page</option>
                            <option value="15">15 rows per page</option>
                            <option value="20">20 rows per page</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReportsPage;
