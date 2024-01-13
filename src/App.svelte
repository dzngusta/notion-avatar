<script lang="ts">
	import Header from '@/components/Header.svelte';
	import Title from '@/components/Title.svelte';
	import Avatar from '@/components/Avatar.svelte';
	import Selector from '@/components/Selector.svelte';
	import Controls from '@/components/Controls.svelte';
	import Random from '@/components/Random.svelte';
	import Background from '@/components/Background.svelte';
	import Copyright from '@/components/Copyright.svelte';
</script>

<slot>
	<Header />
	<Title />
	<main class="flex flex-col flex-1 items-center justify-start w-full h-auto gap-9">
		<div class="flex items-center justify-center w-full gap-12">
			<Controls direction={'left'}>
				<Selector type={'hair'} />
				<Selector type={'eyes'} />
				<Selector type={'mouth'} />
			</Controls>
			<Avatar />
			<Controls direction={'right'}>
				<Selector type={'head'} />
				<Selector type={'outfit'} />
				<Selector type={'accesories'} />
			</Controls>
		</div>
		<Random />
	</main>
	<!-- <Copyright /> -->
	<Background />
</slot>
