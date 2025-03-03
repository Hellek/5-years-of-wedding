<template>
	<css-doodle style="position: absolute; left: 0; right: 0; top: 0; bottom: 0;">
		:doodle {
		@grid:15 / 100%;
		width:100vw;
		height:100vh;
		}
		/*snowing cats and dogs*/
		:after {
		content:@p(🕊️,❤️,🥂,💕);
		}
		/*and some barnyard friends*/
		@random(.12) {
		:after {
		content:@p(👰,💐,💘,🎉,🔥,🍬,🍼);
		}
		}

		font-size:@p(1.5vmin, 2vmin, 1.05em);
		text-shadow:2px 2px white;
		animation: snow @r(8s, 25s) infinite linear;
		@random(.3) { animation: snow @r(15s, 30s) infinite linear;
		font-size:@p(1.2vmin, 2vmin, 1.0em);
		}
		@random(.05) { animation: snow @r(7s, 17s) infinite linear;
		font-size:@p(0.8em,0.7vmin);
		}
		will-change:transform;
		@keyframes snow {
		0% {
		transform: translateY(-200vh) translateX(@r(-10px, 10px));
		}
		100% {
		transform:translateY(100vh) translateX(calc(.1*@index()*@p(-2vmin,2vmin))) rotate(@r(-720deg, 720deg));
		}
		}
	</css-doodle>
</template>

<script>
import 'css-doodle'

export default {
	name: 'MyDoodle',
}
</script>