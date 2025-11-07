
import React from 'react'
import './index.css'

function LandingPage() {
  return (
    <div className="bg-white text-gray-900">
      <header className="bg-black text-white py-6 text-center">
        <h1 className="text-4xl font-bold">KK Transport Express</h1>
        <p className="text-sm mt-2">Efficient Freight. Nationwide Service.</p>
      </header>

      <section className="p-8 text-center">
        <h2 className="text-3xl font-semibold mb-4">About Us</h2>
        <div className="max-w-4xl mx-auto text-lg leading-relaxed space-y-4">
          <p>
            At KK Transport Express, we pride ourselves on delivering reliable and timely logistics solutions
            across the nation. Our team of experienced drivers and logistics professionals is committed to
            providing excellent service and building lasting relationships with clients.
          </p>
          <img src="/images/image1.png" alt="Fleet" className="rounded-lg shadow-md mx-auto my-4 w-full max-w-xl" />
          <p>
            Whether it's a local shipment or a long-haul journey, our modern fleet is equipped to handle your cargo with
            care and efficiency. From cargo vans to semi-trucks, we ensure your goods arrive safely and on time.
          </p>
          <img src="/images/image2.png" alt="Service" className="rounded-lg shadow-md mx-auto my-4 w-full max-w-xl" />
          <p>
            As a family-run business, we value transparency, accountability, and personalized attention. Our mission
            is to help our partners grow by ensuring every delivery runs smoothly, every time.
          </p>
          <img src="/images/image3.png" alt="Truck" className="rounded-lg shadow-md mx-auto my-4 w-full max-w-xl" />
        </div>
      </section>

      <section className="p-8 bg-gray-100 text-center">
        <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
        <p>Email: kktransportexpress@gmail.com</p>
        <p>Phone: (801) 875-3733</p>
      </section>
    </div>
  )
}

export default LandingPage
