import { Metadata } from 'next';
import Image from 'next/image';
import moliseLogo from '../../public/img/molise-logo.png';
import LinkList from '../components/LinkList';

export const metadata: Metadata = {
  title: 'Molise Doces',
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center pb-2 bg-gradient-to-b from-molisePink to-pink-300">
      <header className="w-full h-1/6 py-6 flex justify-center">
        <Image alt="Molise Doces" src={moliseLogo} width={200} />
      </header>
      <main className="flex-grow mx-auto w-full flex justify-center px-8 pt-8 pb-8 sm:pt-24 lg:px-8">
        <LinkList
          links={[
            {
              label: 'visite nosso site',
              url: '#',
              image:
                'https://i.pinimg.com/originals/11/f2/fd/11f2fd963a2028fa67ce38ffe0e92bc5.png',
            },
            {
              label: 'acesse nossa loja',
              url: '#',
              image:
                'https://i.pinimg.com/originals/11/f2/fd/11f2fd963a2028fa67ce38ffe0e92bc5.png',
            },
            {
              label: 'entre em contato',
              url: '#',
              image:
                'https://i.pinimg.com/originals/11/f2/fd/11f2fd963a2028fa67ce38ffe0e92bc5.png',
            },
          ]}
        />
      </main>
    </div>
  );
}
