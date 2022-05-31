import { useCallback, useMemo } from 'react';
import qs from 'qs';
import { useLocation, useNavigate } from 'react-router';

export const useQueryParams = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const search = location.search;
  const [_, currentQuery] = search.split('?');

  const pushQuery = useCallback(
    (queryObj: { [key: string]: any }) => {
      const newSearchStr = qs.stringify(queryObj, { arrayFormat: 'brackets' });

      navigate(`${location.pathname}?${newSearchStr}`);
    },
    [location, navigate]
  );

  // TODO fix this later
  const parsedParams: { [key: string]: any } = useMemo(() => {
    // TODO: find out how to replace to lightweight alternative, for example https://bundlephobia.com/package/query-string@7.0.1
    return qs.parse(currentQuery);
  }, [location.pathname]);

  return { params: parsedParams, pushQuery: pushQuery };
};
