import GetIcons from "@/utlis/getIcons";
import { LinkButtonWithIcon } from "../utils/buttons";

const blocks = [
  {
    name: "CRM",
    description: "For user engagement and retention",
    href: "/blocks",
    icon: "MdOutlinePeopleAlt",
  },
  {
    name: "Product Tour Builder",
    description: "Guide users through your app",
    href: "/blocks",
    icon: "MdOutlineBolt",
  },
  {
    name: "Visual App Builder",
    description: "Build apps without coding.",
    href: "/blocks",
    icon: "MdOutlineSubscriptions",
  },
];
export default function UpcomingBlogs() {
  return (
    <section className=''>
      <div className='container cont cont_gap cont_py '>
        <div className='cont gap-2 cont_w w-full mx-auto text-center'>
          <h2 className='h2'>We're Building More Blocks</h2>
          <p className='h2_sub text-white-200'>
            In the near future, 36Blocks will include:
          </p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {blocks.map((block, index) => {
            const Icon = GetIcons(block?.icon, "md");
            return (
              <div
                key={index}
                className='w-full bg-[var(--color-base)] p-6 rounded-lg border border-[var(--color-primary-dark)] hover:border-[var(--color-primary)] cont gap-6 transition-all min-h-[200px] h-full cont justify-between'
              >
                <Icon fontSize={40} className='text-primary' />
                <div className='flex flex-col gap-2'>
                  <h3 className='text-xl font-medium'>{block.name}</h3>
                  <p className='text-white-200'>{block.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className='cont gap-4 cont_w w-full mx-auto text-center justify-center items-center'>
          <p className='h2_sub '>
            and more tools to help you scale without engineering overhead.
          </p>
          <LinkButtonWithIcon href="/" text="Join Waitlist" />
        </div>
      </div>
    </section>
  );
}
