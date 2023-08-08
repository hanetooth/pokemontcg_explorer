'use client'

import {
  Alert,
  AutocompleteInputChangeReason,
  Grid,
  PopperProps,
  Snackbar,
  TextField,
} from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { IQueries } from 'types'

import {
  StyledGridContainer,
  StyledPopper,
  StyledNameFilter,
  StyledRarityFilter,
  StyledSetFilter,
  StyledTypeFilter,
} from './StyledComponents'

import { deserializeQueries } from '@/data/Pokemon/Api/utils'
import { useFilter } from '@/hooks'
import { ArrowDropdownIcon } from '@/icons'
import { useSearchParams } from 'next/navigation'
import { QueryStateContext } from '@/contexts'

const fetchTypes = async (): Promise<Set<string>> => {
  const response = await fetch('/api/pokemons/types')
  const data = await response.json()
  return new Set(data)
}

const fetchRarities = async (): Promise<Set<string>> => {
  const response = await fetch('/api/pokemons/rarities')
  const data = await response.json()
  return new Set(data)
}

const fetchSets = async (): Promise<Set<string>> => {
  const response = await fetch('/api/pokemons/sets')
  const data = await response.json()
  return new Set(data)
}

function WidePopper(props: PopperProps) {
  return <StyledPopper {...props} placement="bottom-start" />;
};

export default function Filter() {
  const { filter } = useFilter()

  const [ queries, setQueries ] = useState(
    deserializeQueries(useSearchParams().get('q') || '')
  )
  const { isQuerying, setIsQuerying } = useContext(QueryStateContext)

  const [ isErrDialogOpened, setIsErrDialogOpened ] = useState(false)
  const [ isFetchingOptions, setIsFetchingOptions ] = useState(false)

  // use Set to prevent name duplication
  const [ names, setNames ] = useState<Set<string>>(new Set())
  const [ types, setTypes ] = useState<Set<string>>(new Set())
  const [ rarities, setRarities ] = useState<Set<string>>(new Set())
  const [ sets, setSets ] = useState<Set<string>>(new Set())

  useEffect(() => {
    // Asynchronously fetch filter options on page load
    catchDataFetchError(async () => {
      await fetchTypes().then((types) => { setTypes(types) })
      await fetchRarities().then((rarities) => { setRarities(rarities) })
      await fetchSets().then((sets) => { setSets(sets) })
      setIsFetchingOptions(false)
    })
  }, [])

  useEffect(() => {
    if (isQuerying) {
      filter(queries)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ queries, isQuerying ])

  const catchDataFetchError = async (callback: () => Promise<void>) => {
    try {
      await callback()
    } catch (error) {
      setIsErrDialogOpened(true)
    }
  }

  const handleNameChange = (
    _: React.SyntheticEvent,
    newValue: unknown,
  ) => {
    console.log('handelNameChange')
    setIsQuerying(true)
    setQueries((prevQueries: IQueries) => {
      const newQueries = {
        ...prevQueries,
        name: (typeof newValue === 'string') ? newValue : null,
      }
      return newQueries
    })
  }

  const handleTypeChange = (_: React.SyntheticEvent, newValue: unknown) => {
    console.log('handelTypeChange')
    setIsQuerying(true)
    setQueries((prevQueries: IQueries) => {
      const newQueries = {
        ...prevQueries,
        type: (typeof newValue === 'string') ? newValue : null,
      }
      return newQueries
    })
  };

  const handleRarityChange = (_: React.SyntheticEvent, newValue: unknown) => {
    console.log('handelRarityChange')
    setIsQuerying(true)
    setQueries((prevQueries: IQueries) => {
      const newQueries = {
        ...prevQueries,
        rarity: (typeof newValue === 'string') ? newValue : null,
      }
      return newQueries
    })
  };

  const handleSetChange = (_: React.SyntheticEvent, newValue: unknown) => {
    console.log('handelSetChange')
    setIsQuerying(true)
    setQueries((prevQueries: IQueries) => {
      const newQueries = {
        ...prevQueries,
        set: (typeof newValue === 'string') ? newValue : null,
      }
      return newQueries
    })
  };

  const searchNames = async (
    _: React.SyntheticEvent,
    newValue: string | null,
    reason: AutocompleteInputChangeReason
  ) => {
    if (reason !== 'input') return

    if (newValue) {
      catchDataFetchError(async () => {
        setIsFetchingOptions(true)
        const response = await fetch(`/api/pokemons/cards?name=${newValue}`)
        const data = await response.json()
        setNames(new Set(data))
        setIsFetchingOptions(false)
      })
    }
  }

  const handleErrDialogClose = () => {
    setIsErrDialogOpened(false)
  }

  // duck taping for: https://stackoverflow.com/a/75968316/6887746
  const renderOption = (
    props: React.HTMLAttributes<HTMLLIElement>,
    option: unknown
  ) => {
    if (typeof option !== 'string') return
    return (
      <li {...props} key={option}>
        {option}
      </li>
    )
  }

  return (
    <Grid container sx={{ display: 'block' }}>
      <StyledGridContainer container>
        <Grid item>
          <StyledNameFilter
            id="name-filter"
            freeSolo
            loading={isFetchingOptions}
            disabled={isQuerying}
            value={queries.name || null}
            options={[...names]}
            onChange={handleNameChange}
            onInputChange={searchNames}
            renderOption={renderOption}
            renderInput={(params) => <TextField label="Name.." {...params} />}
            PopperComponent={WidePopper}
          />
        </Grid>
        <Grid item>
          <StyledTypeFilter
            id="type-filter"
            loading={isFetchingOptions}
            disabled={isQuerying}
            options={[...types]}
            value={queries.type || null}
            onChange={handleTypeChange}
            renderOption={renderOption}
            renderInput={(params) => <TextField label="Type" {...params} />}
            PopperComponent={WidePopper}
            popupIcon={queries.type ? null : <ArrowDropdownIcon />}
          />
        </Grid>
        <Grid item>
          <StyledRarityFilter
            id="rarity-filter"
            loading={isFetchingOptions}
            disabled={isQuerying}
            options={[...rarities]}
            value={queries.rarity || null}
            renderOption={renderOption}
            onChange={handleRarityChange}
            renderInput={(params) => <TextField label="Rarity" {...params} />}
            popupIcon={queries.rarity ? null : <ArrowDropdownIcon />}
            PopperComponent={WidePopper}
          />
        </Grid>
        <Grid item>
          <StyledSetFilter
            id="set-filter"
            loading={isFetchingOptions}
            options={[...sets]}
            value={queries.set || null}
            disabled={isQuerying}
            renderOption={renderOption}
            onChange={handleSetChange}
            renderInput={(params) => <TextField label="Set" {...params} />}
            popupIcon={queries.set ? null : <ArrowDropdownIcon />}
            PopperComponent={WidePopper}
          />
        </Grid>
      </StyledGridContainer>
      <Snackbar
        open={isErrDialogOpened}
        autoHideDuration={6000}
        onClose={handleErrDialogClose}>
        <Alert onClose={handleErrDialogClose} severity="error" sx={{ width: '100%' }}>
          Error while fetching data
        </Alert>
      </Snackbar>
    </Grid>
  );
}