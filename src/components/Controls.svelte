<script lang="ts">
	import { cn } from '@/utils/tw';

	export let className = '';
	export let direction = 'left';
</script>

<section
	class={cn(
		'hidden lg:flex flex-1 flex-col justify-center w-full h-full gap-6 sm:odd:[&>*]:-mx-6 data-[direction=left]:items-end data-[direction=right]:items-start pb-12',
		className,
	)}
	data-direction={direction}
>
	<slot />
</section>
