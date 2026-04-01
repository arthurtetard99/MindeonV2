import { makeGenericAPIRouteHandler } from '@keystatic/core/api/generic';
import { parseString } from 'set-cookie-parser';
import { config as config$1, collection, fields } from '@keystatic/core';
export { renderers } from '../../../renderers.mjs';

function makeHandler(_config) {
  return async function keystaticAPIRoute(context) {
    var _context$locals, _ref, _config$clientId, _ref2, _config$clientSecret, _ref3, _config$secret;
    const envVarsForCf = (_context$locals = context.locals) === null || _context$locals === void 0 || (_context$locals = _context$locals.runtime) === null || _context$locals === void 0 ? void 0 : _context$locals.env;
    const handler = makeGenericAPIRouteHandler({
      ..._config,
      clientId: (_ref = (_config$clientId = _config.clientId) !== null && _config$clientId !== void 0 ? _config$clientId : envVarsForCf === null || envVarsForCf === void 0 ? void 0 : envVarsForCf.KEYSTATIC_GITHUB_CLIENT_ID) !== null && _ref !== void 0 ? _ref : tryOrUndefined(() => {
        return undefined                                          ;
      }),
      clientSecret: (_ref2 = (_config$clientSecret = _config.clientSecret) !== null && _config$clientSecret !== void 0 ? _config$clientSecret : envVarsForCf === null || envVarsForCf === void 0 ? void 0 : envVarsForCf.KEYSTATIC_GITHUB_CLIENT_SECRET) !== null && _ref2 !== void 0 ? _ref2 : tryOrUndefined(() => {
        return undefined                                              ;
      }),
      secret: (_ref3 = (_config$secret = _config.secret) !== null && _config$secret !== void 0 ? _config$secret : envVarsForCf === null || envVarsForCf === void 0 ? void 0 : envVarsForCf.KEYSTATIC_SECRET) !== null && _ref3 !== void 0 ? _ref3 : tryOrUndefined(() => {
        return undefined                                ;
      })
    }, {
      slugEnvName: "PUBLIC_KEYSTATIC_GITHUB_APP_SLUG"
    });
    const {
      body,
      headers,
      status
    } = await handler(context.request);
    let headersInADifferentStructure = /* @__PURE__ */ new Map();
    if (headers) {
      if (Array.isArray(headers)) {
        for (const [key, value] of headers) {
          if (!headersInADifferentStructure.has(key.toLowerCase())) {
            headersInADifferentStructure.set(key.toLowerCase(), []);
          }
          headersInADifferentStructure.get(key.toLowerCase()).push(value);
        }
      } else if (typeof headers.entries === "function") {
        for (const [key, value] of headers.entries()) {
          headersInADifferentStructure.set(key.toLowerCase(), [value]);
        }
        if ("getSetCookie" in headers && typeof headers.getSetCookie === "function") {
          const setCookieHeaders2 = headers.getSetCookie();
          if (setCookieHeaders2 !== null && setCookieHeaders2 !== void 0 && setCookieHeaders2.length) {
            headersInADifferentStructure.set("set-cookie", setCookieHeaders2);
          }
        }
      } else {
        for (const [key, value] of Object.entries(headers)) {
          headersInADifferentStructure.set(key.toLowerCase(), [value]);
        }
      }
    }
    const setCookieHeaders = headersInADifferentStructure.get("set-cookie");
    headersInADifferentStructure.delete("set-cookie");
    if (setCookieHeaders) {
      for (const setCookieValue of setCookieHeaders) {
        var _options$sameSite;
        const {
          name,
          value,
          ...options
        } = parseString(setCookieValue);
        const sameSite = (_options$sameSite = options.sameSite) === null || _options$sameSite === void 0 ? void 0 : _options$sameSite.toLowerCase();
        context.cookies.set(name, value, {
          domain: options.domain,
          expires: options.expires,
          httpOnly: options.httpOnly,
          maxAge: options.maxAge,
          path: options.path,
          sameSite: sameSite === "lax" || sameSite === "strict" || sameSite === "none" ? sameSite : void 0
        });
      }
    }
    return new Response(body, {
      status,
      headers: [...headersInADifferentStructure.entries()].flatMap(([key, val]) => val.map((x) => [key, x]))
    });
  };
}
function tryOrUndefined(fn) {
  try {
    return fn();
  } catch {
    return void 0;
  }
}

const isGitHub = process.env.KEYSTATIC_STORAGE_KIND === "github";
const config = config$1({
  storage: isGitHub ? {
    kind: "github",
    repo: {
      owner: process.env.KEYSTATIC_GITHUB_REPO_OWNER ?? "mindeon",
      name: process.env.KEYSTATIC_GITHUB_REPO_NAME ?? "mindeon-site"
    }
  } : { kind: "local" },
  ui: {
    brand: { name: "Mindeon CMS" }
  },
  collections: {
    // ─── Articles de blog ────────────────────────────────────────────────
    articles: collection({
      label: "Articles",
      slugField: "title",
      path: "src/content/articles/*",
      format: { contentField: "content" },
      entryLayout: "content",
      schema: {
        title: fields.slug({
          name: { label: "Titre" }
        }),
        description: fields.text({
          label: "Description (SEO)",
          description: "Résumé affiché dans Google et les prévisualisations. 150-160 caractères idéalement.",
          multiline: true,
          validation: { isRequired: true }
        }),
        date: fields.date({
          label: "Date de publication",
          defaultValue: { kind: "today" },
          validation: { isRequired: true }
        }),
        author: fields.text({
          label: "Auteur",
          defaultValue: "Mindeon.ai"
        }),
        tags: fields.array(
          fields.text({ label: "Tag" }),
          {
            label: "Tags",
            description: "Ex : IA, n8n, Automatisation, Comparatif",
            itemLabel: (props) => props.value
          }
        ),
        content: fields.markdownEditor({
          label: "Contenu de l'article",
          components: {}
        })
      }
    }),
    // ─── Projets / Cas clients ───────────────────────────────────────────
    projets: collection({
      label: "Projets",
      slugField: "title",
      path: "src/content/projets/*",
      format: { contentField: "content" },
      entryLayout: "content",
      schema: {
        title: fields.slug({
          name: { label: "Titre du projet" }
        }),
        description: fields.text({
          label: "Description (SEO)",
          multiline: true,
          validation: { isRequired: true }
        }),
        date: fields.date({
          label: "Date de livraison",
          defaultValue: { kind: "today" },
          validation: { isRequired: true }
        }),
        client: fields.text({
          label: "Nom du client"
        }),
        tags: fields.array(
          fields.text({ label: "Tag" }),
          {
            label: "Technologies utilisées",
            description: "Ex : Voice Bot, n8n, Claude, VAPI",
            itemLabel: (props) => props.value
          }
        ),
        featured: fields.checkbox({
          label: "Mettre en avant sur la homepage",
          defaultValue: false
        }),
        results: fields.array(
          fields.text({ label: "Résultat" }),
          {
            label: "Résultats clés",
            description: "Les metrics concrètes obtenues pour ce client.",
            itemLabel: (props) => props.value
          }
        ),
        content: fields.markdownEditor({
          label: "Description détaillée du projet",
          components: {}
        })
      }
    })
  }
});

const all = makeHandler({ config });
const ALL = all;

const prerender = false;

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  ALL,
  all,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
