<template>
	<v-container>
		<v-row>
			<v-col>
				<h1>Random Photos Generator</h1>
			</v-col>
		</v-row>
		<v-row>
			<v-col v-for="photo in photos" :key="photo.id">
				<v-card>
					<v-card-title>{{ photo.author }}</v-card-title>
					<v-img :src="photo.download_url"></v-img>
				</v-card>
			</v-col>
		</v-row>
		<v-row v-if="loading">
			<v-col>
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

export default {
	name: "PhotosList",
	data() {
		return {
			photos: [],
			loading: false,
			page: 1,
			limit: 10,
		};
	},
	methods: {
		fetchPhotos() {
			this.loading = true;
			axios
				.get(
					`https://picsum.photos/v2/list?page=${this.page}&limit=${this.limit}`
				)
				.then((response) => {
					this.photos = [...this.photos, ...response.data];
					this.page++;
					this.loading = false;
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
			if (bottomOfWindow) {
				this.loadMore();
			}
		},

		loadMore() {
			console.log("scrolling called");
			if (!this.loading) {
				this.fetchPhotos();
			}
		},
	},
	mounted() {
		window.addEventListener("scroll", this.handleScroll);

		this.fetchPhotos();
	},
	beforeDestroy() {
		window.removeEventListener("scroll", this.handleScroll);
	},
};
</script>
