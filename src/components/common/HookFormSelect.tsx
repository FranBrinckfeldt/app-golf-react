import React from 'react'
import { InputGroup } from '@chakra-ui/input'
import { Select } from '@chakra-ui/select'
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/form-control'
import { FieldError, FieldValues, Path, UseFormRegister, UseFormRegisterReturn } from 'react-hook-form'

interface HookFormSelectProps<T> {
  fieldName: Path<T>
  label?: string
  placeholder?: string
  register: UseFormRegister<T>
  error: FieldError
  options: { value: string, label: string, selected?: boolean }[]
}

const HookFormSelect = <T extends FieldValues>({
  fieldName,
  label,
  placeholder,
  error,
  register,
  options
}: HookFormSelectProps<T>) => {
  const { ref, onBlur, onChange, name }: UseFormRegisterReturn = register(fieldName)

  return (
    <FormControl id={name} colorScheme="primary" isInvalid={!!error}>
      {label && <FormLabel>{label}</FormLabel>}
      <InputGroup>
        <Select
          ref={ref}
          onBlur={onBlur}
          onChange={onChange}
          name={name}
          focusBorderColor="accent.500"
          placeholder={placeholder}>
          {options.map(val => (
            <option value={val.value} selected={val.selected}>{val.label}</option>
          ))}
        </Select>
      </InputGroup>
      <FormErrorMessage>{error?.message}</FormErrorMessage>
    </FormControl>
  )
}

export default HookFormSelect
