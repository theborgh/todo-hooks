import {useState} from 'react';

const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  const setToggle = () => setValue(!value);

  return [value, setToggle];
};

export default useToggle;
