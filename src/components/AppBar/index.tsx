//dependencies
import * as React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faCaretDown ,faPhoneVolume, faUser, faHeart } from '@fortawesome/free-solid-svg-icons'

//components
import {
  AppBar,
  Container,
  LowBox,
  TopBox
} from './style'

import Button from '../Button'
import InputS from '../Input'
import Text from '../Text'

export default function ResponsiveAppBar(){
  return(
    <AppBar>
      <TopBox>
        <Container width={[1/3]}>
          <InputS/>
          <Button variant='primary'>
            <Text variant='link'>Buscar</Text>
          </Button>
        </Container>

        <Container width={[1/2]}>
          <Text variant='title'> MOBLY</Text>
          <Button variant='secondary'>
            <FontAwesomeIcon icon={faPhoneVolume}
              size="lg"
              color='#5f22a8'
              transform={{ rotate: 300 }}
            />
            <Text variant='primary'> Atendimento </Text>
          </Button>

          <Button variant='secondary'>
            <FontAwesomeIcon icon={faUser}
              size="lg"
              color='#5f22a8'
            />
            <Text variant='primary'> Minha Conta </Text>
          </Button>

          <Button variant='secondaryMini'>
            <FontAwesomeIcon icon={faHeart}
              size='lg'
              color='#5f22a8'
            />
            <Text variant='primary'> Favoritos </Text>
          </Button>

          <Container marginLeft='2em'>
            <Button variant='cart'>
              <FontAwesomeIcon icon={faCartShopping}
                size='lg'
                color='#edece6'
              />
              <Text variant='link'>7</Text>
              <FontAwesomeIcon icon={faCaretDown}
                size='1x'
                color='#edece6'
              />
            </Button>
          </Container>
        </Container>


      </TopBox>
      <LowBox>
        <Container width={[2/3]}>
          <Button variant='secondary'>
            <Text variant='primaryBold'>Por Ambiente</Text>
            <FontAwesomeIcon icon={faCaretDown}
                size='1x'
                color='#ff4600'
              />
          </Button>

          <Button variant='secondary'>
            <Text variant='primaryBold'>Por Categoria</Text>
            <FontAwesomeIcon icon={faCaretDown}
                size='1x'
                color='#ff4600'
              />
          </Button>

          <Button variant='secondary'>
            <Text variant='secondary'>Mobly Inspira</Text>
          </Button>

          <Button variant='secondary'>
            <Text variant='secondary'>Lançamentos</Text>
          </Button>

          <Button variant='secondary'>
            <Text variant='secondary'>Outlet</Text>
          </Button>

          <Button variant='secondaryMini'>
            <Text variant='secondary'>Blog</Text>
          </Button>

        </Container>
      </LowBox>

    </AppBar>
  )
}
