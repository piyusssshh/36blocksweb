import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const data = [
    {
      name: "Products",
      content: [
        {
          name: "User Management",
          href: "/products",
        },
        {
          name: "API Gateway",
          href: "/products",
        },
        {
          name: "Subscription Billing",
          href: "/products",
        },
        {
          name: "Database Management",
          href: "/products",
        },
      ],
    },
    {
      name: "Company",
      content: [
        {
          name: "About",
          href: "/products",
        },
        {
          name: "Pricing",
          href: "/products",
        },
        {
          name: "Contact",
          href: "/products",
        },
      ],
    },
    {
      name: "Social",
      content: [
        {
          name: "Twitter",
          href: "/products",
        },
        {
          name: "LinkedIn",
          href: "/products",
        },
        {
          name: "Instagram",
          href: "/products",
        },
        {
          name: "Facebook",
          href: "/products",
        },
      ],
    },
  ];
  return (
    <>
      <footer className=' bg-[var(--color-base-secondary)]'>
        <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 cont_gap cont_py'>
          <div className='cont gap-3'>
            <Image
              src='/assets/brand/36agnets_logo.svg'
              className='w-fit h-8'
              width={320}
              height={80}
              alt='36agnets_logo'
            />
            <p className='text-sm text-white-200'>
              Modular infrastructure for modern builders. Launch faster, scale
              smarter.
            </p>
            <p className='text-sm text-white-200'>
              @2024 36Blocks.
              <br />
              All rights reserved.
            </p>
          </div>
          {data.map((item, index) => (
            <div className='flex flex-col gap-2' key={index}>
              <h3 className='font-medium text-sm'>{item.name}</h3>
              <ul className='flex flex-col gap-2'>
                {item.content.map((content, index) => (
                  <li key={index} className='text-sm text-white-200'>
                    <Link className='text-link ' href={content?.href}>
                      {content.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
    </>
  );
}
