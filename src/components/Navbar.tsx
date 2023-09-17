'use client';
import Link from 'next/link';
import Icon, { icon } from './Icon';
import { usePathname } from 'next/navigation';

interface item {
  label: string;
  href: string;
  icon: icon;
}
const Items: item[] = [
  { label: 'About us', href: '/about-us', icon: 'info' },
  { label: 'Catalog', href: '/catalog', icon: 'catalog' },
  { label: 'Pattern', href: '/pattern', icon: 'pattern' },
  { label: 'Learn', href: '/learn', icon: 'learn' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className={`${pathname === '/' ? 'bg-black text-white' : 'bg-white text-black'} h-24 sticky top-0 left-0 right-0  flex items-center gap-12`}>
      <Link href="/">Logo</Link>
      <nav className="flex items-center h-full mx-auto overflow-hidden">
        <ul className="relative flex">
          {Items.map(({ label, href, icon }) => (
            <li key={label} className="last:before:bg-[#C4151C] last:before:absolute last:before:-left-32 last:before:ml-20 last:before:-bottom-5 last:before:h-2 last:before:w-[2px] ">
              <Link href={href} className="relative group flex flex-col gap-[0.6rem] items-center justify-center w-40 h-14 transition-all duration-500 uppercase">
                <Icon variant={icon} className="transition-all duration-500 group-hover:text-[#C4151C]" />
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
