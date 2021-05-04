import { selector } from 'recoil';
import { message } from './atom';

export const messageState = selector({
  key: 'messageState',
  get: ({ get }) => {
    const isOpen = Boolean(get(message));
    return {
      isOpen,
    };
  },
});
