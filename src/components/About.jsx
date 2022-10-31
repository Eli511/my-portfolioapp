import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm ELI KHOZA, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I am an aspiring Software Engineer. A self motivated and critical thinker in 
                Software development. Over the past three years, I have developed an extensive 
                academic knowledge of JavaScript, C++ , PL/SQl, PHP, JAVA, Open Source, Web Development 
                and Project Management. 
                Why You What To Be A Developer At SovTech? 
                I would like to be a Software Developer at SovTech because I believe 
                I am a good fit for the Graduate program. I am will to learn need things in
                a short space of time, in order to complete Task in workplace. I have also looked at SovTech 
                website it is a great company that helps Big and Small companies with Software Development.
                </p>  
            
               
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
