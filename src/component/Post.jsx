import Image from "next/image"
import Header from "./Header"

const posts = [
    {
      id: 1,
      title: 'HOW TO WOW IN COMMUNICATION SKILLS?',
      imageUrl:
          'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29tbXVuaWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D', 
      href: '#',
      description:
        'Master the art of effective communication with our expert-led courses, tailored to enhance your confidence and impact.',
      date: 'Cranax Education',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      author: {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        href: '#',
        avtaarUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      id: 1,
      title: 'TAKE YOUR ENGLISH TO NEXT LEVEL',
      imageUrl:
          'https://images.unsplash.com/photo-1565022536102-f7645c84354a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZW5nbGlzaCUyMGNsYXNzfGVufDB8fDB8fHww', 
      href: '#',
      description:
        'Elevate your English proficiency through immersive learning experiences designed to refine your language skills and fluency.',
      datetime: '2020-03-16',
      category: { title: 'Language', href: '#' },
      author: {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        href: '#',
        avtaarUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      id: 1,
      title: 'JOIN US FOR PERSONALITY DEVELOPMENT',
      imageUrl:
      'https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbmFsaXR5fGVufDB8fDB8fHww', 
      href: '#',
      description:
        'Discover your true potential, cultivate essential skills, and radiate confidence in every aspect of your life with our holistic approach to personality development.',
      date: 'Cranax Education',
      datetime: '2020-03-16',
      category: { title: 'Personality', href: '#' },
      author: {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        href: '#',
        avtaarUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    // More posts...
  ]
  
  export default function Post() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="w-full  ">
          
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between"> 
               <Image src={post.imageUrl} height={300} width={300} className="rounded-lg"
               alt="temp"
               />
                <div className="flex items-center gap-x-4 text-xs">

                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
                
              </article>
            ))}
          </div>
        </div>
      </div>
    )
  }
  