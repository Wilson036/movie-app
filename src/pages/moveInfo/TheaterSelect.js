import { InputLabel, MenuItem, Select } from '@material-ui/core';
import React from 'react';
import Search from '../../components/common/Search';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SelectDiv = styled.div`
  margin: 8px;
  min-width: 120px;
`;

export default function TheaterSelect({
  area,
  getAreaValue,
  areaItems,
  searchTheater,
}) {
  return (
    <StyledDiv>
      <SelectDiv>
        <InputLabel id="arae-label">選擇地區</InputLabel>
        <Select labelId="arae-label" value={area} onChange={getAreaValue}>
          {areaItems.map((areaInfo) => (
            <MenuItem value={areaInfo.area_id} key={areaInfo.area_id}>
              {areaInfo.area_name}
            </MenuItem>
          ))}
        </Select>
      </SelectDiv>
      <Search
        text="search movie title"
        width="50"
        searchEvent={searchTheater}
      />
    </StyledDiv>
  );
}
