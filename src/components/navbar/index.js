import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <header className='container flex justify-between items-center py-3'>
        <Image
          src='/assets/brand/36agnets_logo.svg'
          className='w-fit h-8'
          width={320}
          height={80}
          alt='36agnets_logo'
        />
        <nav className='flex gap-6'>
          <Link className='text-link' href='/features'>
            Features
          </Link>
          <Link className='text-link' href='/pricing'>
            Pricing
          </Link>
          <Link className='text-link' href='/about'>
            About
          </Link>
          <Link className='text-link' href='/support'>
            Support
          </Link>
          <Link className='text-link active-link' href='/start-building'>
            Start Building
          </Link>
        </nav>
      </header>
    </>
  );
}
