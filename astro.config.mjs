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
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/web3privacy' },
				{ icon: 'blueSky', label: 'Bluesky', href: 'https://bsky.app/profile/web3privacy.info' },
				{ icon: 'zulip', label: 'Commons', href: 'https://commons.w3pn.org/' }

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
				{ label: 'Introduction', slug: 'index' },
				{
					label: 'Our Foundation',
					items: [
						// Each item here is one entry in the navigation menu.
						{ slug: 'mission-vision' },
						{ slug: 'how-we-work' },
						{ slug: 'constitution' },
						{ slug: 'communication-channels' },
					],
				},
				{
					label: 'Governance',
					items: [
						{ slug: 'governance/proposals' },
						{ slug: 'governance/membership' },
						{ slug: 'governance/contributor-rewards' },
						{ slug: 'governance/stewards-conflict-resolution' },
					]
				},
				{
					label: 'Ecosystem',
					items: [
						{ slug: 'ecosystem/working-groups' },
						{ slug: 'ecosystem/recognized-projects' },
						{ slug: 'ecosystem/shared-infra-services' },
					]
				},
				/*{
					label: 'Contributor Guides',
					items: [
						{ label: 'Quickstart for Newcomers', slug: 'index' },
						{ label: 'Role-Based Guides', slug: 'index' },
					]
				}*/
			],
		}),
	],
});
