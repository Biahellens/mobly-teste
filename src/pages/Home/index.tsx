//dependecies

//conponentes
import { ResponsiveAppBar, Launch, SpotLight } from '../../components'

import { Container, Wrapper } from './style'

//images

export function Home(){
  return(
    <Wrapper>
      <Container>
        <ResponsiveAppBar />
      </Container>
      <Container>
        <SpotLight />
      </Container>
      <Container>
        <Launch />
      </Container>
    </Wrapper>
  )
}
