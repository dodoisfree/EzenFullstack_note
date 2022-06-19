import { useLocation } from "react-router-dom";

const useQueryString = () => {

  const { search } = useLocation();

  const params = new URLSearchParams(search);

  const entries = params.entries();

  const result = {};

  for (const [key, value] of entries) {
    result[key] = value;
  }

  return result;
};

export { useQueryString };
