import { IQueries, IResponsedCard } from 'types'
import { apiVersion, baseURL, cache } from '../config'
import { applyQueries, serializeQueries } from '../utils'
import { sleep } from '@/utils'

const ENDPOINT = 'cards'

/**
 * Get all cards names that wildcard matches the given name
 * 
 * @param name 
 * @returns Promise<[{ name: string }]>
 */
export const getNames = async (name: string): Promise<[{ name: string }]> => {
  const url = new URL(`${baseURL}/${ENDPOINT}`)
  url.pathname = `/${apiVersion}/${ENDPOINT}`
  applyQueries(url, {
    q: serializeQueries({ name }),
    page: 1,
    pageSize: 6,
    select: 'name'
  })

  
  const response = await fetch(url.toString(), { cache })
  const data = (await response.json()).data
  return data
}

/**
 * Format the responsed card (not an Api fectch function)
 * 
 * @param card 
 * @returns 
 */
export const formatCard = (card: IResponsedCard) => {
  const { name, rarity, images, cardmarket, set } = card
  return {
    name,
    rarity: rarity ? rarity : '',
    stockLeft: set?.total || 0,
    // This is a fallback for priceless cards
    // I won't do that in a real project tho xD
    price: cardmarket?.prices?.averageSellPrice || 0,
    imgSrc: images.small,
  }
} 

interface IResponsedPokemonCard {
  data: IResponsedCard[],
  page: number,
  pageSize: number,
  totalCount: number,
}

/**
 * Get all cards that matches the given queries
 * 
 * @param IQueries queries
 * @returns Promise<IResponsedPokemonCard>
 */
export const get = async ({ page, ...queries }: IQueries): Promise<IResponsedPokemonCard> => {
  // await sleep(100000) // debug
  const url = new URL(`${baseURL}/${ENDPOINT}`)
  url.pathname = `/${apiVersion}/${ENDPOINT}`
  applyQueries(url, {
    q: serializeQueries(queries),
    page,
    pageSize: 6,
    select: 'id,name,images,cardmarket,rarity,set,count,totalCount'
  })

  console.log('URL:', url.toString())
  const response = await fetch(url.toString(), { cache })
  const responsedJson = (await response.json())
  return {
    data: responsedJson.data as IResponsedCard[],
    page: responsedJson.page,
    pageSize: responsedJson.pageSize,
    totalCount: responsedJson.totalCount,
  }
}