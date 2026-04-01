globalThis.process ??= {}; globalThis.process.env ??= {};
import './chunks/astro-designed-error-pages_CYbuyuQi.mjs';
import './chunks/astro/server_BQHVNumA.mjs';
import { s as sequence } from './chunks/index_BGZEzd3K.mjs';

const onRequest$1 = (context, next) => {
  if (context.isPrerendered) {
    context.locals.runtime ??= {
      env: process.env
    };
  }
  return next();
};

const onRequest = sequence(
	onRequest$1,
	
	
);

export { onRequest };
