import { baseURL, apiVersion, cache } from '../config'

const ENDPOINT = 'sets'

/**
 * Get all sets
 * 
 * @returns Promise<string[]>
 */
export const getAll = async (): Promise<string[]> => {
  const url = new URL(`${baseURL}/${ENDPOINT}`)
  url.pathname = `/${apiVersion}/${ENDPOINT}`
  url.searchParams.set('select', 'name')

  const response = await fetch(url.toString(), { cache })
  const data = (await response.json()).data as { name: string }[]
  return data.map(set => set.name)
}