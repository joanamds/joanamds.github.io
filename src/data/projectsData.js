import SolarSystem from '../images/projects_images/solar-system.png';
import Trybetunes from '../images/projects_images/trybetunes.png';
import OnlineStore from '../images/projects_images/online-store.png';
import TrybeWallet from '../images/projects_images/trybewallet.png';

const projects = [
  {
    title: 'Solar System',
    descriptionENG: 'It is a page that renders the solar system planets and some famous space missions.',
    description: 'É uma página que renderiza os planetas do sistema solar e algumas missões espaciais famosas.',
    image: SolarSystem,
    page: 'https://joanamds.github.io/projeto-solar-system/',
    repo: 'https://github.com/joanamds/projeto-solar-system',
  },
  {
    title: 'TrybeTunes',
    description: 'É uma aplicação para pesquisar e listar álbuns e músicas de várias bandas e artistas. É possível ouvir uma prévia das músicas do álbum e adicionar as músicas favoritas em uma lista.',
    descriptionENG: 'It is an application to search and list albums and songs of various bands and artists. You can listen a preview of the songs in the album and add favorite songs on a list.',
    image: Trybetunes,
    page: 'https://joanamds.github.io/projeto-trybetunes/',
    repo: 'https://github.com/joanamds/projeto-trybetunes',
  },
  {
    title: 'Online Store',
    description: 'Foi um projeto realizado em grupo, precisamos fazer uma loja online alimentada pela API do mercado livre. No app é possível filtrar os produtos por categoria, pesquisar na barra de pesquisa, adicionar, remover e alterar a quantidade do produto no carrinho e em seguida finalizar a compra em uma página de checkout.',
    descriptionENG: 'It was a group project. We need to make a online store using an API of the site Mercado Livre. In the app it is possible to filter products by category, search in the search bar, add, remove and change the quantity of the product in the cart and then complete the purchase on a checkout page.',
    image: OnlineStore,
    page: 'https://joanamds.github.io/projeto-frontend-online-store/',
    repo: 'https://github.com/joanamds/projeto-frontend-online-store',
  },
  {
    title: 'TrybeWallet',
    description: 'É uma aplicação que salva os gastos do usuário e converte tudo para uma única moeda. Para obter as informações da cotação, nomes de moedas e outros dados sobre as moedas utilizamos a API de Cotações de Moedas.',
    descriptionENG: 'It is an application that saves user expenses and converts all to a single currency. To get current quotation, coins name and other data about the coins it was used an API of coins quotation',
    image: TrybeWallet,
    page: 'https://joanamds.github.io/projeto-trybewallet/',
    repo: 'https://github.com/joanamds/projeto-trybewallet',
  },
];

export default projects;