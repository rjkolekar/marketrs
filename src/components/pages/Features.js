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
    { id: 2, title: 'Technology Trends Report', industry: 'Aerospace & Defense', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget tortor vel odio interdum fermentum. Sed vel libero eget nulla placerat ultrices. Nam aliquet sem at quam tempus consequat.' },
    { id: 3, title: 'Agricultural Growth Analysis', industry: 'Agriculture', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget tortor vel odio interdum fermentum. Sed vel libero eget nulla placerat ultrices. Nam aliquet sem at quam tempus consequat.' },
    { id: 4, title: 'Future of Automotive Industry', industry: 'Automotive & Transportation', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget tortor vel odio interdum fermentum. Sed vel libero eget nulla placerat ultrices. Nam aliquet sem at quam tempus consequat.' },
    { id: 5, title: 'Construction Market Trends', industry: 'Building & Construction', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget tortor vel odio interdum fermentum. Sed vel libero eget nulla placerat ultrices. Nam aliquet sem at quam tempus consequat.' },
]);
    const [showContactForm, setShowContactForm] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
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
    const [selectedIndustry, setSelectedIndustry] = useState(null);
    const [selectedReport, setSelectedReport] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const reportsPerPage = 6;

    const handleReadReport = (report) => {
        setSelectedReport(report);
    };

    const handleCloseReport = () => {
        setSelectedReport(null);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredReports = selectedIndustry ? reports.filter(report => report.industry === selectedIndustry) : reports;

    const indexOfLastReport = currentPage * reportsPerPage;
    const indexOfFirstReport = indexOfLastReport - reportsPerPage;
    const currentReports = filteredReports.slice(indexOfFirstReport, indexOfLastReport);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-8">
                {/* Sidebar for categories */}
                {!selectedReport && (
                    <div className="lg:col-span-1 lg:pr-8 text-sm">
                        <div className="sticky top-0 max-h-screen overflow-y-auto">
                            <input
                                type="text"
                                placeholder="Search reports..."
                                className="w-full md:w-60 px-4 py-2 mb-4 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-indigo-500"
                                value={searchTerm}
                                onChange={handleSearchChange}
                            />
                            <div className="bg-gray-100 rounded-md p-4">
                                <h2 className="text-lg font-semibold mb-2">Reports by Industry</h2>
                                <ul className="space-y-2 overflow-y-auto max-h-full">
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
                        </div>
                    </div>
                )}

                {/* Main content */}
                <div className="lg:col-span-3 lg:pr-8">
                    <div className="sticky top-0 max-h-screen overflow-y-auto">
                        {!selectedReport ? (
                            <div>
                                <nav className="text-gray-500 mb-4">
                                    Home {'>'} {selectedIndustry ? `${selectedIndustry} > ` : ''} {selectedReport ? selectedReport.title : 'All Reports'}
                                </nav>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {currentReports.map(report => (
                                        <div key={report.id} className="bg-white rounded-md shadow-md p-4">
                                            <h3 className="text-lg font-semibold mb-2">{report.title}</h3>
                                            <p className="text-gray-700 text-sm mb-4">{report.content}</p>
                                            <button
                                                onClick={() => handleReadReport(report)}
                                                className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 text-sm"
                                            >
                                                Read Report
                                            </button>
                                        </div>
                                    ))}
                                </div>
                                {/* Pagination */}
                                <div className="mt-4 flex justify-center">
                                    {filteredReports.length > reportsPerPage && (
                                        <nav className="flex items-center">
                                            {Array.from({ length: Math.ceil(filteredReports.length / reportsPerPage) }, (_, i) => (
                                                <button
                                                    key={i}
                                                    onClick={() => paginate(i + 1)}
                                                    className={`px-3 py-2 mx-1 bg-gray-200 text-gray-700 rounded-md ${currentPage === i + 1 ? 'bg-indigo-600 text-white' : 'hover:bg-gray-300'}`}
                                                >
                                                    {i + 1}
                                                </button>
                                            ))}
                                        </nav>
                                    )}
                                </div>
                            </div>
                        ) : (
                            <div className="mt-8 bg-white p-4 rounded-md shadow-md">
                                <h2 className="text-lg font-semibold mb-4">{selectedReport.title}</h2>
                                <p className="text-gray-700 text-sm mb-4">{selectedReport.content}</p>
                                <button
                                    onClick={handleCloseReport}
                                    className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 text-sm"
                                >
                                    Close
                                </button>
                            </div>
                        )}
                    </div>
                </div>

{/* Sidebar for report details */}
{selectedReport && (
    <div className="lg:col-span-1">
        <div className="sticky top-0 max-h-screen overflow-y-auto">
            <div className="bg-gray-100 rounded-md shadow-md p-4 mb-4">
                <h3 className="text-lg font-semibold mb-2">{selectedReport.title}</h3>
                <div className="border-b pb-2" />
                <div className="grid grid-cols-1 gap-4">
                    <div className="border-b pb-2 pt-2">
                        <span className="font-semibold text-gray-900">Single User License:</span>
                        <span className="ml-2">$99</span>
                    </div>
                    <div className="border-b pb-2">
                        <span className="font-semibold text-gray-900">Excel Datasheet:</span>
                        <span className="ml-2">$99</span>
                    </div>
                    <div className="flex justify-end">
                        <div>
                            <button
                                onClick={() => setShowContactForm(true)}
                                className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 text-sm mr-2"
                            >
                                Buy Now
                            </button>
                        </div>
                        <div>
                            <button
                                onClick={() => setShowContactForm(true)}
                                className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 text-sm"
                            >
                                Request Discount
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100 rounded-md shadow-md p-4">
                <h3 className="text-lg font-semibold mb-2">Related Reports</h3>
                <div className="grid grid-cols-1 gap-4">
                    {/* Sample related reports */}
                    <div className="flex flex-col">
                        <h4 className="text-md font-semibold mb-2">Related Report 1</h4>
                        <p className="text-sm text-gray-700 mb-4">Brief description of related report 1.</p>
                        <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 text-sm">
                            View Report
                        </button>
                    </div>
                    <div className="flex flex-col">
                        <h4 className="text-md font-semibold mb-2">Related Report 2</h4>
                        <p className="text-sm text-gray-700 mb-4">Brief description of related report 2.</p>
                        <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 text-sm">
                            View Report
                        </button>
                    </div>
                    {/* Add more related reports here */}
                </div>
            </div>
        </div>
    </div>
)}


            </div>
        </div>
    );
};

export default ReportPage;



