import { atom } from 'recoil';

export const AtomEnd = atom({
  key: 'endtDate',
  default: new Date(),
});

export default AtomEnd;
