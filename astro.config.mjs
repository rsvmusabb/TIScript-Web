// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'TIScriptBE Portal',
			description: 'Portal dokumentasi script automasi & bot — Neural WA Bot dan lainnya.',
			logo: {
				src: './src/assets/logo.svg',
				alt: 'Logo TIScriptBE Portal',
			},
			favicon: '/favicon.svg',
			customCss: ['./src/styles/custom.css'],
			editLink: {
				baseUrl: 'https://github.com/rsvmusabb/TIScript-Web/edit/main/',
			},
			lastUpdated: true,
			components: {
				Footer: './src/components/Footer.astro',
			},
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
