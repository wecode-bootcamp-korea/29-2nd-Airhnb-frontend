import { atom } from 'recoil';

export const AtomEndDate = atom({
  key: 'endDate',
  default: new Date(),
});

export default AtomEndDate;
