import styled from 'styled-components';

export const StyledCastList = styled.ul`
  padding-top: 25px;
  display: grid;
  max-width: calc(100vw - 45px);
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;

  li {
    padding: 10px;
    height: 350px;
    box-shadow: 2px 2px 4px 1px lightgray;

    img {
      width: 100%;
    }
  }
`;

export const CastMemberInfo = styled.div`
  padding: 7px;
  width: 200px;
  display: inline-flex;
  flex-direction: column;
  row-gap: 5px;

  p {
    font-weight: 500;
    color: gray;
  }
`;
