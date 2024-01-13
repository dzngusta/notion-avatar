import { AvatarConfig } from '@/config/avatar';

export function getRandomAvatar() {
	return {
		accesories: Math.floor(Math.random() * AvatarConfig.accesories + 1),
		hair: Math.floor(Math.random() * AvatarConfig.hair + 1),
		eyes: Math.floor(Math.random() * AvatarConfig.eyes + 1),
		mouth: Math.floor(Math.random() * AvatarConfig.mouth + 1),
		head: Math.floor(Math.random() * AvatarConfig.head + 1),
		outfit: Math.floor(Math.random() * AvatarConfig.outfit + 1),
	};
}
