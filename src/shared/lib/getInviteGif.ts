import { inviteGifOptions } from '../../data/inviteGifOptions';

export const getInviteGif = (id: string) => {
  return inviteGifOptions.find((gif) => gif.id === id)?.src;
};
