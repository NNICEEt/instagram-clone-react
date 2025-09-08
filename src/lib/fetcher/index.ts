type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

async function fetcher<T>(
  url: string,
  method: HttpMethod = 'GET',
  body?: unknown,
): Promise<T> {
  const options: RequestInit = { method, headers: {} }

  if (body !== undefined) {
    if (body instanceof FormData) {
      options.body = body
    } else {
      options.headers = { 'Content-Type': 'application/json' }
      options.body = JSON.stringify(body)
    }
  }

  const res = await fetch(url, options)

  if (!res.ok) {
    throw new Error(`HTTP ${res.status}: ${res.statusText}`)
  }

  return res.json() as Promise<T>
}

// shorthand methods
export const httpClient = {
  get: <T>(url: string) => fetcher<T>(url, 'GET'),
  post: <T>(url: string, body?: unknown) => fetcher<T>(url, 'POST', body),
  put: <T>(url: string, body?: unknown) => fetcher<T>(url, 'PUT', body),
  patch: <T>(url: string, body?: unknown) => fetcher<T>(url, 'PATCH', body),
  delete: <T>(url: string, body?: unknown) => fetcher<T>(url, 'DELETE', body),
}
