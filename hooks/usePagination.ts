import { usePathname ,useRouter, useSearchParams } from 'next/navigation'

type updatePageNumber = (pageNumber: number) => number

/**
 * Custom hook advanced pagination (Routing Page with increased page)
 * 
 * @param currentPageNumber number
 * @param pageNumberParam string | null
 * @returns { paginate: (updatePageNumber?: updatePageNumber) => void }
 */
export default function usePagination(currentPageNumber: number | null = null, pageNumberParam = 'page') {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams();

  const _currentPageNumber = currentPageNumber || Number(searchParams.get(pageNumberParam))
  const urlSearchParams = new URLSearchParams(searchParams.toString())

  return {
    paginate: (updatePageNumber?: updatePageNumber) => {
      const newPageNumber = updatePageNumber
        ? updatePageNumber(_currentPageNumber)
        : _currentPageNumber + 1
      urlSearchParams.set('page', `${newPageNumber}`)

      router.push(`${pathname}?${urlSearchParams.toString()}`)
    }
  }
}