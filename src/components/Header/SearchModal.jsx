import { SearchIcon } from '@chakra-ui/icons'
import { IconButton, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, useDisclosure } from '@chakra-ui/react'

import SearchBar from './SearchBar'

import './SearchModal.css'

const SearchModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div className='search-modal'>
      <IconButton
        className='search-modal__button'
        icon={<SearchIcon />}
        onClick={onOpen} />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          className='search-modal__content'
          backgroundColor='background.900'
        >
          <ModalBody className='search-modal__body'>
            <ModalCloseButton
              className='search-modal__close-button'
              size='lg' />
            <SearchBar />
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default SearchModal