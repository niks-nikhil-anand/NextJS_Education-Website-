'use client'
import ContactForm from '@/component/FormSection'
import Image from 'next/image'
import React from 'react'
export default function ContactPageOne() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div>
     

      <div className="mx-auto max-w-7xl px-4 bg-gradient-to-r from-purple-800 to-indigo-800  ">
        
        <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
          <div className="mx-auto max-w-max rounded-full border bg-gray-50 p-1 px-3">
            <p className="text-center text-xs font-semibold leading-normal md:text-sm">
            Contact Us Now
            </p>
          </div>
          <p className="text-center text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
          Cranax Education and Career Solutions
          </p>
          <p className="mx-auto max-w-4xl text-center text-base text-white-600 md:text-xl">
          Feel free to reach out to us with any questions, feedback, or inquiries. Fill out the form , and we will get back to you as soon as possible.
          </p>
        </div>
        <div className="mx-auto max-w-7xl py-12 md:py-24">
          <div className="flex justify-center ">
            {/* contact from */}
            <ContactForm/>
           
          </div>
        </div>
      </div>
      <hr className="mt-6" />
      
    </div>
  )
}
