import { atom } from 'recoil';

export const AtomEndDate = atom({
  key: 'endtDate',
  default: new Date(),
});

export default AtomEndDate;
