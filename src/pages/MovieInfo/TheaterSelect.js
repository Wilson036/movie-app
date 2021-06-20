import { InputLabel, MenuItem, Select } from "@material-ui/core";
import React from "react";
import Search from "../../components/common/Search";
import styled from "styled-components";

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

export default function TheaterSelect({ area, getAreaValue, areaItems }) {
  return (
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
  );
}
