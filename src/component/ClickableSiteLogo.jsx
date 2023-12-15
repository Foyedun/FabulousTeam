import React from 'react'
import { Link } from 'react-router-dom';
import { SiteLogo } from '@/assets/svgs/SiteIcons';

const ClickableSiteLogo = ({ style }) => {
  return (
    <Link to='/' className={`${style}`}>
        <SiteLogo width={100} />
    </Link>
  );
};

export default ClickableSiteLogo