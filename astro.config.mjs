import { defineConfig } from "astro/config";

import icon from "astro-icon";
import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";

import netlify from '@astrojs/netlify'

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), tailwind(), icon()],
  output: 'hybrid',
  adapter: netlify(),
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp"
    }
  }
});