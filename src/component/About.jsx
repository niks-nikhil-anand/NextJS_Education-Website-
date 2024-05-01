import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

const features = [
  {
    name: 'Specialized coaching for classes 9th to 12th :-',
    description:
      'Our experienced faculty members create personalized learning plans, ensuring students grasp key concepts and excel in their studies. ',
    icon: CloudArrowUpIcon,
  },
  {
    name: ' Digital Marketing Training :-',
    description: 'It equips students with the latest tools and strategies in digital marketing, including SEO, social media marketing, and content creation. ',
    icon: LockClosedIcon,
  },
  {
    name: 'Personality Development courses :-',
    description: 'It aimed at nurturing essential life skills such as communication, leadership, and interpersonal relationships. ',
    icon: ServerIcon,
  },
]

export default function About() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Career Path Starts Here…….</h2>
              <p className="mt-2 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">Premier destination for commerce education excellence</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              we ensure holistic growth and academic success. Our result assurance policy and 24/7 student assistance further enhance your learning journey.

              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            src="https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZWR1Y2F0aW9ufGVufDB8fDB8fHww"
            alt="Product screenshot"
            className=" rounded-xl shadow-xl ring-1 ring-gray-400/10 "
            width={432}
            height={142}
          />
        </div>
      </div>
    </div>
  )
}
