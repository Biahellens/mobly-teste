//dependencies
import * as React from 'react'

//components
import {
  CardImages,
  BoxImage,
  BoxMain,
  BoxText,
  Container,
  ContainerImg,
} from './style'

import Button from '../Button'
import Text from '../Text'

//images
import Oferta1 from '../../assets/imgs/offers/GrandesOfertas1.jpg'
import Oferta2 from '../../assets/imgs/offers/GrandesOfertas2.jpg'
import Oferta3 from '../../assets/imgs/offers/GrandesOfertas3.jpg'
import Oferta4 from '../../assets/imgs/offers/GrandesOfertas4.jpg'
import Oferta5 from '../../assets/imgs/offers/GrandesOfertas5.jpg'
import Oferta6 from '../../assets/imgs/offers/GrandesOfertas6.jpg'

export default function SpotLight(){
  return(
    <BoxMain>
      <BoxImage>
        <BoxText>
          <Container>
            <Text variant='titleBold'>Lançamentos</Text>
            <Text variant='input'>Todo mês, novidades para você <br/>
            decorar sua casa de M novas maneiras.</Text>

            <Container marginTop='40px'>
              <Button variant='dark'><Text variant='link'>Veja todas as ofertas</Text></Button>
            </Container>
          </Container>

          <Container marginTop='60px'>
            <Text variant='span'>Grandes ofertas!</Text>
          </Container>
        </BoxText>

        <CardImages>
          <ContainerImg>
            <img src={Oferta1}/>
          </ContainerImg>

          <ContainerImg >
            <img src={Oferta2}/>
          </ContainerImg>

          <ContainerImg>
            <img src={Oferta3}/>
          </ContainerImg>
        </CardImages>

        <ContainerImg marginTop='8em'>
          <img src={Oferta4} />
        </ContainerImg>

        <Container marginTop='6em' marginLeft='6em' width='73%' justifyContent='space-around'>
          <ContainerImg>
            <img src={Oferta5} />
          </ContainerImg>

          <ContainerImg>
            <img src={Oferta6}/>
          </ContainerImg>
        </Container>
      </BoxImage>
    </BoxMain>

  )
}
