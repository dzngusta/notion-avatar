import { writable } from 'svelte/store';

import type { LangTypes } from '@/config/lang';

export const LanguageStore = writable<LangTypes>('pt');
