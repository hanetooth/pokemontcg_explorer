import {
  NextRequest as Request,
  NextResponse as Response,
} from 'next/server'
import { PokemonRarityModel as Model } from "@/data/Pokemon"

export async function GET(req: Request) {
  return Response.json(
    await Model.getAll()
  )
}