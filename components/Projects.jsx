'use client'

import React from 'react'
import { projects } from '@/constants'
import Image from 'next/image'

const ProjectCard = ({ index, name, description, tags, image, source_code, live_demo }) => {
    return (
    <div className="relative h-[250px] border-solid border-2 border-black rounded-2xl p-5">
        <Image 
            src={image}
            alt={name}
            width={100}
            height={100}
            className="object-contain"
        />

        <div className="absolute inset-0 flex justify-end m-3">
            <div
                onClick={() => window.open(live_demo, '_blank')}
                className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
                <Image
                    src='/chrome.png'
                    alt='domain'
                    width={100}
                    height={100}
                    className="w-3/4 h-3/4 object-contain bg-black rounded-full"
                />
            </div>
            <div
                onClick={() => window.open(source_code, '_blank')}
                className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
                <Image
                    src='/github.png'
                    alt='github'
                    width={100}
                    height={100}
                    className="w-3/4 h-3/4 object-contain bg-black rounded-full"
                />
            </div>
        </div>

        <div className="mt-5">
            <h3 className="font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
                <p key={tag.name} className='text-[14px]'>
                    #{tag.name}
                </p>
            ))}
        </div>
    </div>
    )
}

const Projects = () => {
  return (
    <div>
        <h2 className='flex justify-center text-xl mt-[20px]'>Projects</h2>
        <div className='mt-10 flex flex-wrap gap-7'>
            {projects.map((project, index) => (
                <ProjectCard 
                    key={`project-${index}`}
                    index={index}
                    {...project}
                />
            ))}
        </div>
    </div>
  )
}

export default Projects