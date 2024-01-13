<script lang="ts">
	import { getLangField } from '@/utils/lang';

	import shuffleIcon from '@/assets/images/icons/shuffle.svg';

	import { AvatarStore } from '@/stores/avatar';
	import { getRandomAvatar } from '@/utils/avatar';

	import { LanguageStore } from '@/stores/language';

	function onRandomClick() {
		AvatarStore.update(() => getRandomAvatar());
	}
</script>

<button
	class={'relative flex justify-center items-center w-fit h-fit gap-3 px-4 py-2 cursor-pointer hover:scale-105 active:scale-y-95 active:scale-x-90 active:opacity-90 transition-all duration-100'}
	on:click={onRandomClick}
>
	<img class="w-7 h-7" src={shuffleIcon} alt="Shuffle Icon" />
	<h1 class="text-xl font-fuzzy font-bold leading-none mt-1">
		{getLangField($LanguageStore, 'random.label')}
	</h1>
</button>
