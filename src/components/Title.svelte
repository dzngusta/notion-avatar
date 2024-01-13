<script lang="ts">
	import { getLangField } from '@/utils/lang';

	import { LanguageStore } from '@/stores/language';
</script>

<h1 class="font-fuzzy text-4xl leading-tight text-center">
	{@html getLangField($LanguageStore, 'title')}
</h1>
