export async function onRequestGet() {
  return Response.json({
    msg: "✅ Pages Functions 接口正常",
    time: new Date().toLocaleString()
  })
}
