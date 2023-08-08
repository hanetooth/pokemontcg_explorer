import { SearchIcon } from '@/icons';
import { StyledShowMoreButton } from "./StyledComponents";

export default function ShowMoreButton({ onClick }: { onClick: () => void }) {
  return (
    <StyledShowMoreButton onClick={onClick} startIcon={<SearchIcon />}>show more</StyledShowMoreButton>
  )
}