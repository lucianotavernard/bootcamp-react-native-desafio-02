import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px 0;
  background: #f5f5f5;
`;

export const Wrapper = styled.View`
  padding: 0 20px;
`;

export const WrapperButtons = styled.View`
  flex-direction: row;
  margin: 10px 10px 5px;
  padding: 5px;
  border-radius: 4px;
  background: #777;
`;

export const Button = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: ${({ active }) => (active ? '#333' : '#999')};
  font-size: ${({ active }) => (active ? '15px' : '14px')};
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
`;
