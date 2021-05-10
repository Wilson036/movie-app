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
  margin-bottom: 8px;
  min-width: 120px;
  border-radius: 4px;
  background-color: white;
  padding: 16px;
`;

const StyledSelect = styled(Select)`
  width: 100px;
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
        <StyledSelect labelId="arae-label" onChange={getAreaValue} value={area}>
          {areaItems.map((areaInfo) => (
            <MenuItem value={areaInfo.area_id} key={areaInfo.area_id}>
              {areaInfo.area_name}
            </MenuItem>
          ))}
        </StyledSelect>
      </SelectDiv>
      <Search text="搜尋戲院名稱" width="50" searchEvent={searchTheater} />
    </StyledDiv>
  );
}
