import React, { useState } from "react";
import { Link } from "react-router-dom";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg"; // Import Draft.js Editor
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"; // Import Draft.js styles

const AddReportForm = () => {
  const [step, setStep] = useState(1);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  ); // Initialize EditorState

  const [publishDate, setPublishDate] = useState("");

  const handleChangeEditorState = (newState) => {
    setEditorState(newState);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Placeholder for form submission logic
    console.log("Form submitted");
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="bg-gray-900 min-h-screen py-12">
      <div className="container mx-auto px-2 mb-16">
        <div className="isolate bg-white px-6 py-12 sm:py-10 lg:px-12 ">
          <form onSubmit={handleSubmit} className="mx-auto">
            {step === 1 && (
              <>
                <h2 className="text-2xl font-bold mb-4">
                  Step 1: Report Details
                </h2>
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left Side */}
                    <div className="grid grid-cols-1 gap-4 md:col-span-1">
                      <div>
                        <label
                          htmlFor="title"
                          className="block text-sm font-semibold mb-2"
                        >
                          Title
                        </label>
                        <input
                          type="text"
                          id="title"
                          name="title"
                          className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="urlKeywords"
                          className="block text-sm font-semibold mb-2"
                        >
                          URL Keywords
                        </label>
                        <input
                          type="text"
                          id="urlKeywords"
                          name="urlKeywords"
                          className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                        />
                      </div>
                    </div>
                    {/* Right Side */}
                    <div className="grid grid-cols-1 gap-4 md:col-span-1">
                      <div>
                        <label
                          htmlFor="dcDescription"
                          className="block text-sm font-semibold mb-2"
                        >
                          DC Description
                        </label>
                        <textarea
                          id="dcDescription"
                          name="dcDescription"
                          className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                        ></textarea>
                      </div>
                      <div>
                        <label
                          htmlFor="reportDisplayTitle"
                          className="block text-sm font-semibold mb-2"
                        >
                          Report Display Title
                        </label>
                        <textarea
                          id="reportDisplayTitle"
                          name="reportDisplayTitle"
                          className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mt-6">
                    <label
                      htmlFor="description"
                      className="block text-sm font-semibold mb-2"
                    >
                      Report Description
                    </label>
                    <Editor
                      editorState={editorState}
                      onEditorStateChange={handleChangeEditorState}
                      toolbarClassName="toolbarClassName"
                      wrapperClassName="border border-gray-300 rounded p-2"
                      editorClassName="editorClassName"
                    />
                    <p className="text-sm text-gray-600 mt-2">
                      Provide a detailed description of your report. Use
                      headings (H1, H2) and bullet points for better
                      readability. Incorporate relevant keywords for SEO
                      purposes.
                    </p>
                  </div>
                  <div className="mt-10">
                    <label
                      htmlFor="tableOfContents"
                      className="block text-sm font-semibold mb-2"
                    >
                      Table of Contents
                    </label>
                    <Editor
                      editorState={editorState}
                      onEditorStateChange={handleChangeEditorState}
                      toolbarClassName="toolbarClassName"
                      wrapperClassName="border border-gray-300 rounded p-2"
                      editorClassName="editorClassName"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10">
                    {/* Left Side */}
                    <div className="grid grid-cols-1 gap-4 md:col-span-1">
                      <div>
                        <label
                          htmlFor="reportType"
                          className="block text-sm font-semibold mb-2"
                        >
                          Report Type
                        </label>
                        <select
                          id="reportType"
                          name="reportType"
                          className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                        >
                          <option value="">Select Report Type</option>
                          {/* Add options dynamically from a list */}
                          <option value="option1">Option 1</option>
                          <option value="option2">Option 2</option>
                          <option value="option3">Option 3</option>
                        </select>
                      </div>
                    </div>
                    {/* Right Side */}
                    <div className="grid grid-cols-1 gap-4 md:col-span-1">
                      <div>
                        <label
                          htmlFor="relatedReports"
                          className="block text-sm font-semibold mb-2"
                        >
                          Related Reports (Comma-separated IDs)
                        </label>
                        <input
                          type="text"
                          id="relatedReports"
                          name="relatedReports"
                          className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="videoLink"
                          className="block text-sm font-semibold mb-2"
                        >
                          Video Link
                        </label>
                        <input
                          type="text"
                          id="videoLink"
                          name="videoLink"
                          className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
            {step === 2 && (
              <>
                <h2 className="text-2xl font-bold mb-4">
                  Step 2: Additional Details
                </h2>
                <div>
                  {/* Additional fields for Step 2 */}
                  <div>
                    <label
                      htmlFor="reportDisplayTitle"
                      className="block text-sm font-semibold mb-2"
                    >
                      Meta Description
                    </label>
                    <textarea
                      id="reportDisplayTitle"
                      name="reportDisplayTitle"
                      className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                    ></textarea>
                  </div>

                  {/* Add more additional fields here */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                    {/* Left Side */}
                    <div className="grid grid-cols-1 gap-4 md:col-span-1">
                      <div>
                        <label
                          htmlFor="title"
                          className="block text-sm font-semibold mb-2"
                        >
                          Meta Title
                        </label>
                        <input
                          type="text"
                          id="title"
                          name="title"
                          className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="reportDisplayTitle"
                          className="block text-sm font-semibold mb-2"
                        >
                          Meta keywords
                        </label>
                        <textarea
                          id="reportDisplayTitle"
                          name="reportDisplayTitle"
                          className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                        ></textarea>
                      </div>
                    </div>
                    {/* Right Side */}
                    <div className="grid grid-cols-1 gap-4 md:col-span-1">
                      <div>
                        <label
                          htmlFor="title"
                          className="block text-sm font-semibold mb-2"
                        >
                          No.of Pages
                        </label>
                        <input
                          type="text"
                          id="title"
                          name="title"
                          className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="publishDate"
                          className="block text-sm font-semibold mb-2"
                        >
                          Publish Date
                        </label>
                        <input
                          type="text"
                          id="publishDate"
                          name="publishDate"
                          value={publishDate}
                          onChange={(e) => setPublishDate(e.target.value)}
                          className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                    {/* Left Side */}
                    <div className="grid grid-cols-1 gap-4 md:col-span-1">
                      <div>
                        <label
                          htmlFor="title"
                          className="block text-sm font-semibold mb-2"
                        >
                          Country
                        </label>
                        <input
                          type="text"
                          id="title"
                          name="title"
                          className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="author"
                          className="block text-sm font-semibold mb-2"
                        >
                          Author
                        </label>
                        <select
                          id="author"
                          name="author"
                          className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                        >
                          {/* Replace the placeholder options with actual options from your data */}
                          <option value="">Select Author</option>
                          <option value="author1">Author 1</option>
                          <option value="author2">Author 2</option>
                          <option value="author3">Author 3</option>
                        </select>
                      </div>
                    </div>
                    {/* Right Side */}
                    <div className="grid grid-cols-1 gap-4 md:col-span-1">
                      {/* Select Continent Dropdown */}
                      <div>
                        <label
                          htmlFor="continent"
                          className="block text-sm font-semibold mb-2"
                        >
                          Continent
                        </label>
                        <select
                          id="continent"
                          name="continent"
                          className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                        >
                          <option value="Asia">Asia</option>
                          <option value="Africa">Africa</option>
                          <option value="North America">North America</option>
                          {/* Add more options as needed */}
                        </select>
                      </div>

                      {/* Images Input Field */}
                      <div>
                        <label
                          htmlFor="publishDate"
                          className="block text-sm font-semibold mb-2"
                        >
                          Images
                        </label>
                        <input
                          type="file"
                          id="images"
                          name="images"
                          value={publishDate}
                          onChange={(e) => setPublishDate(e.target.value)}
                          className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                    {/* Left Side */}
                    <div className="grid grid-cols-1 gap-4 md:col-span-1">
                      <div>
                        <label
                          htmlFor="singleUserPDFPrice"
                          className="block text-sm font-semibold mb-2"
                        >
                          Single User PDF Price (in $)
                        </label>
                        <input
                          type="number"
                          id="singleUserPDFPrice"
                          name="singleUserPDFPrice"
                          min="0"
                          step="0.01"
                          className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="enterprisePDFPrice"
                          className="block text-sm font-semibold mb-2"
                        >
                          Enterprise PDF Price (in $)
                        </label>
                        <input
                          type="number"
                          id="enterprisePDFPrice"
                          name="enterprisePDFPrice"
                          min="0"
                          step="0.01"
                          className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                        />
                      </div>
                    </div>
                    {/* Right Side */}
                    <div className="grid grid-cols-1 gap-4 md:col-span-1">
                      <div>
                        <label
                          htmlFor="fiveUserPDFPrice"
                          className="block text-sm font-semibold mb-2"
                        >
                          5 User PDF Price (in $)
                        </label>
                        <input
                          type="number"
                          id="fiveUserPDFPrice"
                          name="fiveUserPDFPrice"
                          min="0"
                          step="0.01"
                          className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="sitePDFPrice"
                          className="block text-sm font-semibold mb-2"
                        >
                          Site PDF Price (in $)
                        </label>
                        <input
                          type="number"
                          id="sitePDFPrice"
                          name="sitePDFPrice"
                          min="0"
                          step="0.01"
                          value={publishDate}
                          onChange={(e) => setPublishDate(e.target.value)}
                          className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                        />
                      </div>
                    </div>
                    
                  </div>
                  <div className="mt-6">
                    <label
                      htmlFor="description"
                      className="block text-sm font-semibold mb-2"
                    >
                      Add Report Scope
                    </label>
                    <Editor
                      editorState={editorState}
                      onEditorStateChange={handleChangeEditorState}
                      toolbarClassName="toolbarClassName"
                      wrapperClassName="border border-gray-300 rounded p-2"
                      editorClassName="editorClassName"
                    />
                    
                  </div>
                  <div className="flex justify-end mt-4">
  <button
    className="bg-green-500 text-white text-sm font-semibold py-2 px-6 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none"
  >
   Add FAQs
  </button>
</div>
                </div>
              </>
            )}
            {/* Buttons for navigation */}
            <div className="mt-6 flex justify-between">
              {step !== 1 && (
                <button
                  onClick={prevStep}
                  className="bg-gray-300 text-gray-700 text-sm font-semibold py-2 px-4 rounded-md focus:outline-none"
                >
                  Previous
                </button>
              )}
              {step !== 2 ? (
                <button
                  onClick={nextStep}
                  className="bg-indigo-600 text-white text-sm font-semibold py-2 px-6 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none"
                >
                  Save and Next
                </button>
              ) : (
                <button className="bg-indigo-600 text-white text-sm font-semibold py-2 px-6 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none">
                  Save Report
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
      {/* Back to dashboard link */}
      <div className="absolute top-0 left-0 mt-4 ml-14">
        <Link
          to="/dashboard"
          className="text-sm text-indigo-600 hover:underline"
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default AddReportForm;
