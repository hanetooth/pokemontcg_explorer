import { serializeQueries } from '@/data/Pokemon/Api/utils';
import { IQueries } from '@/types';
import { usePathname ,useRouter, useSearchParams } from 'next/navigation'

/**
 * Custom hook for filtering (Routing Page with applied queries)
 * 
 * @returns { filter: ({ page, ...queries }: IQueries) => void }
 */
export default function useFilter() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams();

  const urlSearchParams = new URLSearchParams(searchParams.toString())

  return {
    filter: ({ page, ...queries }: IQueries) => {
      const newQueryStr = serializeQueries(queries)
      urlSearchParams.set('q', `${newQueryStr}`)
      urlSearchParams.set('page', `${1}`)
      router.push(`${pathname}?${urlSearchParams.toString()}`)
    }
  }
}