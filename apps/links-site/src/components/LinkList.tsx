import Image from 'next/image';
import { LinkEntry } from '../types/LinkEntry.type';

function LinkList({ links }: { links: LinkEntry[] }) {
  return (
    <ul className='w-full flex flex-col gap-7 text-lg antialiased font-light tracking-wide text-slate-800 align-middle'>
      {links.map((link) => (
        <li key={link.url} className=' py-2 pl-2 flex justify-evenly items-center bg-white bg-opacity-30 backdrop-blur-lg rounded-xl drop-shadow-xl'>
          {link.image ? <Image src={link.image} alt={link.label} width={30} height={30} /> : null}
          <p className="flex-1 text-center">{link.label}</p>
        </li>
      ))}
    </ul>
  );
}

export default LinkList;
