import { useSearchParams } from 'react-router-dom';

export const useCustomSearchParams = (param = {}) => {
  const [search, setSearch] = useSearchParams();
  const searchAsObject = Object.fromEntries(new URLSearchParams(search));

  const transformedSearch = Object.keys(param).reduce(
    (acc, key) => ({
      ...acc,
      [key]: param[key](acc[key]),
    }),
    searchAsObject
  );

  return [transformedSearch, setSearch];
};
