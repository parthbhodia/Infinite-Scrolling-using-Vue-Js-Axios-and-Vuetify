# Vue.js Photo Gallery with Infinite Scrolling and Throttling

This is a simple Vue.js photo gallery app that displays photos from the Picsum Photos API. The app features infinite scrolling, where new photos are loaded automatically as the user scrolls down the page, and throttling to limit the frequency of API requests.

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Usage

The app displays a grid of photos retrieved from the Picsum Photos API. As the user scrolls down the page, new photos are loaded automatically. The frequency of API requests is limited using throttling, which is set to 500ms by default.

### Configuration

The app is configured using the PhotoList component file located in the src directory. This file contains the following options:

perPage: The number of photos to retrieve per API request. Defaults to 10.
throttleDelay: The delay in milliseconds between API requests. Defaults to 500ms.

### Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
