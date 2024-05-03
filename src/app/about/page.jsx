"use client"
import platstore from '../../../public/playstore.png' 
import React from 'react';
import { Menu, X, MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const menuItems = [
  {
    name: 'Home',
    href: '#',
  },
  {
    name: 'About',
    href: '#',
  },
  {
    name: 'Contact',
    href: '#',
  },
];

const locations = [
  {
    City: 'Lucknow, Uttar Pradesh',
    timings: 'Mon-Sat 9am to 5pm.',
    address: "3rd Floor, Devidas Enterprises, Hardoi Rd, next to Shreya J, Tahseen Ganj, Chowk, Lucknow, Uttar Pradesh 226003",
  },
  

];

const users = [
  {
    name: 'Gabrielle Fernandez',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=600&w=600&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
    position: 'Marketing Lead',
  },
  {
    name: 'Victória Silva',
    image: 'https://images.generated.photos/vBRCiI_3UM4l40sU8s7fCwbJwzDwRTGpebzPkfHFsY4/rs:fit:512:512/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODgyMTAyLmpwZw.jpg',
    position: 'Back-end developer',
  },
  // Other user objects...
];

export default function AboutPageOne() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="mx-auto max-w-7xl px-4">
        {/* Hero Map */}
        <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
          <div className="max-w-max rounded-full border bg-gray-50 p-1 px-3">
            <p className="text-xs font-semibold leading-normal md:text-sm">Cranax Education</p>
          </div>
          <p className="text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
          CRANAX EDUCATION AND CAREER SOLUTIONS
          </p>
          <p className="max-w-4xl text-base text-gray-600 md:text-xl">
          Our mission is to provide specialized coaching for classes 9th to 12th, Digital Marketing Training, and Personality Development courses.
          </p>
        </div>
        <div className="w-full space-y-4">
          <div className="max-w-max rounded-full border bg-gray-50 p-1 px-3">
            <p className="text-xs font-semibold leading-normal md:text-sm"></p>
          </div>
          <div className="w-full">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113888.3260172459!2d80.74634309726562!3d26.871417400000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd7ca5d4ffb7%3A0xc02a12948c7c0604!2sCranax%20Education%20And%20Career%20Solutions%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1714663460330!5m2!1sen!2sin" width="1300" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="my-8 flex flex-col gap-y-6 md:flex-row justify-start">
            {locations.map((location) => (
              <div key={location.title} className="flex flex-col space-y-3 md:w-2/4 lg:w-1/5">
                <MapPin className="h-5 w-5" />
                <p className="w-full text-xl font-semibold  text-gray-900">{location.title}</p>
                <p className="w-full text-base text-gray-700">{location.timings}</p>
                <p className="text-sm font-medium">{location.address}</p>
              </div>
            ))}
          </div>
          <hr className="mt-20" />
         
        
          <div className="flex flex-col items-center gap-x-4 gap-y-4 py-16 md:flex-row">
            <div className="space-y-6">
              <p className="text-sm font-semibold md:text-base">Download Our App </p>
              <p className="text-3xl font-bold md:text-4xl">DOWNLOAD OUR CRANAX GURUKUL LEARNING APP</p>
              <p className="text-base text-gray-600 md:text-lg">
              
              </p>
              <Link href='https://play.google.com/store/apps/details?id=apps.cranaxgurukul.in&pcampaignid=web_share'>
              
              <Image src={platstore} alt='playstore' height={1000} width={1000} className='w-[10rem]'/>
            
          </Link>
            </div>
            <div className="md:mt-0 mt-10 w-full">
              <Image
                src="https://images.unsplash.com/photo-1605165566807-508fb529cf3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                alt="Getting Started"
                className="rounded-lg"
                height={400}
                width={400}
              />
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-6" />
      {/* footer */}
    </div>
  );
}
