# Piper.js

## Area-based image sizing with JS

This is an attempt at resizing logos with JS based on [Piper Haywoods]'s formula. The benefits of this approach vs. a max-width/max-height one are shown in [Nick Sherman]'s demo. The actual logos for this demo come from [Gil Barbara].

I also have looked at the proportional image normalization formula shown in this [Pen](https://codepen.io/danpaquette/pen/jXpbQK) by Dan Paquette, but I thought that Piper's one worked best for my needs (logos in very weird shapes).

Quick [Nextjs](https://tailwindcss.com/docs/guides/nextjs) wrap only for demo purposes.

Please feel free to improve this.

![Screenshot](https://raw.githubusercontent.com/anderland/piper.js/main/piper.png)

## Installation

You need [Node.js](https://nodejs.org/) to run the demo.

Install, build (to grab the data) & start the server.

```sh
cd piper.js
yarn install
yarn build
yarn develop
```

[piper haywoods]: https://piperhaywood.com/images-consistent-surface-area/
[gil barbara]: https://github.com/gilbarbara/logos
[nick sherman]: https://nicksherman.com/size-by-area/
