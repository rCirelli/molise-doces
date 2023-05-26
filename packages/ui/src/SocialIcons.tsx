import * as React from 'react';

// const options = ['instagram', 'whatsapp', 'website', 'store'];


const options = {
  instagram: {
    name: '@molisedoces',
    link: 'https://www.instagram.com/molisedoces/',
    iconUrl: '/img/instagram_icon.svg',
  },
  whatsapp: {
    name: '(11) 95789-8248',
    link: 'https://wa.me/5511957898248?text=Ol%C3%A1!%20Quero%20fazer%20uma%20encomenda!',
    iconUrl: '/img/whatsapp_icon.svg',
  }
}

export type IconOptions = Array<keyof typeof options>;


export const SocialIcons = ({ icons }: { icons: IconOptions }) => {
  return (
    <ul>
      {icons.length > 0
        ? icons.map((icon) => (
            <li key={icon} className="normal-case flex justify-center items-center gap-2 text-xl tracking-wide antialiased">
              <img src={options[icon].iconUrl} alt={options[icon].name} width={25} height={25} className='py-2 drop-shadow-xl' />
              <a href={options[icon].link} target="_blank" rel="noopener noreferrer">
                {options[icon].name}
              </a>
            </li>
          ))
        : null}
    </ul>
  );
};
