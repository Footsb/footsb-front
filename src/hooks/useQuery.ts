'use client';

import { useSearchParams, useRouter, usePathname } from 'next/navigation';

const useHandleQuery = () => {
  const searchParams = useSearchParams();
  const path = usePathname();
  const router = useRouter();

  const getQueryList = (type: string) => {
    const teamListFilter = {
      location: searchParams.getAll('location'),
      day: searchParams.getAll('day'),
      time: searchParams.getAll('time'),
      etc: searchParams.getAll('etc'),
    };

    const filterList: { [key: string]: { [key: string]: string[] } } = {
      teamList: teamListFilter,
    };

    return filterList[type];
  };

  const deleteQuery = (key: string, value: string) => {
    const queryText = `${key}=${encodeURI(value)}`;

    const prevQuery = searchParams.toString();
    const queryArr = prevQuery.split('&').filter((el) => el !== queryText);

    let nextQuery = '';
    for (let i = 0; i < queryArr.length; i++) {
      if (i === queryArr.length - 1) {
        nextQuery += `${queryArr[i]}`;
      } else {
        nextQuery += `${queryArr[i]}&`;
      }
    }

    router.push(`${path}?${nextQuery}`);
  };

  return { getQueryList, deleteQuery };
};

export default useHandleQuery;
