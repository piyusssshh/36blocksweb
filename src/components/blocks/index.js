import Image from "next/image";
import { LinkWithIcon } from "../utils/buttons";
import GetIcons from "@/utlis/getIcons";

const blocks = [
  {
    name: "User Management",
    description:
      "Ready-to-go authentication with Google, Apple, and OTP login. Easily manage roles, sessions, and user data.",
    href: "/blocks",
    icon: "MdOutlinePeopleAlt",
  },
  {
    name: "API Gateway",
    description:
      "Connect your frontend and backend with secure, rate-limited, token-authenticated API routing.",
    href: "/blocks",
    icon: "MdOutlineBolt",
  },
  {
    name: "Subscription Billing",
    description:
      "Create pricing plans, accept payments, manage subscribers — all without building your own system.",
    href: "/blocks",
    icon: "MdOutlineSubscriptions",
  },
  {
    name: "Database Management",
    description:
      "Design, filter, and manage structured data with an intuitive, no-code interface.",
    href: "/blocks",
    icon: "MdOutlineDataset",
  },
];
export default function Blocks() {
  return (
    <section className='bg-[var(--color-base-secondary)]'>
      <div className='container cont cont_gap cont_py '>
        <div className='cont gap-2 cont_w w-full'>
          <h2 className='h1'>Modular Infrastructure for Modern Builders</h2>
          <p className='h1_sub text-white-200'>
            Plug-and-play backend tools to launch your product faster - without
            engineering from scratch.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {blocks.map((block, index) => {
            const Icon = GetIcons(block?.icon, "md");
            return (
              <div
                key={index}
                className='w-full bg-[var(--color-base)] p-6 rounded-lg border border-[var(--color-primary-dark)] hover:border-[var(--color-primary)] cont gap-6 transition-all min-h-[250px] h-full cont justify-between'
              >
                <Icon fontSize={40} className='text-primary' />
                <div className='flex flex-col gap-2'>
                  <h3 className='text-xl font-medium'>{block.name}</h3>
                  <p className='text-white-200'>{block.description}</p>
                </div>
                <LinkWithIcon href={block?.href} text='Get Started' />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
