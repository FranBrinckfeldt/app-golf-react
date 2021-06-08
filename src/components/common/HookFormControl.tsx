import React, { useState } from 'react'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/form-control'
import { FieldError, FieldValues, Path, UseFormRegister, UseFormRegisterReturn } from 'react-hook-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

interface HookFormControlProps<T> {
  fieldName: Path<T>
  label?: string
  placeholder?: string
  type?: 'text' | 'email' | 'password' | 'date'
  register: UseFormRegister<T>
  error: FieldError
}

const HookFormControl = <T extends FieldValues>({
  fieldName,
  label,
  placeholder,
  type,
  error,
  register
}: HookFormControlProps<T>) => {
  const { ref, onBlur, onChange, name }: UseFormRegisterReturn = register(fieldName)
  const [show, setShow] = useState(false)

  const passwordType = type === 'password'
  const toggleShow = () => setShow(prevState => !prevState)

  const getInputType = () => {
    if (passwordType) {
      return show ? 'text' : 'password'
    }
    return type
  }

  return (
    <FormControl id={name} colorScheme="primary" isInvalid={!!error}>
      {label && <FormLabel>{label}</FormLabel>}
      <InputGroup>
        <Input
          ref={ref}
          onBlur={onBlur}
          onChange={onChange}
          name={name}
          type={getInputType()}
          focusBorderColor="accent.500"
          placeholder={placeholder} />
        {passwordType && (
          <InputRightElement cursor="pointer">
            <FontAwesomeIcon
              icon={show ? faEyeSlash : faEye}
              onClick={toggleShow} />
          </InputRightElement>
        )}
      </InputGroup>
      <FormErrorMessage>{error?.message}</FormErrorMessage>
    </FormControl>
  )
}

export default HookFormControl
