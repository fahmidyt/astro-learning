import { defineConfig } from "astro/config";

import icon from "astro-icon";
import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), tailwind(), icon()]
});