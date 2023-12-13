import React from 'react'
import { Link } from 'react-router-dom';
import { SiteLogo } from '@/assets/svgs/SiteIcons';

const ClickableSiteLogo = ({ style }) => {
  return (
    <Link to='/' className={`${style}`}>
      {/* <li> */}
        <SiteLogo width={100} />
      {/* </li> */}
    </Link>
  );
};

export default ClickableSiteLogo