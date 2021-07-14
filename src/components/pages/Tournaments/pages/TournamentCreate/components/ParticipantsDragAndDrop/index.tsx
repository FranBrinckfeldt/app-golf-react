/* eslint-disable react/jsx-props-no-spreading */
import { HStack } from '@chakra-ui/react'
import { User } from 'models/user'
import React, { Dispatch, SetStateAction, useCallback } from 'react'
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd'
import DroppableList from './components/DroppableList'
import { reorder, move } from './utils'

interface DraggableParticipants {
  items: User[],
  selected: User[]
}

interface Props {
  draggables: DraggableParticipants
  setDraggables: Dispatch<SetStateAction<DraggableParticipants>>
}

function ParticipantsDragAndDrop({ draggables, setDraggables }: Props) {
  const getList = useCallback(
    (id: 'items' | 'selected') => draggables[id], [draggables]
  )

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result

    // dropped outside the list
    if (!destination) {
      return
    }

    if (source.droppableId === destination.droppableId) {
      const items = reorder(
        getList(source.droppableId as 'items' | 'selected'),
        source.index,
        destination.index
      )

      let state: { items?: User[], selected?: User[] } = { items: items as User[] }

      if (source.droppableId === 'selected') {
        state = { selected: items as User[] }
      }

      setDraggables(prevState => ({
        ...prevState,
        ...state
      }))
    } else {
      const moveResult = move(
        getList(source.droppableId as 'items' | 'selected'),
        getList(destination.droppableId as 'items' | 'selected'),
        source,
        destination
      )

      setDraggables({
        items: moveResult.items as User[],
        selected: moveResult.selected as User[]
      })
    }
  }

  return (
    <HStack w="full" alignItems="stretch">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="items">
          {(provided, snapshot) => (
            <DroppableList
              title="Usuarios"
              participants={draggables.items}
              provided={provided}
              snapshot={snapshot} />
          )}
        </Droppable>
        <Droppable droppableId="selected">
          {(provided, snapshot) => (
            <DroppableList
              title="Participantes"
              participants={draggables.selected}
              provided={provided}
              snapshot={snapshot} />
          )}
        </Droppable>
      </DragDropContext>
    </HStack>
  )
}

export default ParticipantsDragAndDrop
