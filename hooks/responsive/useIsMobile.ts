import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { breakpoints } from '@utils/style';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  const mobile = useMediaQuery({
    query: `(max-width: ${breakpoints.md}px)`,
  });
  useEffect(() => {
    setIsMobile(mobile);
  }, [mobile]);

  return isMobile;
};

export { useIsMobile };
