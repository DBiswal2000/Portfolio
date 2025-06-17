import React from 'react'
import { skills, information, aboutMe, profile } from '@/data/data';

const Sidebar = () => {
    const about = aboutMe[0]
    const myProfile = profile[0]
    return (
        <div>
            <div className='bg-white rounded-xl overflow-hidden'>
                <div className='relative  bg-gradient-to-bl'>
                    <img src={myProfile.cover} alt="cover" className='w-full' />
                    <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent bottom-0"></div>
                    <div>
                        <img src={myProfile.profile} alt="photo" width={80} className='absolute bottom-4 left-4 rounded-full border-2 border-white' />
                    </div>
                </div>

                <div>
                    <div className='p-4'>
                        <div className='flex gap-2 items-center'>
                            <h3 className='font-semibold'>{myProfile.name}</h3>
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-200 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-300"></span>
                            </span>
                        </div>

                        <div className='flex gap-2 items-center text-sm'>
                            <p>{myProfile.role}</p>
                            <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true">
                                <circle cx="1" cy="1" r="1"></circle>
                            </svg>
                            <p>{myProfile.location}</p>
                        </div>
                    </div>

                    <div className='text-sm mx-2 mb-2 p-2 py-4 bg-gray-50  rounded-md'>
                        <p className='text-gray-600'>{myProfile.description}</p>
                        <div className='flex flex-wrap gap-1 my-4 '>
                            {skills.map((skill) => {
                                return <span key={skill} className='bg-gray-200 text-gray-600 py-1 px-2 rounded-sm text-xs font-semibold'>{skill}</span>
                            })}
                        </div>
                        <a className='block w-full bg-blue-600 text-white py-3 text-center font-semibold rounded-md hover:bg-blue-700 transition' href={myProfile.resume}>Download CV</a>
                    </div>

                </div>

            </div>

            <div className='bg-white rounded-xl overflow-hidden my-4'>
                <div className='flex items-center p-3 gap-3'>
                    <span className='text-blue-600'>
                        &#9679;
                    </span>
                    <h2 className='font-bold'>About me</h2>
                </div>
                <div className='bg-gray-50 mx-2 mb-2 p-2 py-4 rounded-md'>
                    <div>
                        <div>
                            <p className='text-gray-600 text-sm leading-6'>{about.description}</p>
                        </div>

                        <hr className='border-gray-600 my-4 opacity-15'></hr>
                        <div className='flex flex-col gap-2'>
                            <a className='flex gap-1 items-center font-semibold text-sm' href="">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4">
                                    <path fill="currentColor" d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm11-3v8h-2V6.413l-7.793 7.794l-1.414-1.414L17.585 5H13V3z">
                                    </path>
                                </svg>
                                <span>{about.website}</span>
                            </a>
                            <a className='flex gap-1 items-center font-semibold text-sm' href="">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4">
                                    <path fill="currentColor" d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m17 4.238l-7.928 7.1L4 7.216V19h16zM4.511 5l7.55 6.662L19.502 5z">
                                    </path>
                                </svg>
                                <span>{about.email}</span>
                            </a>
                            <div className='flex gap-3'>
                                <a className='h-8 w-1/2 bg-gray-900 text-white py-1 text-center font-semibold rounded-md hover:bg-gray-700 transition' href={myProfile.github}>GitHub</a>
                                <a className='h-8 w-1/2 bg-sky-600 text-white py-1 text-center font-semibold rounded-md hover:bg-sky-700 transition' href={myProfile.linkdin}>Linkdin</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-white rounded-xl overflow-hidden my-4'>
                <div className='flex items-center p-3 gap-3'>
                    <span className='text-blue-600'>
                        &#9679;
                    </span>
                    <h2 className='font-bold'>Information</h2>
                </div>
                <div className='bg-gray-50 mx-2 mb-2 p-2 py-4 rounded-md'>
                    <ul>
                        {
                            information.map((info, index) => {
                                return <React.Fragment key={info.label}>
                                    <li className='flex justify-between '>
                                        <span className='text-sm text-gray-700'>{info.label}</span>
                                        <span className='text-sm'>{info.value}</span>
                                    </li>
                                    {index < information.length - 1 && (
                                        <hr className='border-gray-600 my-2 opacity-15' />
                                    )}
                                </React.Fragment>
                            })
                        }
                    </ul>
                </div>
            </div>

        </div>

    )
}

export default Sidebar