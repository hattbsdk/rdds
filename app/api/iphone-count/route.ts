/**
 * /api/iphone-count — live ticket total for the /iphone draw page.
 *
 * Reads the "Public" tab of the draw's Google Sheet, published to the web as
 * CSV (totals only: tickets, customers, purchases — no customer data).
 * Set IPHONE_SHEET_CSV_URL in Vercel → Project → Settings → Environment
 * Variables. Until it is set, the page shows "Counting starts on 3 November".
 */

// Always run on request (no build-time prerender, which froze the count at 0).
export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  const url = process.env.IPHONE_SHEET_CSV_URL;
  if (!url) {
    return Response.json({ ready: false, tickets: null, customers: null });
  }

  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) throw new Error(`Sheet returned ${res.status}`);
    const text = await res.text();

    const data: Record<string, number> = {};
    for (const line of text.split(/\r?\n/)) {
      const [k, v] = line.split(",");
      if (k) data[k.trim().toLowerCase()] = Number(String(v ?? "").replace(/[^0-9.-]/g, "")) || 0;
    }

    return Response.json(
      { ready: true, tickets: data.tickets ?? 0, customers: data.customers ?? 0 },
      { headers: { "Cache-Control": "public, max-age=0, s-maxage=20, must-revalidate" } },
    );
  } catch {
    return Response.json({ ready: false, tickets: null, customers: null });
  }
}
