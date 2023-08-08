/**
 * Index file to orchestrate the providers of the application
 */
import ThemeRegistryProvider from './ThemeRegistryProvider';
import { QueryStateContextProvider } from './contexts/QueryStateContextProvider';
import SelectedCardsContextProvider from './contexts/SelectedCardsContextProvider';

export {
  QueryStateContextProvider,
  SelectedCardsContextProvider,
  ThemeRegistryProvider,
}