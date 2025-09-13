import React from 'react';

const CartIcon = ({ size = 20, color = 'white' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth={2}>
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h2l3.6 7.59a1 1 0 0 0 .83.41h9.72a1 1 0 0 0 .95-.68l3.24-7.32A1 1 0 0 0 20 1H5.21" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 16h10a1 1 0 0 0 1-1V6H6v9a1 1 0 0 0 1 1z" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default CartIcon;
