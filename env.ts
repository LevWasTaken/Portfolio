import { Schema, defineConfig } from '@julr/vite-plugin-validate-env'

export default defineConfig({
  VITE_MY_VAR: Schema.string.optional(),
})
