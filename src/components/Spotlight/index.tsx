//dependencies
import * as React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faCaretDown ,faPhoneVolume, faUser, faHeart } from '@fortawesome/free-solid-svg-icons'

//components
import {
  CardImages,
  BoxImage,
  BoxMain,
  BoxText,
  Container,
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
          <Container marginRight='16px'>
            <img src={Oferta1} width='220px' />
          </Container>

          <Container marginRight='16px'>
            <img src={Oferta2} width='220px' />
          </Container>

          <Container>
            <img src={Oferta3} width='220px' />
          </Container>
        </CardImages>

        <Container marginTop='6em'>
          <img src={Oferta4} width='1366px' />
        </Container>

        <Container marginTop='6em' marginLeft='8em'>
          <Container marginRight='24px'>
            <img src={Oferta5} width='320px' />
          </Container>
          <Container>
            <img src={Oferta6} width='600px' />
          </Container>
        </Container>

      </BoxImage>
    </BoxMain>

  )
}
