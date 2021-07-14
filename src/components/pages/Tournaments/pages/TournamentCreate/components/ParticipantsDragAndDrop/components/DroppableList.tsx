/* eslint-disable react/jsx-props-no-spreading */
import { Flex, Text, VStack, Heading } from '@chakra-ui/react'
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { User } from 'models/user'
import React from 'react'
import { Draggable, DroppableProvided, DroppableStateSnapshot } from 'react-beautiful-dnd'

interface Props {
  participants: User[]
  provided: DroppableProvided
  snapshot: DroppableStateSnapshot
  title: string
}

function DroppableList({ participants, provided, snapshot, title }: Props) {
  return (
    <VStack
      ref={provided.innerRef}
      spacing="2"
      rounded="md"
      bgColor={snapshot.isDraggingOver ? 'primary.50' : 'gray.50'}
      flex="1"
      p="4">
      <Heading as="h5" fontSize="md" textAlign="left" w="full">{title}</Heading>
      {participants.map((item, index) => (
        <Draggable
          key={item._id}
          draggableId={item._id as string}
          index={index}>
          {(dragProvided, dragSnapshot) => (
            <Flex
              ref={dragProvided.innerRef}
              {...dragProvided.draggableProps}
              {...dragProvided.dragHandleProps}
              direction="column"
              userSelect="none"
              p="2"
              w="full"
              position="relative"
              fontSize="sm"
              shadow={dragSnapshot.isDragging ? 'md' : 'sm'}
              rounded="md"
              bgColor={dragSnapshot.isDragging ? 'accent.50' : 'white'}>
              <Text>{`${item.firstname} ${item.lastname}`}</Text>
              <Text opacity="0.5" fontSize="xs">{item.email}</Text>
              <Flex
                position="absolute"
                w="5"
                h="5"
                alignItems="center"
                justifyContent="center"
                top="2"
                right="1"
                bgColor="accent.500"
                color="white"
                fontSize="xs"
                rounded="full">
                {index + 1}
              </Flex>
            </Flex>
          )}
        </Draggable>
      ))}
      {provided.placeholder}
      {participants.length === 0 && (
        <Flex direction="column" justifyContent="center" alignItems="center" h="full" m="4" border="dashed" borderColor="gray.100" rounded="md" w="full">
          <Text as={FontAwesomeIcon} fontSize="xl" icon={faBoxOpen} opacity="0.5" />
          <Text fontSize="md" opacity="0.75">No hay elementos</Text>
        </Flex>
      )}
    </VStack>
  )
}

export default DroppableList
