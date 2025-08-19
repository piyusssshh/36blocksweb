import Link from "next/link";
import { HiChevronRight } from "react-icons/hi";

export function LinkWithIcon({ href, text, customClasses }) {
  return (
    <Link
      href={href}
      className={`active-link flex items-center text-sm  ${customClasses}`}
    >
      <span>{text}</span>
      <HiChevronRight fontWeight={400} fontSize={20} />
    </Link>
  );
}
