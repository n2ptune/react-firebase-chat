import styled from 'styled-components'
import Box from '@material-ui/core/Box'

const StyledHeader = styled(Box)`
  display: flex;
`

export default function Header() {
  return <StyledHeader p={1}>Header</StyledHeader>
}
