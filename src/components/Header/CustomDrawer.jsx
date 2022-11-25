import { useRef } from 'react'

import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  IconButton,
  Image,
} from '@chakra-ui/react'

import { HamburgerIcon } from '@chakra-ui/icons'

import NavigationLinks from './NavigationLinks'
import logo from '../../assets/MClogo.png'

import './CustomDrawer.css'

const CustomDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  return (
    <div className='drawer'>
      <IconButton
        ref={btnRef}
        className='drawer__button'
        colorScheme='background.900'
        icon={<HamburgerIcon />}
        onClick={onOpen}
      >
        Open
      </IconButton>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent backgroundColor='blackAlpha.50'>
          <DrawerCloseButton className='drawer__close-button' />
          <DrawerHeader className='drawer__header' backgroundColor='background.900'>
            <Image className='drawer__logo' src={logo} alt="movie catalog logo" />
          </DrawerHeader>

          <DrawerBody className='drawer__body' backgroundColor='background.transparent'>
            <NavigationLinks itemClassName='drawer__link' />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export default CustomDrawer
