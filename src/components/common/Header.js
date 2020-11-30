import { compose, spacing, palette, breakpoints } from '@material-ui/system'
import styled from 'styled-components'

const Box = styled.div`
  ${breakpoints(compose(spacing, palette))}
`

export default function Header() {
  return <Box>Header</Box>
}
