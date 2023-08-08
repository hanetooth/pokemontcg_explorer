import { CardList } from '@/components'
import {
  PokemonCardModel
} from '@/data/Pokemon'
import { IHomePageComponentProps } from 'types'

export default async function Home({ params, searchParams }: IHomePageComponentProps) {
  const {
    data: responsedPokemonCards,
    page,
    pageSize,
    totalCount
  } = await PokemonCardModel.get(searchParams)

  const pokemonCards = new Map();
  responsedPokemonCards.forEach((card) => {
    pokemonCards.set(card.id, PokemonCardModel.formatCard(card))
  })

  return (
    <CardList
      cards={pokemonCards}
      page={page}
      pageSize={pageSize}
      totalCount={totalCount}
    />
  );
}
