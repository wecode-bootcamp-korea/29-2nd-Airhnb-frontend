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
    const param = get(queryParam);
    let city = '';
    let house_type = '';
    let ghost = '';
    let country = '';
    let trap = param.trap;
    let exit = param.exit;
    if (param.city.length > 0) {
      for (let i = 0; i < param.city.length; i++) {
        city += `city=${param.city[i]}&`;
      }
    }
    if (param.house_type.length > 0) {
      for (let i = 0; i < param.house_type.length; i++) {
        house_type += `house_type=${param.house_type[i]}&`;
      }
    }
    if (param.ghost.length > 0) {
      for (let i = 0; i < param.ghost.length; i++) {
        ghost += `ghost=${param.ghost[i]}&`;
      }
    }
    if (param.country.length > 0) {
      for (let i = 0; i < param.country.length; i++) {
        country += `country=${param.country[i]}&`;
      }
    }

    return `?${city}${house_type}${ghost}${country}${trap ? 'trap=True&' : ''}${
      exit ? 'exit=True&' : ''
    }`;
  },
});
