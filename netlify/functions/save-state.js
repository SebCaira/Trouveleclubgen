// netlify/functions/save-state.js
// Sauvegarde du state d'un utilisateur dans Netlify Blobs.
// Authentification par code d'accès (env var VALID_CODES = "CODE1,CODE2,...").

import { getStore } from "@netlify/blobs";

export default async (req) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return new Response("Invalid JSON", { status: 400 });
  }

  const { code, state } = body || {};

  if (!code || typeof code !== "string") {
    return new Response("Missing code", { status: 400 });
  }

  // Validation : le code doit être dans la liste autorisée
  const validCodes = (process.env.VALID_CODES || "").split(",").map(s => s.trim()).filter(Boolean);
  if (!validCodes.includes(code.toUpperCase())) {
    return new Response("Invalid code", { status: 401 });
  }

  if (!state || typeof state !== "object") {
    return new Response("Missing state", { status: 400 });
  }

  // Stocke dans Netlify Blobs (un store dédié à Trouve l'Équipe)
  const store = getStore("trouve-equipe-states");
  await store.setJSON(code.toUpperCase(), {
    state,
    updatedAt: new Date().toISOString(),
  });

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
