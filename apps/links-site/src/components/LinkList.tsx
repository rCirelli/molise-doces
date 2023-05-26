import Image from 'next/image';
import { LinkEntry } from '../types/LinkEntry.type';

function LinkList({ links }: { links: LinkEntry[] }) {
  return (
    <ul className="max-w-md w-full flex flex-col gap-7">
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.url}
            className="py-2 px-2 flex justify-evenly items-center bg-white bg-opacity-30 backdrop-blur-lg rounded-xl drop-shadow-xl"
            target='_blank'
            rel="noopener noreferrer"
          >
            {link.image ? (
              <img src={link.image} alt={link.label} width={40} height={40} className='ml-4 py-2 drop-shadow-xl' />
            ) : null}
            <p className="flex-1 text-center sm:line-clamp-1 text-xl antialiased font-light tracking-wide text-slate-800 align-middle">{link.label}</p>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default LinkList;
