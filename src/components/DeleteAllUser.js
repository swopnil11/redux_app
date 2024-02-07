import React from 'react';
import styled from 'styled-components';
import { clearAllusers } from '../store/slices/UserSlice';
import { useDispatch } from 'react-redux';

export default function DeleteAllUser() {

  const dispatch = useDispatch();

  const deleteUsers = () => {
    dispatch(clearAllusers());
  }
  return (
    <Wrapper>
      <button className="btn add-btn" onClick={deleteUsers}>Clear All</button>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .clear-btn{
    text-transform: capitalize;
    background-color: #db338a;
    margin-top: 2rem;   
  }
`;
