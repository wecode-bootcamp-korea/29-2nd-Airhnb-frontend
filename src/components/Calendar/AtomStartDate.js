import { atom } from 'recoil';

export const AtomStartDate = atom({
  key: 'startDate',
  default: new Date(),
});

export default AtomStartDate;
