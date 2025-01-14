import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';

export const pageLinks = [
    { id: 1, href: '#home', text: 'home' },
    { id: 2, href: '#about', text: 'about' },
    { id: 3, href: '#services', text: 'services' },
    { id: 4, href: '#tours', text: 'tours' },
];

export const socialLinks = [
    { id:1, href: 'https://www.twitter.com', icon: 'fab fa-facebook'},
    { id:2, href: 'https://www.twitter.com', icon: 'fab fa-twitter'},
    { id:3, href: 'https://www.instagram.com', icon: 'fab fa-squarespace'}
];

export const services = [
    {
      id: 1,
      icon: 'fas fa-wallet fa-fw',
      title: 'saving money',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia',
    },
    {
        id: 2,
        icon: 'fas fa-tree fa-fw',
        title: 'endless hiking',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia',
      },
      {
        id: 3,
        icon: 'fas fa-socks fa-fw',
        title: 'amazing comfort',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia',
      }
    // rest of the objects
  ]

  export const tours = [
    {
        id: 1,
        date: 'august 26th, 2020',
        title: 'Tibet Adventure',
        days: '6 days',
        price: 'from $2100',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        place: 'china',
        img: tour1
    },
    {
        id: 2,
        date: 'october 1th, 2020',
        title: 'best of java',
        days: '11 days',
        price: 'from $1400',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        place: 'indonesia',
        img: tour2
    },
    {
        id: 3,
        date: 'september 15th, 2020',
        title: 'explore hong kong',
        days: '8 days',
        price: 'from $5000',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        place: 'hong kong',
        img: tour3
    },
    {
        id: 4,
        date: 'december 5th, 2019',
        title: 'kenya highlights',
        days: '20 days',
        price: 'from $3300',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        place: 'kenya',
        img: tour4
    }
  ]