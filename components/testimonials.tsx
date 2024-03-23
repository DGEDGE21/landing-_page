import Image from 'next/image'
import TestimonialImage from '@/public/images/testimonial.jpg'

export default function Testimonials() {
  return (
    <section className="relative">

      {/* Illustration behind content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32" aria-hidden="true">
        <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">Nossos Clientes</h2>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">Na nossa jornada para fornecer soluções inovadoras e eficazes para a gestão de recursos, temos o privilégio de trabalhar com uma ampla gama de clientes em diversos setores industriais. Nossa dedicação em entender as necessidades específicas de cada cliente e oferecer soluções personalizadas nos permite construir relacionamentos sólidos e duradouros. Alguns dos nossos clientes incluem:</p>
          </div>

          {/* Items */}
          <div className="max-w-sm md:max-w-4xl mx-auto grid gap-2 grid-cols-4 md:grid-cols-5">

            {/* Item */}


<div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
  <Image
    src={require("../assets/ENH (2).png")} // Replace with the actual path to your image
    alt="Your image description" // Add an appropriate alt attribute for accessibility
    width={124}
    height={24}
  />
</div>


            {/* Item */}
           
<div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
  <Image
    src={require("../assets/enh.png")} // Replace with the actual path to your image
    alt="Your image description" // Add an appropriate alt attribute for accessibility
    width={124}
    height={24}
  />
</div>

            {/* Item */}
           
<div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
  <Image
    src={require("../assets/fiapg.png")} // Replace with the actual path to your image
    alt="Your image description" // Add an appropriate alt attribute for accessibility
    width={124}
    height={24}
  />
</div>

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
  <Image
    src={require("../assets/ts.png")} // Replace with the actual path to your image
    alt="Your image description" // Add an appropriate alt attribute for accessibility
    width={124}
    height={24}
  />
</div>

            {/* Item */}
     

          </div>

          {/* Testimonials */}
       

        </div>
      </div>
    </section>
  )
}