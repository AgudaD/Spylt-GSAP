import React from 'react'

const FooterSection = () => {
  return (
    <section className='footer-section'>
        <img src="/images/footer-dip.png" alt="" className='w-full object-cover -translate-y-1' />

        <div className='2xl:h-[110dvh] relative md:pt-[20vh] pt-[10vh]'>
            <div className='overflow-hidden z-10'>
                <h1 className='general-title text-center text-milk py-5'>#CHUGRESPONSIBLY</h1>
            </div>

            <video src="/videos/splash.mp4" autoPlay playsInline muted className='absolute top-0 object-contain mix-blend-lighten'></video>
        </div>
    </section>
  )
}

export default FooterSection