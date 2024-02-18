import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const name = data.get("name");
  const image = data.get("image");
  if (!name || !image ) {
    return new Response(
      JSON.stringify({
        message: "Faltan campos requeridos",
      }),
      { status: 400 }
    );
  }
  return new Response(
    JSON.stringify({
      message: "¡Éxito!"
    }),
    { status: 200 }
  );
};