<script lang="ts">
	import { writable } from 'svelte/store';

	import type { AvatarTypes } from '@/config/avatar.ts';

	import Selector from '@/components/Selector.svelte';

	import squareIcon from '@/assets/images/icons/square.svg';
	import hairIcon from '@/assets/images/icons/avatar/hair.svg';
	import eyesIcon from '@/assets/images/icons/avatar/eyes.svg';
	import mouthIcon from '@/assets/images/icons/avatar/mouth.svg';
	import headIcon from '@/assets/images/icons/avatar/head.svg';
	import outfitIcon from '@/assets/images/icons/avatar/outfit.svg';
	import accesoriesIcon from '@/assets/images/icons/avatar/accesories.svg';

	const TypeStore = writable<keyof AvatarTypes>('hair');

	let currentType = $TypeStore;

	const icons = {
		hair: hairIcon,
		eyes: eyesIcon,
		mouth: mouthIcon,
		head: headIcon,
		outfit: outfitIcon,
		accesories: accesoriesIcon,
	};

	const onSelectType = (type: string) => TypeStore.set(type as keyof AvatarTypes);

	TypeStore.subscribe((value) => (currentType = value));
</script>

<div class="flex flex-col w-full max-w-md sm:max-w-lg lg:hidden gap-4 sm:gap-6">
	<div class="grid grid-cols-6 gap-4">
		{#each Object.entries(icons) as [key, value]}
			<button
				class="relative flex items-center justify-center p-2 xs:p-4 cursor-pointer hover:scale-105 active:scale-95 transition-all duration-100 data-[active=true]:scale-110 data-[active=false]:opacity-50"
				data-active={currentType === key}
				on:click={() => onSelectType(key)}
			>
				<img class="w-full" src={value} alt="Type icon" />
				<img class="absolute w-full h-full" src={squareIcon} alt="Square border" />
			</button>
		{/each}
	</div>
	<Selector type={currentType} />
</div>
