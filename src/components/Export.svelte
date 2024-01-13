<script lang="ts">
	import html2canvas from 'html2canvas';

	import downloadIcon from '@/assets/images/icons/download.svg';

	import { getLangField } from '@/utils/lang';

	import { LanguageStore } from '@/stores/language';

	const onExport = () => {
		html2canvas(document.querySelector('#avatar')!).then((canvas) => {
			canvas.toBlob(function (blob) {
				if (!blob) return;

				var url = URL.createObjectURL(blob);

				const link = document.createElement('a');
				link.href = url;
				link.download = 'avatar.png';

				link.click();

				URL.revokeObjectURL(url);
			});
		});
	};
</script>

<button
	class="flex gap-2 items-center justify-center w-fit h-11 sm:h-12 bg-zinc-900 px-3 xs:px-6 py-2 rounded-2xl hover:scale-105 hover:brightness-110 active:scale-95 active:brightness-90 transition-all duration-100"
	on:click={onExport}
>
	<img class="block xs:hidden w-6 h-6" src={downloadIcon} alt="Download Icon" />
	<span class="hidden xs:block text-white font-fuzzy text-lg font-bold leading-none mt-0.5">
		{getLangField($LanguageStore, 'header.export')}
	</span>
</button>
