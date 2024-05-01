import Image from 'next/image';
import React from 'react';
import platstore from '../../public/playstore.png'; 
import whatsapp from '../../public/whatsapp.png'; 
import telegram from '../../public/telegram.png'; 
import Link from 'next/link';
const Images = () => {
  return (
    <div className="font-sans text-[#333] max-w-6xl max-md:max-w-md mx-auto p-3">
      <div className="grid md:grid-cols-2 items-center md:gap-8 gap-6">
        <div className="max-md:order-1 max-md:text-center">
          <p className="text-sm font-bold text-blue-600 mb-2"><span className="rotate-90 inline-block mr-2">|</span>GET THE SURE SHOT SUCCESS MANTRA FOR YOUR BOARD EXAM</p>
          <h2 className="md:text-3xl text-xl font-extrabold mb-4 md:!leading-[55px]">DOWNLOAD OUR CRANAX GURUKUL LEARNING APP</h2>
          <p className="mt-4 text-base text-gray-500 leading-relaxed"> Experience interactive live classes, guided by industry experts, and download the Cranax Gurukul app for personalized learning. With a result assurance policy and 24/7 student assistance, we pave the way for your academic and professional success.</p>
          <div className="flex space-between items-center lg:gap-5 lg:flex-row flex-col gap-1">
            <Link href='https://play.google.com/store/apps/details?id=apps.cranaxgurukul.in&pcampaignid=web_share'>
              
                <Image src={platstore} alt='playstore' height={1000} width={1000} className='w-[10rem]'/>
              
            </Link>
            <Link href='https://cranaxgurukul.web.app/#/'>
              <button type="button" className="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-[1rem] text-center items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 me-2 mb-2">
                
               Student Portal...
              </button>
            </Link>
            
          </div>
          <hr className="" />
          <div className="mt-10">
            <h4 className="font-bold text-base mb-2">Trusted by teams around the world</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">

            <Link href={"https://t.me/cranaxtalks"}>
              <Image src={telegram} className="w-28 mx-auto" alt="pinterest-logo" width={400} height={400} />
              </Link>

              <Link href={"https://www.facebook.com/cranax7?mibextid=ZbWKwL"}>
              <Image src="https://readymadeui.com/facebook-logo.svg" className="w-28 mx-auto" alt="facebook-logo" width={50} height={50} />
              </Link>
              <Link href={"https://www.linkedin.com/company/cranax-education-and-career-solutions-pvt-ltd/"}>
              <Image src="https://readymadeui.com/linkedin-logo.svg" className="w-28 mx-auto" alt="linkedin-logo" width={50} height={50} />

              </Link>
              <Link href={"https://wa.link/vi4s6y"}>
              <Image src={whatsapp} className="w-28 mx-auto" alt="pinterest-logo" width={400} height={400} />
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:h-[650px] md:h-[550px] flex items-center relative max-md:before:hidden before:absolute before:bg-indigo-800 before:h-full before:w-3/4 before:right-0 before:z-0">
          <Image src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="rounded-md lg:w-3/4 md:w-11/12 z-50 relative" alt="Dining Experience" height={300} width={300}/>
        </div>
      </div>
    </div>
  );
};

export default Images;
