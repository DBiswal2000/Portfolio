import React from 'react'
import { projectsList } from '@/data/data';

const page = () => {
  return (
    <div>
      <div className="mt-4 lg:mt-17">
        <div className='bg-white rounded-xl overflow-hidden my-4'>
          <div className='flex items-center p-5 py-4 gap-2'>
            <span className='text-blue-600'>
              &#9679;
            </span>
            <h2 className='text-black'>Projects</h2>
          </div>
          {projectsList.map((projectList) => {
            return <div key={projectList.name} className='bg-gray-50 hover:bg-gray-100 mx-1.5 mb-2 p-4 py-4 rounded-md'>
              <div className="rounded-md flex flex-col sm:flex-row items-start gap-4">
                <img src={projectList.icon} alt="University Logo" className="w-12 h-12 object-cover rounded-full" />
                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-sm font-semibold ">{projectList.name}</h3>
                    {/* <span className="bg-gray-200 text-gray-600 text-xs p-1 px-2 font-semibold rounded-md">NEW</span> */}
                  </div>
                  {/* <div className="mt-2 space-y-1 text-sm text-gray-600 flex gap-5">
                    <div className="flex items-center gap-2 text-xs">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M3.087 9h17.826a1 1 0 0 1 .997 1.083l-.833 10a1 1 0 0 1-.997.917H3.92a1 1 0 0 1-.996-.917l-.834-10A1 1 0 0 1 3.087 9M4.84 19h14.32l.667-8H4.174zm8.574-14H20a1 1 0 0 1 1 1v1H3V4a1 1 0 0 1 1-1h7.414z"></path>
                      </svg>
                      <span>{projectList.category}</span>
                    </div>

                    <div className="flex items-center gap-2 text-xs">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M20 22h-2v-2a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v2H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5zm-8-9a6 6 0 1 1 0-12a6 6 0 0 1 0 12m0-2a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></path>
                      </svg>
                      <span>{projectList.role}</span>
                    </div>

                    <div className="flex items-center gap-2 text-xs">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 1v2h6V1h2v2h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1zm11 10H4v8h16zm-9 2v4H6v-4zM7 5H4v4h16V5h-3v2h-2V5H9v2H7z" />
                      </svg>
                      <span>{projectList.date}</span>
                    </div>
                  </div> */}
                  <p className="mt-3 text-sm text-gray-700">{projectList.description}</p>
                  <div className="flex items-center gap-2 text-sm font-semibold text-blue-600 mt-4">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm11-3v8h-2V6.413l-7.793 7.794l-1.414-1.414L17.585 5H13V3z"></path>
                    </svg>
                    <a href={projectList.website}>{projectList.website}</a>
                  </div>
                </div>
              </div>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default page