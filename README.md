## Five Night's At Candy 2 - Web

### 🚧 Work in progress...

A web version of [Five Nights At Candy's 2](https://gamejolt.com/games/five-nights-at-candy-s-2-official/110234), created by [Emilmacko](https://gamejolt.com/@Emilmacko), a fan game based on [FNAF](https://freddy-fazbears-pizza.fandom.com/wiki/Five_Nights_at_Freddy%27s_(Franchise)) series.

- Assets dumped using [CTFAK](https://github.com/CTFAK/CTFAK2.0)
- APNG assembled using [APNG Assembler](https://apngasm.sourceforge.net/)
- Created with Svelte(Kit).
- Minigames is removed.

Play it [here](https://fnac2.choomai.lol). This website is hosted on my PC, so don't expect it to be online all the time (`429 Too Many Request` will be return when my PC isn't online).

I will deploy on Github Pages when it is done.

---

You can clone this repo and run it locally.

Switch adapter in `svelte.config.js` first:

```javascript
import adapter from "@sveltejs/adapter-auto";
// import IISAdapter from "sveltekit-adapter-iis";
```

```javascript
// ...
const config = {
    kit: {
        adapter: adapter()
        // adapter: IISAdapter()
    }
}
// ...
```

After that, run this:

```bash
# Install dependencies first
npm install

npm run dev -- --open

# Run this if you have lag issue.
# I don't really know what's the difference...
# Comment out 
npm run build
npm run preview -- --open
```