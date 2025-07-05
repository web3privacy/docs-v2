// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.w3pn.org',
	integrations: [
		starlight({
			title: 'Web3Privacy Now Docs',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/web3privacy' }
			],
			logo: {
				src: './public/logo.png',
				replacesTitle: true
			},
			editLink: {
				baseUrl: 'https://github.com/web3privacy/docs-v2/tree/main/',
			},
			lastUpdated: true,
			favicon: '/favicon.ico',
			customCss: [
				'./src/styles/custom.css'
			],
			sidebar: [
				{
					label: 'Introduction',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Welcome', slug: 'index' },
					],
				},
			],
		}),
	],
});
