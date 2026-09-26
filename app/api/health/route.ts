export async function GET() {
  return Response.json({
    ok: true,
    service: 'MAVORA API',
    status: 'healthy',
    timestamp: new Date().toISOString(),
  });
}
