import { LangConfig } from '@/config/lang';
import type { LangTypes } from '@/config/lang';

export function getLangField(lang: LangTypes, field: keyof typeof LangConfig[LangTypes]) {
	return LangConfig[lang][field];
}
