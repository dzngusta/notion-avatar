<script lang="ts">
	import html2canvas from 'html2canvas';

	import { getLangField } from '@/utils/lang';

	import { DownloadStore } from '@/stores/download';
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
	class="w-fit h-12 bg-zinc-900 text-white font-fuzzy text-lg font-bold leading-none px-6 py-2 rounded-2xl hover:scale-105 hover:brightness-110 active:scale-95 active:brightness-90 transition-all duration-100"
	on:click={onExport}
>
	{getLangField($LanguageStore, 'header.export')}
</button>
