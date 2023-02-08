# Piper.js

## Area-based image sizing with JS

his is an effort to resize logos using JavaScript based on [Piper Haywoods]'s formula. The superiority of this method compared to using a maximum width/maximum height approach is demonstrated in [Nick Sherman]'s demo. The logos used in the demo were sourced from [Gil Barbara].

I also considered the proportional image normalization formula presented in a [Pen](https://codepen.io/danpaquette/pen/jXpbQK) by Dan Paquette, but found that Piper's formula was more suitable for logos with unique and irregular shapes.

I am including both a JavaScript version and a React version using useState. 

Feel free to improve.


![Screenshot](https://raw.githubusercontent.com/anderland/piper.js/main/piper.png)

## Installation

You need [Node.js](https://nodejs.org/) to run the demo.

Install, build (to grab the data) & start the server.

```sh
cd piper.js
yarn install
yarn develop
```

[piper haywoods]: https://piperhaywood.com/images-consistent-surface-area/
[gil barbara]: https://github.com/gilbarbara/logos
[nick sherman]: https://nicksherman.com/size-by-area/
