/**
 * /api/iphone-count — live ticket total for the /iphone draw page.
 *
 * Reads the "Public" tab of the draw's Google Sheet, published to the web as
 * CSV (totals only: tickets, customers, purchases — no customer data).
 * Set IPHONE_SHEET_CSV_URL in Vercel → Project → Settings → Environment
 * Variables. Until it is set, the page shows "Counting starts on 1 November".
 */

export const revalidate = 60;

export async function GET() {
  const url = process.env.IPHONE_SHEET_CSV_URL;
  if (!url) {
    return Response.json({ ready: false, tickets: null, customers: null });
  }

  try {
    const res = await fetch(url, { next: { revalidate: 60 } });
    if (!res.ok) throw new Error(`Sheet returned ${res.status}`);
    const text = await res.text();

    const data: Record<string, number> = {};
    for (const line of text.split(/\r?\n/)) {
      const [k, v] = line.split(",");
      if (k) data[k.trim().toLowerCase()] = Number(String(v ?? "").replace(/[^0-9.-]/g, "")) || 0;
    }

    return Response.json(
      { ready: true, tickets: data.tickets ?? 0, customers: data.customers ?? 0 },
      { headers: { "Cache-Control": "s-maxage=60, stale-while-revalidate=300" } },
    );
  } catch {
    return Response.json({ ready: false, tickets: null, customers: null });
  }
}
