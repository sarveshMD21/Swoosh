import React, { Suspense } from 'react';
import { CustomerReview,Hero,Navbar,Footer,Subscribe,Service,SpecialOffer,SuperQuality,PopularProducts } from './Components';

const App = () => {
  return (
    <main className="relative">
      <Navbar/>
      <section className="xl:padding-1  padding-b">
        <Hero/>
      </section>
      <section className="padding mt-2">
        <PopularProducts/>
      </section>
      <section className="padding">
      <SuperQuality/>
      </section>
      <section className="padding-x py-10">
        <Service/>
    </section>
    <section className="padding">
      <SpecialOffer/>
      </section>
      <section className="padding bg-pale-blue">
       <CustomerReview/>
      </section>
      <section className="padding-x py-16 sm:py-32 w-full">
        <Subscribe/>
      </section>
      <section className="padding-x padding-t bg-black pb-8">
        <Footer/>
      </section>
    </main>
  )
}

export default App