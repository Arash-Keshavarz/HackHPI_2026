const BACKEND_URL = 'http://localhost:8000'





export async function getBackendTestMessage() {
  const res = await fetch(`${BACKEND_URL}/test`)

  if (!res.ok) {
    throw new Error(`Request failed with status ${res.status}`)
  }

  const data = await res.json()
  return data.message
}
