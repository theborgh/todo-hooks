import {useState, useEffect} from 'react';

export default (key, defaultValue) => {
  // make a piece of state based on value in localStorage, if any
  const [state, setState] = useState(() => {
    let val;

    try {
      // localStorage data could be corrupted
      val = JSON.parse(
        window.localStorage.getItem(key) || String(defaultValue)
      );
    } catch (err) {
      val = defaultValue;
    }

    return val;
  });

  // update localStorage when state changes
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
};
