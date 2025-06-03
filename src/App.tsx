import React, { useState } from 'react';
import { ToggleButtonGroup, ToggleButton, Button } from '@mui/material';

function App() {
  const [toggleGroups, setToggleGroups] = useState([
    { id: 0, value: ''} // Initial group
  ]);

  const handleAddGroup = () => {
    setToggleGroups([...toggleGroups, { id: toggleGroups.length, value: '' }]);
  };

  const handleToggleChange = (groupId, event, newValue) => {
      const updatedGroups = toggleGroups.map(group => {
        if (group.id === groupId) {
          return { ...group, value: newValue };
        }
        return group;
      });
      setToggleGroups(updatedGroups);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleAddGroup}>
        Add Toggle Group
      </Button>
      {toggleGroups.map((group) => (
        <ToggleButtonGroup
          key={group.id}
          value={group.value}
          exclusive
          onChange={(event, newValue) => handleToggleChange(group.id, event, newValue)}
        >
          <ToggleButton value="left">Left</ToggleButton>
          <ToggleButton value="center">Center</ToggleButton>
          <ToggleButton value="right">Right</ToggleButton>
        </ToggleButtonGroup>
      ))}
    </div>
  );
}

export default App;