import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px] ' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 '>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente animi perspiciatis debitis? Ex, modi! Reiciendis assumenda nemo recusandae voluptatum corrupti alias, quibusdam non ea maiores omnis enim numquam unde sint.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, ut quae beatae alias labore optio quasi incidunt vero accusantium, veniam iste, repellat molestiae perspiciatis exercitationem hic! Ut magni quisquam vel?</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe facere obcaecati aspernatur iste quasi natus culpa. Labore, voluptas, laborum eum alias eveniet sequi quis asperiores soluta quia esse odio quo.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} /> 
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit maiores illum quae reiciendis ea adipisci aut velit mollitia unde totam ipsa atque fugiat, facilis suscipit, quaerat quisquam placeat dolores sapiente?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit maiores illum quae reiciendis ea adipisci aut velit mollitia unde totam ipsa atque fugiat, facilis suscipit, quaerat quisquam placeat dolores sapiente?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit maiores illum quae reiciendis ea adipisci aut velit mollitia unde totam ipsa atque fugiat, facilis suscipit, quaerat quisquam placeat dolores sapiente?</p>
        </div>
      </div>

      <NewsLetterBox />

    </div>
  )
}

export default About