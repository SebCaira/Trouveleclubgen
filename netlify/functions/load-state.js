// netlify/functions/load-state.js
// Récupère le state d'un utilisateur depuis Netlify Blobs.
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

  const { code } = body || {};

  if (!code || typeof code !== "string") {
    return new Response("Missing code", { status: 400 });
  }

  // Validation : le code doit être dans la liste autorisée
  const validCodes = (process.env.VALID_CODES || "").split(",").map(s => s.trim()).filter(Boolean);
  if (!validCodes.includes(code.toUpperCase())) {
    return new Response("Invalid code", { status: 401 });
  }

  const store = getStore("trouve-equipe-states");
  const data = await store.get(code.toUpperCase(), { type: "json" });

  // Si pas encore de state (premier login avec ce code), retourne null
  return new Response(JSON.stringify({
    state: data ? data.state : null,
    updatedAt: data ? data.updatedAt : null,
  }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
