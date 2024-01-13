<script lang="ts">
	import arrowImage from '@/assets/images/input-arrow.svg';

	import { cn } from '@/utils/tw';

	export let className = '';
	export let direction = 'left';
	export let onClick: () => void;
</script>

<button
	on:click={onClick}
	class={cn(
		'w-auto h-6 p-1 cursor-pointer transition-all duration-200 hover:scale-110 active:scale-90 active:opacity-80',
		className,
	)}
>
	<img
		class={'w-auto h-full data-[direction=left]:scale-100 data-[direction=right]:-scale-100'}
		data-direction={direction}
		src={arrowImage}
		alt="Control Arrow"
	/>
</button>
