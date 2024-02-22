'use client';

import { LeadershipSphere } from '@/components/LeadershipSphere/LeadershipSphere';
import Loading from '@/components/Loading/Loading';
import { VdnxPosterHome } from '@/components/VdnhHome/VdnxPosterHome';
import PrepraHeader from '@/components/mainscreen/prepraheader/PrepraHeader';
import { useEffect, useState } from 'react';

export default function Home() {
  const [loadingHome, setLoadingHome] = useState(true);

  useEffect(() => {
    const inter = setTimeout(() => {
      setLoadingHome(false);
    }, 0);
    return () => clearTimeout(inter);
  }, []);

  return (
    <>
      {loadingHome ? (
        <Loading />
      ) : (
        <>
          <PrepraHeader />
          <LeadershipSphere/>
          <VdnxPosterHome/>
        </>
      )}
    </>
  );
}
