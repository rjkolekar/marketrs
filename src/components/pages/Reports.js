import React, { useState } from 'react';

const ReportPage = () => {
    // Sample report data
    const [reports, setReports] = useState([
        { id: 1, title: 'Market Analysis 2023', industry: 'Defense', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget tortor vel odio interdum fermentum. Sed vel libero eget nulla placerat ultrices. Nam aliquet sem at quam tempus consequat.' },
        { id: 2, title: 'Technology Trends Report', industry: 'Aerospace & Defense', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget tortor vel odio interdum fermentum. Sed vel libero eget nulla placerat ultrices. Nam aliquet sem at quam tempus consequat.' },
        { id: 3, title: 'Agricultural Growth Analysis', industry: 'Agriculture', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget tortor vel odio interdum fermentum. Sed vel libero eget nulla placerat ultrices. Nam aliquet sem at quam tempus consequat.' },
        { id: 4, title: 'Future of Automotive Industry', industry: 'Automotive & Transportation', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget tortor vel odio interdum fermentum. Sed vel libero eget nulla placerat ultrices. Nam aliquet sem at quam tempus consequat.' },
        { id: 5, title: 'Construction Market Trends', industry: 'Building & Construction', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget tortor vel odio interdum fermentum. Sed vel libero eget nulla placerat ultrices. Nam aliquet sem at quam tempus consequat.' },
        { id: 12, title: 'Heavy Machinery Analysis', industry: 'Heavy Engineering', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget tortor vel odio interdum fermentum. Sed vel libero eget nulla placerat ultrices. Nam aliquet sem at quam tempus consequat.' },
    ]);
    const [showContactForm, setShowContactForm] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    // List of industry categories
    const categories = [
        'Aerospace & Defense',
        'Agriculture',
        'Automotive & Transportation',
        'Building & Construction',
        'Chemicals & Materials',
        'Consumer Goods',
        'Electronics & Semiconductors',
        'Energy & Natural Resources',
        'Food & Beverages',
        'Healthcare & Life Sciences',
        'Heavy Engineering',
    ];

    // State to store the selected industry for filtering reports
    const [selectedIndustry, setSelectedIndustry] = useState(null);

    // State to store the currently selected report
    const [selectedReport, setSelectedReport] = useState(null);

    // Function to filter reports based on selected industry
    const filteredReports = selectedIndustry ? reports.filter(report => report.industry === selectedIndustry) : reports;

    // Function to handle clicking on the "Read Report" button
    const handleReadReport = (report) => {
        setSelectedReport(report);
    };

    // Function to handle closing the selected report
    const handleCloseReport = () => {
        setSelectedReport(null);
    };

    // Function to handle search term change
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // Filter reports based on search term
    const filteredReportsBySearch = filteredReports.filter(report =>
        report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        report.content.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Sidebar for categories */}
                {!selectedReport && (
                    <div className="lg:col-span-1 overflow-y-auto border-r border-gray-200 sticky top-0 max-h-screen">
                        <input
                            type="text"
                            placeholder="Search reports..."
                            className="w-full md:w-60 px-4 py-2 mb-4 mr-8 border border-gray-300 rounded-md"
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                        <h2 className="text-xl font-semibold mb-4">Reports by Industry</h2>
                        <ul className="space-y-2">
                            <li key="all-reports" className="py-2">
                                <button
                                    className={`w-full text-left ${!selectedIndustry ? 'font-semibold' : 'text-blue-500 hover:underline'}`}
                                    onClick={() => setSelectedIndustry(null)}
                                >
                                    All Reports
                                </button>
                            </li>
                            {categories.map(category => (
                                <li key={category} className="py-2">
                                    <button
                                        className={`w-full text-left ${selectedIndustry === category ? 'font-semibold' : 'text-blue-500 hover:underline'}`}
                                        onClick={() => setSelectedIndustry(category)}
                                    >
                                        {category}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Main content */}
                <div className="lg:col-span-2 overflow-y-auto sticky top-0 max-h-screen">
                    {!selectedReport && (
                       <div>
                       <nav className="text-gray-500 mb-4">
                           Home {'>'} {selectedIndustry ? `${selectedIndustry} > ` : ''} {selectedReport ? selectedReport.title : 'All Reports'}
                       </nav>
                       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                           {filteredReportsBySearch.map(report => (
                               <div key={report.id} className="p-4 bg-gray-100 rounded-md shadow-md">
                                   <h3 className="text-lg font-semibold">{report.title}</h3>
                                   <p className="mt-2 text-gray-700 text-md">{report.content}</p>
                                   <button
                                       onClick={() => handleReadReport(report)}
                                       className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                                   >
                                       Read Report
                                   </button>
                               </div>
                           ))}
                       </div>
                   </div>
                   
                    )}
                    {selectedReport && (
                        <div className="mt-8 bg-white p-4 rounded-md shadow-md">
                            <h2 className="text-xl font-semibold mb-4">{selectedReport.title}</h2>
                            <p className="text-gray-700">{selectedReport.content}</p>
                            <button
                                onClick={handleCloseReport}
                                className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                            >
                                Close
                            </button>
                        </div>
                    )}
                </div>
                {/* Sidebar for report details */}
                {selectedReport && (
                    <div className="lg:col-span-1 overflow-y-auto border-l border-gray-200 sticky
                    top-0 max-h-screen">
                    <div className="p-4 bg-gray-100 rounded-md shadow-md">
                        <h3 className="text-lg font-semibold">{selectedReport.title}</h3>
                        <div className="mt-4 flex justify-between items-center">
                            <span className="font-semibold text-gray-900">{selectedReport.price}</span>
                            <button
                                onClick={() => setShowContactForm(true)} // Handle button click action
                                className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                            >
                                Request Report
                            </button>
                        </div>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-md shadow-md mt-4">
                        <h3 className="text-lg font-semibold">Related Reports</h3>
                        {/* Display related reports here */}
                    </div>
                </div>
            )}
        </div>
    </div>
);
};

export default ReportPage;
