//dependencies
import * as React from 'react'

//components
import {
  BoxMain,
  CardImages,
  Container,
  ContainerImg,
} from './style'

//images
import LM1 from '../../assets/imgs/launch/LancamentosMobly1.jpg'
import LM2 from '../../assets/imgs/launch/LancamentosMobly2.gif'
import LM3 from '../../assets/imgs/launch/LancamentosMobly3.gif'
import LM4 from '../../assets/imgs/launch/LancamentosMobly4.jpg'
import LM5 from '../../assets/imgs/launch/LancamentosMobly5.jpg'

export default function Launch(){
  return(
    <BoxMain>
      <CardImages>
        <Container width='240px'>
          <ContainerImg height='118px'>
            <img src={LM1} />
          </ContainerImg>
          <ContainerImg>
            <img src={LM4} />
          </ContainerImg>
        </Container>
        <Container width='240px'>
          <ContainerImg>
            <img src={LM2} />
          </ContainerImg>
        </Container>
        <Container width='480px'>
          <ContainerImg height='240px'>
            <img src={LM3} />
          </ContainerImg>
          <ContainerImg>
            <img src={LM5} />
          </ContainerImg>
        </Container>
      </CardImages>
    </BoxMain>

  )
}
