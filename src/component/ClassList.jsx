import Image from 'next/image'
import React from 'react'
import logo from '../../public/logo.png'
import Header from './Header'

const ClassList = () => {
  return (
    <div><div class="font-sans text-[#fff]">
    <div class="grid lg:grid-cols-2 items-center gap-y-6 bg-blue-500">
      <div class="max-lg:order-1 max-lg:text-center sm:p-12 p-4">
        <h2 class="lg:text-5xl text-3xl font-bold mb-4 lg:!leading-[56px]">    JOIN OUR INTERACTIVE LIVE CLASSES</h2>
        <p class="mt-4 text-base leading-relaxed">With experienced faculty, hybrid learning options, and the Cranax Gurukul app for personalized learning, we ensure holistic growth and academic success. Our result assurance policy and 24/7 student assistance further enhance your learning journey.</p>
        <button type='button'
          class="bg-transparent hover:bg-blue-600 border-2 border-white mt-10 transition-all text-white font-bold text-sm rounded-md px-6 py-2.5">Get Quote</button>
      </div>
      <div class="lg:h-[440px] flex items-center">
        <Image src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y291cnNlc3xlbnwwfHwwfHx8MA%3D%3D" class="w-full h-full object-cover" alt="Dining Experience" height={300} width={300} />
      </div>
    </div>
    <div class="grid lg:grid-cols-4 md:grid-cols-2 gap-8 px-4 my-12">
      <div class="bg-gray-100 p-6 rounded-md">
      <Image src={logo} height={50} width={50} alt='logo'/>
        <h3 class="text-xl font-bold mb-2 text-[#333]">9th ICSE/CBSE </h3>
        <p class="text-sm text-[#333]">Cranax Education and Career Solutions Pvt. Ltd.</p>
        <a href="javascript:void(0);" class="text-blue-600 font-bold inline-block text-sm mt-2 hover:underline">Learn more</a>
      </div>
      <div class="bg-gray-100 p-6 rounded-md">
       <Image src={logo} height={50} width={50} alt='logo'/>
        <h3 class="text-xl font-bold mb-2 text-[#333]">10th ICSE/CBSE</h3>
        <p class="text-sm text-[#333]">Cranax Education and Career Solutions Pvt. Ltd.</p>
        <a href="javascript:void(0);" class="text-blue-600 font-bold inline-block text-sm mt-2 hover:underline">Learn more</a>
      </div>
      <div class="bg-gray-100 p-6 rounded-md">
      <Image src={logo} height={50} width={50} alt='logo'/>
        <h3 class="text-xl font-bold mb-2 text-[#333]">11th (Commerce) </h3>
        <p class="text-sm text-[#333]">Cranax Education and Career Solutions Pvt. Ltd.</p>
        <a href="javascript:void(0);" class="text-blue-600 font-bold inline-block text-sm mt-2 hover:underline">Learn more</a>
      </div>
      <div class="bg-gray-100 p-6 rounded-md">
      <Image src={logo} height={50} width={50} alt='logo'/>
        <h3 class="text-xl font-bold mb-2 text-[#333]">12th (Commerce) </h3>
        <p class="text-sm text-[#333]">Cranax Education and Career Solutions Pvt. Ltd.</p>
        <a href="javascript:void(0);" class="text-blue-600 font-bold inline-block text-sm mt-2 hover:underline">Learn more</a>
      </div>
    </div>
    <Header/>
  </div>
  </div>
  )
}

export default ClassList