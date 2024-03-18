import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const reports = [
  {
    name: 'Report 1',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    price: '$99.99',
  },
  {
    name: 'Report 2',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    price: '$129.99',
  },
  {
    name: 'Report 3',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    price: '$79.99',
  },
]

export default function Example() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="mx-auto px-6 lg:px-8 ">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Market Research Reports</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Find valuable insights</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Explore our latest market research reports to gain valuable insights into industry trends and opportunities.
            </p>
            <div className="mt-10 flex flex-wrap justify-center">
              {reports.map((report, index) => (
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
                  <div className="bg-gray-100 rounded-lg p-6">
                    <h3 className="text-lg font-semibold">{report.name}</h3>
                    <p className="text-gray-600 mb-4">{report.description}</p>
                    <div className="flex justify-center mb-4">
                      <button className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-indigo-700">View Details</button>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-900">{report.price}</span>
                      <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">Buy</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}
