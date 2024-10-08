'use client';
 
import { useEffect, useState } from 'react';
import Link from 'next/link';

const styles = {
    skillTag: {
        width: 'fit-content',
        color: 'black',
        borderRadius: '5px',
        height: '23px',
        padding: '0 15px',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
    }
}
 
export default function ProjectCard( {title, description, imgURL, link, hyperLink, skills} ) {
    return (
        <div className='bg-gray-50 pb-4 rounded shadow-md flex justify-around flex-col'>
            <div>
                <div className='flex flex-col items-center bg-gray-500'>
                    {imgURL &&
                    <img 
                    src={imgURL}
                    style={{maxWidth: '100%', maxHeight: '300px', objectFit: 'contain'}}
                    alt={`Screenshot from ${imgURL}`}
                    />
                    }
                </div>
                <div className=''>
                    <Link href={hyperLink} target='_blank' className='text-blue-700'><h3 className='px-4 font-semibold text-lg py-2'>{title}</h3> </Link>
                    <p className='px-4 pb-4'>{description}</p>
                </div>
                <div>
                <div className='px-4' style={{display: 'flex', gap: '4px', flexWrap: 'wrap', marginTop: '1rem', marginBottom: '8px'}}>
                    {skills && skills.map((skill, index) => (
                        <span key={index} className='text-xs' style={{ ...styles.skillTag, backgroundColor: '#e4e4e4' }}>
                            {skill}
                        </span>
                    ))}
                </div>
                </div>
            </div>
            <div className='px-4'><Link
                key={`${link}`}
                href={`${link}`}
                className=""
            >
                <button className='float-right bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded'>Learn More</button>
            </Link></div>
        </div>
    );
}