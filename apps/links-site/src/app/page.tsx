import { Metadata } from 'next';
import Image from 'next/image';
import moliseLogo from '../../public/img/molise-logo.png';
import LinkList from '../components/LinkList';
import { SocialIcons } from 'ui';

export const metadata: Metadata = {
  title: 'Molise Doces',
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center pb-2 bg-gradient-to-b from-molisePink to-pink-300">
      <header className="w-full h-1/6 pt-14 flex flex-col justify-center items-center gap-14">
        <Image alt="Molise Doces" src={moliseLogo} width={300} />
        <SocialIcons icons={['instagram']} />
      </header>
      <main className="flex-grow mx-auto w-full flex flex-col justify-center items-center px-8 pb-8 lg:px-8">
        <LinkList
          links={[
            {
              label: 'Cardápio',
              url: '/Menu - Molise Doces.pdf',
              image:
                'https://fav.farm/🍫',
            },
            {
              label: 'Faça seu pedido no Whatsapp',
              url: 'https://wa.me/5511957898248?text=Ol%C3%A1!%20Quero%20fazer%20uma%20encomenda!',
              image:
                '/img/whatsapp_icon.svg',
            },
          ]}
        />
      </main>
    </div>
  );
}
