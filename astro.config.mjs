// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'TIScriptBE Portal',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/rsvmusabb/TIScript-Web' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Neural WA Bot', slug: 'guides/wabot' },
					],
				},
			],
		}),
	],
});
