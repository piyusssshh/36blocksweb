import Image from "next/image";
import Link from "next/link";
import MiniNavbar from "./miniNavbar";

export default function Navbar() {
  const data = [
    {
      name: "Features",
      href: "/features",
    },
    {
      name: "Pricing",
      href: "/pricing",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Support",
      href: "/support",
    },
  ];
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
        <MiniNavbar data={data} />
        <nav className='gap-6 hidden md:flex'>
          {data.map((item, index) => (
            <Link key={index} className='text-link' href={item.href}>
              {item.name}
            </Link>
          ))}
          <Link className='text-link active-link' href='/start-building'>
            Start Building
          </Link>
        </nav>
      </header>
    </>
  );
}
