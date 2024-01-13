<script lang="ts">
	import background from '@/assets/images/avatar-background.svg';

	import type { AvatarTypes } from '@/config/avatar';
	import { AvatarStore } from '@/stores/avatar';

	let avatar: AvatarTypes;

	AvatarStore.subscribe((newAvatar) => (avatar = newAvatar));
</script>

<section
	class="relative grid grid-in-[main-center] flex-1 place-items-center w-full max-w-[30rem] lg:max-w-[35rem] bg-zinc-50 rounded-full overflow-hidden"
	id="avatar"
>
	<img class="avatar-preset" src={'/avatar/body.png'} alt="Avatar Body" />
	<img class="avatar-preset" src={`/avatar/outfit/${avatar.outfit}.png`} alt="Avatar Outfit" />
	<img class="avatar-preset" src={`/avatar/head/${avatar.head}.png`} alt="Avatar Head" />
	<img class="avatar-preset" src={`/avatar/mouth/${avatar.mouth}.png`} alt="Avatar Mouth" />
	<img class="avatar-preset" src={`/avatar/eyes/${avatar.eyes}.png`} alt="Avatar Eyes" />
	<img class="avatar-preset" src={`/avatar/hair/${avatar.hair}.png`} alt="Avatar Hair" />
	<img class="avatar-preset" src={`/avatar/accesories/${avatar.accesories}.png`} alt="Avatar Accesories" />
	<img class="relative w-full h-full z-10" src={background} alt="Avatar Circle Background" />
</section>

<style>
	.avatar-preset {
		position: absolute;
		width: 100%;
		height: auto;
		object-fit: contain;
		overflow: hidden;
		border-radius: 100%;
	}
</style>
