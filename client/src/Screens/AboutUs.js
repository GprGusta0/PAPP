import React from 'react';
import Head from '../Components/Head';
import Layout from './../Layout/Layout';

function AboutUs() {
  return (
    <Layout>
      <div className="min-height-screen container mx-auto px-2 my-6">
        <Head title="Sobre Nós" />
        <div className="xl:py-20 py-10 px-4">
          <div className="grid grid-flow-row xl:grid-cols-2 gap-4 xl:gap-16 items-center">
            <div>
              <h3 className="text-xl lg:text-3xl mb-4 font-semibold">
                Bem-Vindo ao ScareFlix
              </h3>
              <div className="mt-3 text-sm leading-8 text-text">
                <p>
                Bem-vindo ao ScareFlix, este projeto nasceu de uma visão audaciosa durante a minha jornada acadêmica, especialmente no âmbito do meu Projeto de Aptidão Final (PAP).
                Como entusiasta de filmes de terror, reconheci a necessidade de um destino que reunisse os melhores e mais emocionantes filmes do gênero, acessíveis a qualquer um neste website.
                </p>
                <p>
                  O meu objetivo é oferecer uma experiência única e imersiva só para os fãs de terror, onde podem explorar por um vasto catálogo de filmes cuidadosamente selecionados, 
                  desde os clássicos até os mais recentes lançamentos.
                </p>
                <p>
                  Juntem-se a mim nesta jornada de arrepiar a espinha e desvendar os mistérios mais sombrios da mente humana. 
                  Sejam bem-vindo ao ScareFlix - onde o medo encontra o seu lar.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="p-8 bg-dry rounded-lg">
                  <span className="text-3xl block font-extrabold">10K</span>
                  <h4 className="text-lg font-semibold my-2">Filmes Selecionados</h4>
                  <p className="mb-0 text-text leading-7 text-sm">
                    Descubra uma vasta seleção de 10.000 filmes selecionados para o seu prazer.
                  </p>
                </div>
                <div className="p-8 bg-dry rounded-lg">
                  <span className="text-3xl block font-extrabold">8K</span>
                  <h4 className="text-lg font-semibold my-2">Utlizadores Encantados</h4>
                  <p className="mb-0 text-text leading-7 text-sm">
                    Junte-se à nossa comunidade de 8.000 Utlizadores felizes aproveitando conteúdo gratuito, sem registo.
                  </p>
                </div>
              </div>
              
            </div>
            <img
              src="/images/about2.jpg"
              alt="aboutus"
              className="w-full xl:block hidden h-header rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AboutUs;
