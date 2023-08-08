/**
 * Common types
 */
import { IQueries } from "."

export interface IHomePageComponentProps {
  params: { slug: string }
  searchParams: IQueries
}