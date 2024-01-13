<script lang="ts">
	import lineBorder from '@/assets/images/line-border.svg';
	import Arrow from '@/components/Arrow.svelte';

	import { LanguageStore } from '@/stores/language';

	import type { AvatarTypes } from '@/config/avatar';
	import { AvatarConfig } from '@/config/avatar';

	import { getLangField } from '@/utils/lang';

	import { AvatarStore } from '@/stores/avatar';

	export let type: keyof AvatarTypes;

	const typeConfig = AvatarConfig[type];

	function onClickPrev() {
		AvatarStore.update((store) => {
			const prev = store[type];
			const newValue = prev === 1 ? typeConfig : prev - 1;

			return { ...store, [type]: newValue };
		});
	}

	function onClickNext() {
		AvatarStore.update((store) => {
			const prev = store[type];
			const newValue = prev === typeConfig ? 1 : prev + 1;

			return { ...store, [type]: newValue };
		});
	}
</script>

<div class="flex flex-col w-full max-w-[22.5rem] gap-3">
	<h1 class="text-2xl font-fuzzy font-bold text-center">
		{getLangField($LanguageStore, `label.${type}`)}
	</h1>
	<div class="relative flex w-full justify-center items-center h-16 gap-2 bg-zinc-50 p-4">
		<Arrow direction={'left'} onClick={onClickPrev} />
		<span class="flex-1 text-xl font-fuzzy font-bold text-center leading-none mt-1">
			{getLangField($LanguageStore, 'selector.label')}
			{$AvatarStore[type]}
		</span>
		<Arrow direction={'right'} onClick={onClickNext} />
		<img class={'absolute left-0 top-0 w-full h-full pointer-events-none'} src={lineBorder} alt="Control Border" />
	</div>
</div>
