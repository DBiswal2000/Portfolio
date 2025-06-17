import { jobsList, educationList } from "@/data/data";

export default function Home() {
  return (
    <div>
      <div className="mt-4 lg:mt-17">
        {/* <div className='bg-white rounded-xl overflow-hidden my-4'>
          <div className='flex items-center p-5 py-4 gap-2'>
            <span className='text-blue-600'>
              &#9679;
            </span>
            <h2 className='text-black'>Experience</h2>
          </div>
          {jobsList.map((jobList) => {
            return <div key={jobList.role} className='bg-gray-50 hover:bg-gray-100 mx-1.5 mb-2 p-4 py-4 rounded-md'>
              <div className="rounded-md flex flex-col sm:flex-row items-start gap-4">
                <img src={jobList.icon} alt="University Logo" className="w-12 h-12 object-cover rounded-full" />
                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-sm font-semibold ">{jobList.role}</h3>
                    <span className="bg-gray-200 text-gray-600 text-xs p-1 px-2 font-semibold rounded-md">{jobList.type}</span>
                  </div>
                  <div className="mt-2 space-y-1 text-sm text-gray-600 flex gap-5">
                    <div className="flex items-center gap-2 text-xs">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M7 5V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM4 16v3h16v-3zm0-2h16V7H4zM9 3v2h6V3zm2 8h2v2h-2z"></path>
                      </svg>
                      <span>{jobList.company}</span>
                    </div>

                    <div className="flex items-center gap-2 text-xs">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="m12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0zm4.95-7.778a7 7 0 1 0-9.9 0L12 20.9zM12 13a2 2 0 1 1 0-4a2 2 0 0 1 0 4" />
                      </svg>
                      <span>{jobList.location}</span>
                    </div>

                    <div className="flex items-center gap-2 text-xs">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 1v2h6V1h2v2h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1zm11 10H4v8h16zm-9 2v4H6v-4zM7 5H4v4h16V5h-3v2h-2V5H9v2H7z" />
                      </svg>
                      <span>{jobList.period}</span>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-gray-700">{jobList.description}</p>
                </div>
              </div>
            </div>
          })}
        </div> */}
      </div>

      <div className="my-4">
        <div className='bg-white rounded-xl overflow-hidden my-4'>
          <div className='flex items-center p-5 py-4 gap-2'>
            <span className='text-blue-600'>
              &#9679;
            </span>
            <h2 className='text-black'>Education</h2>
          </div>
          {educationList.map((educationDetail) => {
            return <div key={educationDetail.university} className='bg-gray-50 hover:bg-gray-100 mx-1.5 mb-2 p-4 py-4 rounded-md'>
              <div className="rounded-md flex flex-col sm:flex-row  items-start gap-4">
                <img src={educationDetail.icon} alt="University Logo" className="w-12 h-12 object-cover rounded-full" />
                <div>
                  <h3 className="text-sm font-semibold ">{educationDetail.degree}</h3>
                  <div className="mt-2 space-y-1 text-sm text-gray-600 flex gap-5">
                    <div className="flex items-center gap-2 text-xs">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4 11.333L0 9l12-7l12 7v8.5h-2v-7.333l-2 1.166v6.678l-.223.275A9.983 9.983 0 0 1 12 22a9.983 9.983 0 0 1-7.777-3.714L4 18.011zM6 12.5v4.792A7.979 7.979 0 0 0 12 20a7.978 7.978 0 0 0 6-2.708V12.5L12 16zM3.97 9L12 13.685L20.03 9L12 4.315z" />
                      </svg>
                      <span>{educationDetail.university}</span>
                    </div>

                    <div className="flex items-center gap-2 text-xs">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="m12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0zm4.95-7.778a7 7 0 1 0-9.9 0L12 20.9zM12 13a2 2 0 1 1 0-4a2 2 0 0 1 0 4" />
                      </svg>
                      <span>{educationDetail.location}</span>
                    </div>

                    <div className="flex items-center gap-2 text-xs">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 1v2h6V1h2v2h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1zm11 10H4v8h16zm-9 2v4H6v-4zM7 5H4v4h16V5h-3v2h-2V5H9v2H7z" />
                      </svg>
                      <span>{educationDetail.period}</span>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-gray-700">{educationDetail.description}</p>
                </div>
              </div>
            </div>
          })}
        </div>
      </div>
    </div>
  );
}
