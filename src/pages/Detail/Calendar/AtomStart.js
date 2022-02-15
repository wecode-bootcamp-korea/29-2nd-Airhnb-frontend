import { atom } from 'recoil';

export const AtomStart = atom({
  key: 'startDate',
  default: new Date(),
});

export default AtomStart;
