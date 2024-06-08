import React from 'react';

const AboutPage = () => {
    const frontendStack = [
        { name: 'React', description: 'A JavaScript library for building user interfaces.' },
        { name: 'Next.js', description: 'A React framework for building JavaScript applications.' },
        { name: 'react-query', description: 'A data fetching and state management library for React.' },
        { name: 'react-hot-toast', description: 'A library for adding toast notifications to React apps.' },
        { name: 'react-icons', description: 'A library that provides a wide variety of icons for React apps.' },
        { name: 'Clerk', description: 'A user management and authentication service for Next.js applications.' },
        { name: 'Tailwind CSS', description: 'A utility-first CSS framework for rapidly building custom designs.' },
        { name: 'DaisyUI', description: 'A plugin for Tailwind CSS that provides UI components.' },
    ];
    const backendStack = [
        { name: 'PostgreSQL', description: 'A powerful, open-source object-relational database system.'},
        { name: 'Prisma', description: 'An open-source database toolkit.' },
        { name: 'axios', description: 'A promise-based HTTP client for the browser and Node.js.' },
        { name: 'Supabase', description: 'An open-source real-time backend service that provides a real-time RESTful API and Postgres database.' },
    ];
    const aiStack = [
        { name: 'OpenAI', description: 'An AI model developed by OpenAI.' },
    ];

    return (
        <div className='max-w-2xl'>
        <h1 className='text-4xl font-demibold mb-4 text-center'>About Page</h1>
        <h2 className='text-2xl font-demibold mb-2 text-center'>Front-end Stack</h2>
        <ul className='mb-4 bg-secondary p-4 rounded-xl'>
            {frontendStack.map((tech, index) => (
            <li key={index} >
                <strong>{tech.name}:</strong> {tech.description}
            </li>
            ))}
        </ul>
        <h2 className='text-2xl font-demibold mb-2 text-center'>Back-end Stack</h2>
        <ul className='mb-4 bg-secondary p-4 rounded-xl'>
            {backendStack.map((tech, index) => (
            <li key={index}>
                <strong>{tech.name}:</strong> {tech.description}
            </li>
            ))}
        </ul>
        <h2 className='text-2xl font-demibold mb-2 text-center'>AI Stack</h2>
        <ul className='mb-4 bg-secondary p-4 rounded-xl'>
            {aiStack.map((tech, index) => (
            <li key={index}>
                <strong>{tech.name}:</strong> {tech.description}
            </li>
            ))}
        </ul>
        </div>
    );
};

export default AboutPage;