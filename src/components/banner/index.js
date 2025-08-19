import Image from "next/image";

export default function Banner() {
  return (
    <section className='container flex items-center gap-6 justify-between py-14 cont_gap flex-col md:flex-row min-h-[calc(100vh-6rem)]'>
      <div className='cont cont_gap cont_w w-full'>
        <h1 className='h1'>Modular Infrastructure for Modern Builders</h1>
        <p className='h1_sub'>
          Plug-and-play backend tools to launch your product faster - without
          engineering from scratch.
        </p>
        <div className='flex gap-4'>
          <button className='btn btn-primary'>Get Started</button>
          <button className='btn btn-secondary'>Watch Demo</button>
        </div>
      </div>
      <Image
        src='/assets/index/index_hero.svg'
        className='w-full xl:max-w-[600px] lg:max-w-[520px] md:max-w-[380px]'
        width={720}
        height={720}
        alt='index_hero'
        loading='lazy'
      />
    </section>
  );
}
