import { writable } from 'svelte/store';

import { getRandomAvatar } from '@/utils/avatar';

export const AvatarStore = writable(getRandomAvatar());
