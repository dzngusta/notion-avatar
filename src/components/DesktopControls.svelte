<script lang="ts">
	import Selector from '@/components/Selector.svelte';
	import Controls from '@/components/Controls.svelte';
</script>

<Controls className={'grid-in-[main-left]'} direction={'left'}>
	<Selector type={'hair'} />
	<Selector type={'eyes'} />
	<Selector type={'mouth'} />
</Controls>

<Controls direction={'right'}>
	<Selector type={'head'} />
	<Selector type={'outfit'} />
	<Selector type={'accesories'} />
</Controls>
