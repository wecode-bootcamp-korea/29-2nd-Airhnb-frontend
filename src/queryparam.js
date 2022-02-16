import { atom, selector } from 'recoil';

export const queryParam = atom({
  key: 'queryParam',
  default: {
    city: [],
    house_type: [],
    ghost: [],
    country: [],
    trap: false,
    exit: false,
  },
});

export const setQueryParam = selector({
  key: 'setQueryParam',
  get: ({ get }) => {
    const text = get(queryParam);

    return `${text}`;
  },
});
