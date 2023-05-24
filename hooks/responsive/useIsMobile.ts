import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { breakpoints } from '@utils/style';

//  isMobile
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  const mobile = useMediaQuery({
    query: `(max-width: ${breakpoints.sm}px)`,
  });
  useEffect(() => {
    setIsMobile(mobile);
  }, [mobile]);

  return isMobile;
};

//  isTablet
const useIsTablet = () => {
  const [isTablet, setIsTablet] = useState(false);
  const tablet = useMediaQuery({
    query: `(max-width: ${breakpoints.md}px)`,
  });
  useEffect(() => {
    setIsTablet(tablet);
  }, [tablet]);

  return isTablet;
};

export { useIsMobile, useIsTablet };
