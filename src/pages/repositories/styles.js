import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px 0;
  background: #f5f5f5;
`;

export const Wrapper = styled.View`
  padding: 0 20px;
`;

export const Form = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0 20px 10px;
  border-bottom-width: 1px;
  border-bottom-color: #ddd;
`;

export const Input = styled.TextInput`
  flex: 1;
  margin-right: 10px;
  padding: 10px;
  border-radius: 4px;
  color: #333;
  background: #fff;
  font-size: 14px;
  border-width: 1px;
  border-color: ${({ hasError }) => (hasError ? '#e37a7a' : 'transparent')};
`;

export const Error = styled.Text`
  margin: 10px 0;
  color: #e37a7a;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
`;
