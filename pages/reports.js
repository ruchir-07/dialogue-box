import React, { useState, useEffect } from 'react';
import './reports.css'

const ReportsPage = () => {
    const [reports, setReports] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [reportsPerPage, setReportsPerPage] = useState(10);

    const fetchReports = async () => {
        const dummyReports = [
            { id: 1, name: 'Report 1', date: '2024-04-01' },
            { id: 2, name: 'Report 2', date: '2024-04-02' },
            { id: 3, name: 'Report 3', date: '2024-04-03' },
            { id: 4, name: 'Report 4', date: '2024-04-03' },
            { id: 5, name: 'Report 5', date: '2024-04-03' },
            { id: 6, name: 'Report 6', date: '2024-04-03' },
            { id: 7, name: 'Report 7', date: '2024-04-03' },
            { id: 8, name: 'Report 8', date: '2024-04-03' },
            { id: 9, name: 'Report 9', date: '2024-04-03' },
            { id: 10, name: 'Report 10', date: '2024-04-03' },
            { id: 11, name: 'Report 11', date: '2024-04-03' },
            { id: 12, name: 'Report 12', date: '2024-04-03' },
            { id: 13, name: 'Report 13', date: '2024-04-03' },
            { id: 14, name: 'Report 14', date: '2024-04-03' },
            { id: 15, name: 'Report 15', date: '2024-04-03' },
            { id: 16, name: 'Report 16', date: '2024-04-03' },
            { id: 17, name: 'Report 16', date: '2024-04-03' },
            { id: 18, name: 'Report 16', date: '2024-04-03' },
            { id: 19, name: 'Report 16', date: '2024-04-03' },
            { id: 20, name: 'Report 16', date: '2024-04-03' },
            { id: 21, name: 'Report 16', date: '2024-04-03' },
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
                                    <td>{report.date}</td>
                                    <td>{report.name}</td>
                                    <td>
                                        <a href="#" className="btn btn-primary">
                                            <i className="bi bi-cloud-download"></i>
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
