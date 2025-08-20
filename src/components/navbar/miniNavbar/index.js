"use client";
import Link from "next/link";
import { useState } from "react";
import { LuAlignLeft } from "react-icons/lu";

export default function MiniNavbar({ data }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <span className=' flex md:hidden relative overflow-visible'>
        <button
          className='btn btn-ghost btn-icon text-3xl'
          onClick={() => setOpen(!open)}
        >
          <LuAlignLeft />
        </button>
        <div
          className={`absolute right-0 top-16 z-50 bg-base-200 p-6  w-[180px] rounded ${
            open ? "block" : "hidden"
          }`}
        >
          <nav className='gap-6 flex flex-col'>
            {data.map((item, index) => (
              <Link key={index} className='text-link' href={item.href}>
                {item.name}
              </Link>
            ))}
            <Link className='text-link active-link' href='/start-building'>
              Start Building
            </Link>
          </nav>
        </div>
      </span>
    </>
  );
}
