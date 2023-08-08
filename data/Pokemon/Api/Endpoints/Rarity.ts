import { baseURL, apiVersion, cache } from '../config'

const ENDPOINT = 'rarities'

/**
 * Get all rarities
 * 
 * @returns Promise<string[]>
 */
export const getAll = async (): Promise<string[]> => {
  const url = new URL(`${baseURL}/${ENDPOINT}`)
  url.pathname = `/${apiVersion}/${ENDPOINT}`

  const response = await fetch(url.toString(), { cache })
  const data = (await response.json()).data
  return data
}