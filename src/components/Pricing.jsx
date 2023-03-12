import React from 'react';
import Card from './Card';
import Single from '../assets/single.png';
import Double from '../assets/double.png';
import Triple from '../assets/triple.png';

const pricingData = [
  {
    img: Single,
    title: 'single User',
    price: '$150',
    desc: 'Send up to 2 GB',
    storage: '10GB',
    id: 1,
  },
  {
    img: Double,
    title: 'Duoble User',
    price: '$90',
    desc: 'Send up to 320 GB',
    storage: '400GB',
    id: 2,
  },
  {
    img: Triple,
    title: 'Triple User',
    price: '$1500',
    desc: 'Send up to 80 GB',
    storage: '125GB',
    id: 3,
  },
];

const Pricing = () => (
  <div className="w-full py-[10rem] px-4 bg-white">
    <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
      {pricingData.map(({
        img, title, price, desc, storage, id,
      }) => (
        <Card
          key={id}
          img={img}
          title={title}
          price={price}
          desc={desc}
          storage={storage}
          id={id}
        />
      ))}
    </div>
  </div>
);

export default Pricing;
