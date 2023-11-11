import sys

TEMPLATE_STRING = """import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import ViteYaml from "@modyfi/vite-plugin-yaml";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), ViteYaml()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  base: "%s"
});"""

if __name__ == "__main__":
  new_base = sys.argv[1]
  with open("vite.config.js", "w") as f:
    f.write(TEMPLATE_STRING % new_base)
