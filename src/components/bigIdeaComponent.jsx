import React from 'react'
import BigIdea from '../assets/images/the big idea 1.png';

const BigIdeaComponent = () => {
  return (
    <section className='p-6 flex items-center gap-8'>
        <img src={BigIdea} alt='The Big Idea' className='w-1/2' />
        <div>
            <h2 className='font-clash text-4xl my-4'>Introduction to getlinked</h2>
            <h6 className='font-clash text-purple font-bold text-3xl my-4'>techHackathon 1.0</h6>
            <p>Our tech hackathon is a melting pot of visionaries, and its purpose is as
clear as day: to shape the future. Whether you're a coding genius, a 
design maverick, or a concept wizard, you'll have the chance to transform 
your ideas into reality. Solving real-world problems, pushing the boundaries
of technology, and creating solutions that can change the world,
that's what we're all about!</p>
        </div>
    </section>
  )
}

export default BigIdeaComponent