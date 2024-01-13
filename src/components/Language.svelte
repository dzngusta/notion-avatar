<script lang="ts">
	import { writable } from 'svelte/store';

	import chevronIcon from '@/assets/images/icons/chevron-down.svg';
	import checkIcon from '@/assets/images/icons/check.svg';
	import ptIcon from '@/assets/images/icons/lang/pt.svg';
	import enIcon from '@/assets/images/icons/lang/en.svg';
	import esIcon from '@/assets/images/icons/lang/es.svg';

	import { LanguageStore } from '@/stores/language';

	import type { LangTypes } from '@/config/lang';

	const langs: LangTypes[] = ['pt', 'en', 'es'];

	const icons = {
		pt: ptIcon,
		en: enIcon,
		es: esIcon,
	};

	const open = writable(false);

	const onHandleOpen = () => open.update((prev) => !prev);

	const onSelectLanguage = (newLang: LangTypes) => {
		LanguageStore.update(() => newLang);
		open.update(() => false);
	};
</script>

<div class="flex relative w-28 h-fit">
	<button
		class="flex justify-center items-center w-full h-12 bg-zinc-50 text-zinc-900 border-2 border-zinc-900 font-fuzzy text-lg font-bold leading-none px-4 py-2 rounded-2xl hover:scale-105 hover:brightness-110 active:scale-95 active:brightness-95 transition-all duration-100 gap-2"
		on:click={onHandleOpen}
	>
		<img class="w-6 h-6 border-2 border-zinc-900 rounded-full" src={icons[$LanguageStore]} alt="Crevron Icon" />
		<h1 class="flex-1 text-left text-xl font-bold uppercase leading-none mt-1">{$LanguageStore}</h1>
		<img class="w-4 data-[open=true]:-scale-y-100" src={chevronIcon} alt="Crevron Icon" data-open={$open} />
	</button>
	{#if $open}
		<div class="absolute flex flex-col w-full top-16 p-2 gap-2 bg-zinc-50 border-2 border-zinc-900 rounded-xl">
			{#each langs as lang}
				<button
					class="flex items-center w-full h-auto px-3 py-2 rounded-lg hover:bg-zinc-200 data-[active=true]:cursor-default z-10 cursor-pointer text-center gap-2"
					data-active={$LanguageStore === lang}
					on:click={() => onSelectLanguage(lang)}
				>
					{#if $LanguageStore === lang}
						<img class="w-6 h-6 border-2 border-zinc-900 rounded-full" src={checkIcon} alt="Check Icon" />
					{:else}
						<img class="w-6 h-6 border-2 border-zinc-900 rounded-full" src={icons[lang]} alt="Language Icon" />
					{/if}
					<span class="flex-1 text-left uppercase font-fuzzy font-bold text-lg">
						{lang}
					</span>
				</button>
			{/each}
		</div>
	{/if}
</div>
