<script lang="ts">
	import { cn } from '@/utils/tw';

	import image from '@/assets/images/app-logo.svg';

	export let className: string;
</script>

<img class={cn('w-fit h-12', className)} src={image} alt="App Logo" />
