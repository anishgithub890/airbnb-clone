'use client';

import { useEffect, useState } from 'react';

interface ClientOnlyProps {
  children: React.ReactNode;
}

const ClientOnly: React.FC<ClientOnlyProps> = ({ children }) => {
  const [hashMounted, setHashMounted] = useState(false);

  useEffect(() => {
    setHashMounted(true);
  }, []);
  if (!hashMounted) {
    return null;
  }
  return <>{children}</>;
};

export default ClientOnly;
