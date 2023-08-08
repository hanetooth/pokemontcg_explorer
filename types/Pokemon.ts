/**
 * Pokemon types
 */

export interface IQueries {
  name?: string | null
  type?: string | null
  rarity?: string | null
  set?: string | null
  page?: string | null
  q?: string | null
}

export interface IisQueryingContext {
  isQuerying: boolean,
  setIsQuerying: React.Dispatch<React.SetStateAction<boolean>>
}

export interface ISelectedCardsContext {
  selectedCards: ISelectedCards,
  setSelectedCards: React.Dispatch<React.SetStateAction<ISelectedCards>>
}

export interface ITypes extends Array<string> {}

export interface ICard {
  name: string;
  rarity: string;
  stockLeft: number;
  price: number;
  imgSrc: string;
}

export type ICards = Map<string, ICard>

export interface ISelectedCard extends ICard {
  quantity: number;
}

export type ISelectedCards = Map<string, ISelectedCard>

export interface IResponsedCard {
  id: string;
  name: string;
  set: {
    id: string;
    name: string;
    series: string;
    printedTotal: number;
    total: number;
    legalities: {
      unlimited: string;
    };
    ptcgoCode: string;
    releaseDate: string;
    updatedAt: string;
    images: {
      symbol: string;
      logo: string;
    };
  };
  rarity: string;
  images: {
    small: string;
    large: string;
  };
  cardmarket: {
    url: string;
    updatedAt: string;
    prices: {
      averageSellPrice: number;
      lowPrice: number;
      trendPrice: number;
      germanProLow: number;
      suggestedPrice: number;
      reverseHoloSell: number;
      reverseHoloLow: number;
      reverseHoloTrend: number;
      lowPriceExPlus: number;
      avg1: number;
      avg7: number;
      avg30: number;
      reverseHoloAvg1: number;
      reverseHoloAvg7: number;
      reverseHoloAvg30: number;
    };
  };
}

export interface ISet {
  id: string;
  name: string;
}
