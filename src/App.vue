<template>
	<v-app>
		<photos-list />
	</v-app>
</template>

<script>
import PhotosList from "@/components/PhotoListWithThrottle.vue";
export default {
	name: "App",
	components: {
		// HelloWorld
		PhotosList,
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
