import {
  NextRequest as Request,
  NextResponse as Response,
} from 'next/server'
import { PokemonCardModel as Model } from "@/data/Pokemon"

export async function GET(req: Request) {
  const name = new URL(req.url)
                        .searchParams
                        .get('name')
  const names = await Model.getNames(`${name}*` || '')
  const response: string[] = []
  names.forEach(({ name }) => {
    response.push(name)
  })
  return Response.json(response)
}