import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  height: 510px;
  overflow-y: scroll;
`;
export default function TimeList({ timeList }) {
  return (
    <List>
      {Object.keys(timeList).map((key) => {
        return (
          <li key={key}>
            {key}:
            <div key={`${key}-div`}>
              {Object.keys(timeList[key]).map((type) => {
                return (
                  <>
                    <div key={`${key}-${type}`}>{type}</div>
                    <div key={`${key}-${type}-time`}>
                      {timeList[key][type].map(({ show_time }) => {
                        return (
                          <button key={`${key}-${type}-${show_time}`}>
                            {show_time}
                          </button>
                        );
                      })}
                    </div>
                  </>
                );
              })}
            </div>
          </li>
        );
      })}
    </List>
  );
}
