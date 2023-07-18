
import { Navbar, Brand, CTA } from './components'
import { Blog, Features, Header, Footer, Possibility, WhatGPT3 } from './containers'

function App() {
  return (
    <div className=" w-screen h-screen overflow-x-hidden">

      <div className='gradient__bg w-full relative'>
        <Navbar />
        <Header />
      </div>

      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />

    </div>
  );
}

export default App;
