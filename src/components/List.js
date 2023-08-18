import React from 'react';
import listIcon from '../assets/images/icon-list.svg';

const listData = [
  {
    text: 'Product discovery and building what matters',
  },
  {
    text: 'Measuring to ensure updates are a success',
  },
  {
    text: 'And much more!',
  },
];

function List() {
  return (
    <ul className="lists">
      {listData.map((item, index) => (
        <li className="list" key={index}>
          <img className="icon" src={listIcon} alt="" />
          {item.text}
        </li>
      ))}
    </ul>
  );
}

export default List;
