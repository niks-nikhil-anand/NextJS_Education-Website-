import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import whatsapp from '../../public/whatsapp.png'
import instagram from '../../public/instagram.png'
import telegram from '../../public/telegram.png'
import contact from '../../public/contact.jpg'

const Section = () => {
  return (
    <div>
        <div class="font-sans text-[#333] max-w-6xl max-md:max-w-md mx-auto">
      <div class="grid md:grid-cols-2 items-center md:gap-8 gap-6">
        <div class="max-md:order-1 max-md:text-center">
          <p class="mt-4 text-sm font-bold text-blue-600"><span class="rotate-90 inline-block mr-2 mb-2">|</span> ALL IN ONE MEETING SCHEDULER</p>
          <h2 class="md:text-5xl text-3xl font-extrabold mb-4 md:!leading-[55px]">Schedule meetings effortlessly</h2>
          <p class="mt-4 text-base text-gray-500 leading-relaxed">Embark on a gastronomic journey with our curated dishes, delivered promptly to your doorstep. Elevate your dining experience today.</p>
          <div class="bg-white mt-10 flex px-1 py-1.5 rounded-full shadow-[0_5px_22px_-8px_rgba(93,96,127,0.2)] overflow-hidden">
            <input type='email' placeholder='Search Something...' class="w-full font-bold outline-none bg-white pl-4 text-sm" />
            <button type='button'
              class="bg-blue-600 hover:bg-blue-700 transition-all text-white font-bold text-sm rounded-full px-5 py-2.5">Search</button>
          </div>
          <div class="flex items-center mt-10">
            <input id="checkbox3" type="checkbox" class="hidden peer" checked />
            <label for="checkbox3"
              class="relative flex items-center justify-center p-1 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-blue-500 border rounded-full overflow-hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-full fill-white" viewBox="0 0 520 520">
                <path
                  d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                  data-name="7-Check" data-original="#000000" />
              </svg>
            </label>
            <p class="text-base ml-3 text-gray-500">No credit card required!</p>
          </div>
        </div>
        <div class="md:h-[450px] p-2">
          <Image src= {contact} class="w-full h-full object-contain shadow-[0_2px_22px_-10px_rgba(93,96,127,0.2)]" alt="Dining Experience" height={400} width={400} />
        </div>
      </div>
      <div class="mt-12 flex justify-between items-center flex-wrap flex-col md:flex-row ">
        <Link href={"https://wa.link/awqpn5"}>
        <Image src={whatsapp} class="w-28 mx-auto" alt="google-logo" width={200} height={400}/>
        </Link>
        <Link href={"https://t.me/cranaxtalks"}>
        <Image src={telegram}class="w-28 mx-auto" alt="google-logo" width={200} height={200}/>
        </Link>
        <Link href={"https://www.instagram.com/cranaxeducation?igsh=dzFiZGQ5NDljNTM0"}>
        <Image src={instagram}class="w-28 mx-auto" alt="google-logo" width={200} height={200}/>
        </Link>
       
        <Link href={"https://www.linkedin.com/company/cranax-education-and-career-solutions-pvt-ltd/"}>
        <Image src="https://readymadeui.com/linkedin-logo.svg" class="w-28 mx-auto" alt="google-logo" width={200} height={200}/>
        </Link>
       
       
      </div>
    </div>
    </div>
  )
}

export default Section