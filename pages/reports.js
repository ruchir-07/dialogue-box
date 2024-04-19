import React, { useState, useEffect } from 'react';

const ReportsPage = () => {
  // State to store the list of reports
  const [reports, setReports] = useState([]);
  // State to manage pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [reportsPerPage] = useState(10); // Number of reports per page

  // Function to fetch reports from API (assuming you have an API endpoint)
  const fetchReports = async () => {
    // Your API call to fetch reports
    // Update the 'reports' state with the fetched data
  };

  useEffect(() => {
    fetchReports();
  }, []);

  // Pagination logic
  const indexOfLastReport = currentPage * reportsPerPage;
  const indexOfFirstReport = indexOfLastReport - reportsPerPage;
  const currentReports = reports.slice(indexOfFirstReport, indexOfLastReport);

  // Function to handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h1>Recently Generated Reports</h1>
      {/* Report list */}
      <ul>
        {currentReports.map((report) => (
          <li key={report.id}>{report.name} - {report.date}</li>
        ))}
      </ul>
      {/* Pagination */}
      <div>
        <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={() => paginate(currentPage + 1)} disabled={currentReports.length < reportsPerPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ReportsPage;
