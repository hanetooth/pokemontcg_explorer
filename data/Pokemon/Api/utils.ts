import { IQueries } from "@/types"

/**
 * Apply given search parameters to the given URL
 * 
 * @param URL url
 * @param Record<string, any> obj
 */
export function applyQueries({ searchParams }: URL, obj: Record<string, any>) {
  Object.entries(obj).map(([key, value]) => {
    if (value) searchParams.append(key, value)
  })
}

/**
 * Serialize queries to a search paramerter string
 * 
 * @param IQueries queries 
 * 
 * @returns string
 * @example q=name:"charizard" types:"fire" rarity:"rare" set.name:"base1"
 */
export function serializeQueries(queries: IQueries): string {
  if (queries.q ) return queries.q

  let query = ''

  // Don't have to use wildcard 
  // since user chose full values in dropdown
  if (queries.name) query += `name:"${queries.name}"`
  if (queries.type) query += ` types:"${queries.type}"`
  if (queries.rarity) query += ` rarity:"${queries.rarity}"`
  if (queries.set) query += ` set.name:"${queries.set}"`

  return query.trim()
}

/**
 * Deserialize queries from a search parameter string
 * 
 * @param query string
 * @returns IQueries
 */
export function deserializeQueries(query: string): IQueries {
  const queries: IQueries = {}

  // Check and parse "EACH" value from query string
  if (query.startsWith('name:')) {
    queries.name = query.match(/name:"(.*?)"/)?.[1] || ''
  }

  if (query.includes('types:')) {
    queries.type = query.match(/types:"(.*?)"/)?.[1] || ''
  }

  if (query.includes('rarity:')) {
    queries.rarity = query.match(/rarity:"(.*?)"/)?.[1] || ''
  }

  if (query.includes('set.name:')) {
    queries.set = query.match(/set.name:"(.*?)"/)?.[1] || ''
  }
  
  return queries
}