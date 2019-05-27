import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  padding: 10px 15px;
  border-radius: 4px;
  background: #fff;
`;

export const Wrapper = styled.View`
  width: 80%;
`;

export const Title = styled.Text`
  margin-bottom: 3px;
  font-size: 18px;
  font-weight: bold;
`;

export const Description = styled.Text`
  font-size: 14px;
`;

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;
