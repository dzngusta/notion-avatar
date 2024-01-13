<script lang="ts">
	import lineBorder from '@/assets/images/line-border.svg';
	import Arrow from '@/components/Arrow.svelte';

	import { LanguageStore } from '@/stores/language';

	import type { AvatarTypes } from '@/config/avatar';
	import { AvatarConfig } from '@/config/avatar';

	import { getLangField } from '@/utils/lang';

	import { AvatarStore } from '@/stores/avatar';

	export let type: keyof AvatarTypes;

	function onClickPrev() {
		const typeConfig = AvatarConfig[type];

		AvatarStore.update((store) => {
			const prev = store[type];
			const newValue = prev === 1 ? typeConfig : prev - 1;

			return { ...store, [type]: newValue };
		});
	}

	function onClickNext() {
		const typeConfig = AvatarConfig[type];

		AvatarStore.update((store) => {
			const prev = store[type];
			const newValue = prev === typeConfig ? 1 : prev + 1;

			return { ...store, [type]: newValue };
		});
	}
</script>

<div class="flex flex-col w-full xl:max-w-[22.5rem] gap-3">
	<h1 class="hidden lg:block text-2xl font-fuzzy font-bold text-center">
		{getLangField($LanguageStore, `label.${type}`)}
	</h1>
	<div class="relative flex w-full justify-center items-center h-fit sm:h-16 gap-2 bg-zinc-50 p-4">
		<Arrow direction={'left'} onClick={onClickPrev} />
		<span class="flex-1 text-xl font-fuzzy font-bold text-center leading-none mt-1 whitespace-nowrap">
			{getLangField($LanguageStore, 'selector.label')}
			{$AvatarStore[type]}
		</span>
		<Arrow direction={'right'} onClick={onClickNext} />
		<img
			class={'absolute left-0 top-1/2 -translate-y-1/2 w-full h-auto pointer-events-none'}
			src={lineBorder}
			alt="Control Border"
		/>
	</div>
</div>
