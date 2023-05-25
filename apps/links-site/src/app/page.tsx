import { Metadata } from 'next';
import Image from 'next/image';
import { moliseLogoUrl } from 'ui';

export const metadata: Metadata = {
  title: 'Molise Doces',
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="mx-auto w-auto px-4 pt-16 pb-8 sm:pt-24 lg:px-8">
        {/* <Image alt="Molise Doces" src={moliseLogoUrl} width={100} height={100} /> */}
      </main>
    </div>
  );
}
