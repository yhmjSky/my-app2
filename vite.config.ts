import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import wasm from 'vite-plugin-wasm';
import topLevelAwait from 'vite-plugin-top-level-await'

export default defineConfig({
	plugins: [sveltekit(), wasm(), topLevelAwait({
		promiseExportName: '__tla',
		promiseImportName: i => `__tla_${i}`
	})],

	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
