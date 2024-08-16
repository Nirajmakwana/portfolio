import React from 'react'
import { MyName } from '../../constants';

const FooterBottom = () => {
  const CurrentYear = new Date().getFullYear();
  return (
    <div className="w-full py-10">
      <p className="text-center text-gray-500 text-base">
        © {CurrentYear}. All rights reserved by {MyName}
      </p>
    </div>
  );
}

export default FooterBottom