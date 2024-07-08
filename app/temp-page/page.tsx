'use client'
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store'; // Update with the correct path to your store
import { setTemporaryValue } from '@/features/tempFeature/tempSlice'; // Update with the correct path to your slice
import { Button, TextInput, Container } from '@mantine/core';

const TempPage = () => {
  // Access the temporaryValue from the Redux store
  const temporaryValue = useSelector((state: RootState) => state.tempFeature.temporaryValue);

  // Use dispatch to dispatch actions
  const dispatch = useDispatch();

  // Local state to manage input value
  const [inputValue, setInputValue] = useState<string>('');

  // Function to handle the update of temporaryValue
  const handleUpdateTemporaryValue = () => {
    if (inputValue.trim() !== '') {
      dispatch(setTemporaryValue(inputValue.trim()));
      setInputValue(''); // Clear the input field after dispatching
    }
  };

  return (
    <Container style={{ padding: '20px', maxWidth: '500px' }}>
      <h1>Temporary Value Control</h1>
      <p>Current Temporary Value: <strong>{temporaryValue}</strong></p>

      <TextInput
        value={inputValue}
        onChange={(e) => setInputValue(e.currentTarget.value)}
        placeholder="Enter new temporary value"
        style={{ marginBottom: '10px' }}
      />
      
      <Button onClick={handleUpdateTemporaryValue}>Update Temporary Value</Button>
    </Container>
  );
};

export default TempPage;
