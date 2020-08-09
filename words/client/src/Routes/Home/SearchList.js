import React from 'react';
import styled from 'styled-components';

const List = styled.li`
    padding-bottom: 0.7vw;
    background-color: white;
    list-style:none;
`;


function Word({ word }) {
  return (
    <List>
      <b>{word.wordname}</b>
    </List>
  );
}

function SearchList({ words }) {
  return (
      <List>

      {words.map(word => (
          <Word word={word} key={word.id} />
          ))}
          </List>
  );
}

export default SearchList;