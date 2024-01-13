<script lang="ts">
	import Header from '@/components/Header.svelte';
	import Title from '@/components/Title.svelte';
	import Avatar from '@/components/Avatar.svelte';
	import DesktopControls from '@/components/DesktopControls.svelte';
	import MobileControls from '@/components/MobileControls.svelte';
	import Random from '@/components/Random.svelte';
	import Background from '@/components/Background.svelte';
</script>

<slot>
	<Header />
	<Title />
	<main class="flex flex-col xs:flex-1 items-center justify-start sm:justify-center w-auto h-fit gap-9 sm:gap-12">
		<div
			class="flex flex-col lg:grid grid-cols-3 grid-areas-[main-left_main-center_main-right] items-center justify-start sm:justify-center w-full h-fit gap-7 xs:gap-9 lg:gap-12"
		>
			<Avatar />
			<MobileControls />
			<DesktopControls />
		</div>
		<Random />
	</main>
	<Background />
</slot>
