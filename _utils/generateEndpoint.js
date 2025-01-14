import UrlPattern from 'url-pattern'

export default function generateEndpoint(urlString, params = {}, query) {
  const pattern = new UrlPattern(urlString)
  const endpoint = pattern.stringify(params)
  return (query) ? `${endpoint}?query=${JSON.stringify(query)}` : endpoint
}
