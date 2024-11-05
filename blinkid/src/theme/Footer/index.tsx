import React from 'react';

import {useThemeConfig} from '@docusaurus/theme-common';
import FooterLinks from '../../../../main/src/theme/Footer/Links';
import FooterLogo from '../../../../main/src/theme/Footer/Logo';
import FooterCopyright from '../../../../main/src/theme/Footer/Copyright';
import FooterLayout from '../../../../main/src/theme/Footer/Layout';

function Footer(): JSX.Element | null {
  const {footer} = useThemeConfig();
  if (!footer) {
    return null;
  }
  const {copyright, links, logo, style} = footer;

  return (
    <FooterLayout
      style={style}
      links={links && links.length > 0 && <FooterLinks links={links} />}
      logo={logo && <FooterLogo logo={logo} />}
      copyright={copyright && <FooterCopyright copyright={copyright} />}
    />
  );
}

export default React.memo(Footer);
