import uuid from 'react-uuid';

const services = [
  {
    id: uuid(),
    title: 'Design',
    text: 'Slick design for your site',
    icon: '/images/service1.svg',
  },
  {
    id: uuid(),
    title: 'Single Page',
    text: 'An online present on the web',
    icon: '/images/service2.svg',
  },
  {
    id: uuid(),
    title: 'Full Site',
    text: 'Show your services and take control',
    icon: '/images/service3.svg',
  },
  {
    id: uuid(),
    title: 'Online Shop',
    text: 'The perfect shop to increase revenue',
    icon: '/images/service4.svg',
  },
];

export default services;
