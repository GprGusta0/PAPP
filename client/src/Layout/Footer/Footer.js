import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const Links = [
    {
      title: 'ScareFlix',
      links: [
        {
          name: 'Inicio',
          link: '/',
        },
        {
          name: 'Sobre nós',
          link: '/about-us',
        },
        {
          name: 'Contacte-nos',
          link: '/contact-us',
        },
        {
          name: 'Filmes',
          link: '/movies',
        },
      ],
    },
    {
      title: 'Categorias',
      links: [
        {
          name: 'Terror',
          link: '/movies?category=Terror',
        },
        {
          name: 'Sobrenatural',
          link: '/movies?category=Sobrenatural',
        },
      ],
    },
    {
      title: 'Minha Conta',
      links: [
        {
          name: 'Painel de controlo',
          link: '/dashboard',
        },
        {
          name: 'Meus Favoritos',
          link: '/favorites',
        },
        {
          name: 'Perfil',
          link: '/profile',
        },
        {
          name: 'Alterar Password',
          link: '/password',
        },
      ],
    },
  ];
  return (
    <div className="bg-dry py-4 bprder=t-2 border-black">
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-2 md:grid-cols-7 xl:grid-cols-12 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 py-10 justify-between">
          {Links.map((link, index) => (
            <div
              key={index}
              className="col-span-1 md:col-span-2 lg:col-span-3 pb-3.5 sm:pb-0"
            >
              <h3 className="text-md lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5">
                {link.title}
              </h3>
              <ul className="text-sm flex flex-col space-y-3">
                {link.links.map((text, index) => (
                  <li key={index} className="flex items-baseline">
                    <Link
                      to={text.link}
                      className="text-border inline-block w-full hover:text-subMain"
                    >
                      {text.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3">
            <Link to="/">
              <img
                src="/images/logo.png"
                alt="logo"
                className="w-2/4 object-contain h-12"
              />
            </Link>
            <p className="leading-7 text-sm text-border mt-3">
              <span>
              Rua Stinville, nº14 Bairro Santa Bárbara <br /> 2830-144 Barreiro
              </span>
              <br />
              <span>Tel: 212 064 790*</span>
              <br />
              <span>Email: geral.barreiro@epbjc.pt</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
