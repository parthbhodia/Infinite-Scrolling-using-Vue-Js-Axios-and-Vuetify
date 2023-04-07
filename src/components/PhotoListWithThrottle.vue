<template>
	<v-container>
		<v-row>
			<v-col>
				<h1>Random Photos Generator</h1>
			</v-col>
		</v-row>
		<v-row>
			<v-col v-for="(photo, index) in photos" :key="index" cols="12" md="4">
				<v-card>
					<v-img :src="photo.download_url" height="200px"></v-img>
					<v-card-title>{{ photo.author }}</v-card-title>
				</v-card>
			</v-col>
		</v-row>
		<v-row v-if="loading">
			<v-col class="text-center">
				<v-progress-circular
					indeterminate
					color="primary"
				></v-progress-circular>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import axios from "axios";
import { throttle } from "lodash";
/* In the case of infinite scrolling, adding a throttle can be especially helpful. 
Without a throttle, the event handler may be called multiple times in quick succession as the user scrolls, resulting in a flood of requests. By adding a throttle, you can limit the rate at which requests are sent, which can help to prevent this kind of flooding and ensure that the user's experience is smooth and fast.
*/
export default {
	name: "NewsList",
	data() {
		return {
			photos: [],
			page: 1,
			loading: false,
			throttleLoadMore: throttle(this.loadMore, 500),
		};
	},
	mounted() {
		this.fetchPhotos();
		window.addEventListener("scroll", this.handleScroll);
	},
	destroyed() {
		window.removeEventListener("scroll", this.handleScroll);
	},
	methods: {
		fetchPhotos() {
			this.loading = true;
			axios
				.get(`https://picsum.photos/v2/list?page=${this.page}&limit=12`)
				.then((response) => {
					this.loading = false;
					this.photos = [...this.photos, ...response.data];
					this.page++;
				})
				.catch((error) => {
					console.log(error);
					this.loading = false;
				});
		},
		handleScroll() {
			const bottomOfWindow =
				document.documentElement.scrollTop + window.innerHeight ===
				document.documentElement.offsetHeight;
			if (bottomOfWindow && !this.loading) {
				this.throttleLoadMore();
			}
		},
		loadMore() {
			this.fetchPhotos();
		},
	},
};
</script>
