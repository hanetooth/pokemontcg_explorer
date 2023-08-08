const  baseURL = process.env.NEXT_PUBLIC_API_URL
const  apiVersion = process.env.NEXT_PUBLIC_API_VERSION
const  cache = process.env.NODE_ENV === 'production' ? 'force-cache' : 'no-store'

export {
  baseURL,
  apiVersion,
  cache
}