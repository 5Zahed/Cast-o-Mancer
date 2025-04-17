export const dynamic = "force-dynamic";

export async function POST() {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://cast-o-mancer.vercel.app/backgroun.png" />
        <meta property="fc:frame:button:1" content="Cast Again" />
        <meta property="fc:frame:post_url" content="https://cast-o-mancer.vercel.app/api/frame" />
      </head>
      <body>cast updated.</body>
    </html>
  `;

  return new Response(html, {
    status: 200,
    headers: { "Content-Type": "text/html" },
  });
}
