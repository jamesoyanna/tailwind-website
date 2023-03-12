import React from 'react';
import PropTypes from 'prop-types';

const Card = ({
  img, price, title, desc, storage,
}) => (

  <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
    <img className="w-20 mx-auto mt-[-3rem] bg-white" src={img} alt="/" />
    <h2 className="text-2xl font-bold text-center py-8">{title}</h2>
    <p className="text-center text-4xl font-bold">{price}</p>
    <div className="text-center font-medium">
      <p className="py-2 border-b mx-8 mt-8">{storage}</p>
      <p className="py-2 border-b mx-8">1 Granted User</p>
      <p className="py-2 border-b mx-8">{desc}</p>
    </div>
    <button type="button" className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">Start Trial</button>
  </div>
);

Card.propTypes = {
  img: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  storage: PropTypes.string.isRequired,
};

export default Card;
