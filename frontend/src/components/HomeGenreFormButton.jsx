import React from 'react';
import {
  chakra,
  Text,
  useCheckbox,
  useColorModeValue,
} from '@chakra-ui/react';

function HomeGenreFormButton(props) {
  const { state, getInputProps, getLabelProps} = useCheckbox(props);
  const selectedBtnColor = useColorModeValue('blue.800', 'white');
  const selectedTxtColor = useColorModeValue('white', 'blue.800');
  const unselectedTxtColor = useColorModeValue('blue.800', 'white');
  const unselectedBtnColor = useColorModeValue('white', 'grey.800');

  return (
      <chakra.label
        display='flex'
        flexDirection='row'
        justifyContent={'center'}
        gridColumnGap={2}
        maxW='36'
        bg={state.isChecked ? selectedBtnColor : unselectedBtnColor}
        border='1px solid'
        borderColor='blue.500'
        rounded='lg'
        px={2}
        py={3}
        cursor='pointer'
      >
        <input {...getInputProps()} hidden />
        <Text
          color={state.isChecked ? selectedTxtColor : unselectedTxtColor}
          {...getLabelProps()}
        >
          {props.genre}
        </Text>
      </chakra.label>
  );
}

export default HomeGenreFormButton;
