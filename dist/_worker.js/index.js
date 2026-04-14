globalThis.process ??= {}; globalThis.process.env ??= {};
import { r as renderers } from './chunks/_@astro-renderers_B7eOfWy9.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_B4-lpxh3.mjs';
import { manifest } from './manifest_CMgI-fL1.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image/index.astro.mjs');
const _page1 = () => import('./pages/api/keystatic/_---params_.astro.mjs');
const _page2 = () => import('./pages/articles.astro.mjs');
const _page3 = () => import('./pages/buildyourvoice.astro.mjs');
const _page4 = () => import('./pages/cgu.astro.mjs');
const _page5 = () => import('./pages/cgv.astro.mjs');
const _page6 = () => import('./pages/contact.astro.mjs');
const _page7 = () => import('./pages/equipe.astro.mjs');
const _page8 = () => import('./pages/guide-n8n-rag-elevenlabs.astro.mjs');
const _page9 = () => import('./pages/guide-vapi.astro.mjs');
const _page10 = () => import('./pages/guides.astro.mjs');
const _page11 = () => import('./pages/keystatic/_---params_.astro.mjs');
const _page12 = () => import('./pages/mentions-legales.astro.mjs');
const _page13 = () => import('./pages/nos-projets.astro.mjs');
const _page14 = () => import('./pages/politique-de-confidentialite.astro.mjs');
const _page15 = () => import('./pages/politique-de-cookies.astro.mjs');
const _page16 = () => import('./pages/ressources.astro.mjs');
const _page17 = () => import('./pages/tarifs.astro.mjs');
const _page18 = () => import('./pages/index.astro.mjs');
const _page19 = () => import('./pages/_---slug_.astro.mjs');
const pageMap = new Map([
    ["node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint.js", _page0],
    ["node_modules/@keystatic/astro/internal/keystatic-api.js", _page1],
    ["src/pages/articles.astro", _page2],
    ["src/pages/buildyourvoice.astro", _page3],
    ["src/pages/cgu.astro", _page4],
    ["src/pages/cgv.astro", _page5],
    ["src/pages/contact.astro", _page6],
    ["src/pages/equipe.astro", _page7],
    ["src/pages/guide-n8n-rag-elevenlabs.astro", _page8],
    ["src/pages/guide-vapi.astro", _page9],
    ["src/pages/guides.astro", _page10],
    ["node_modules/@keystatic/astro/internal/keystatic-astro-page.astro", _page11],
    ["src/pages/mentions-legales.astro", _page12],
    ["src/pages/nos-projets.astro", _page13],
    ["src/pages/politique-de-confidentialite.astro", _page14],
    ["src/pages/politique-de-cookies.astro", _page15],
    ["src/pages/ressources.astro", _page16],
    ["src/pages/tarifs.astro", _page17],
    ["src/pages/index.astro", _page18],
    ["src/pages/[...slug].astro", _page19]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = undefined;
const _exports = createExports(_manifest);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
