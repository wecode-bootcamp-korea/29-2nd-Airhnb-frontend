import { atom } from 'recoil';

export const becomeHostData = atom({
  key: 'becomeHostData',
  default: {
    house_type_id: '',
    latitude: '',
    longitude: '',
    country: '',
    city: '',
    max_guest: '',
    trap: 'False',
    exit: 'False',
    ghost_id: '',
    name: '',
    description: '',
  },
});
