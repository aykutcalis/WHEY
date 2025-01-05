import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 15px;
`;

export const LabelRow = styled.div`
  display: flex;
  gap: 15px;
  width: 100%;
  align-items: flex-start;
`;

export const Label = styled.label`
  flex: 1;
  font-size: 16px;
  font-weight: 600;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  padding: 14.5px 17px;
  border-radius: 4px;
  border: 1px solid #ccc;
  opacity: 1;
  box-sizing: border-box;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 14.5px 17px;
  border-radius: 4px;
  border: 1px solid #ccc;
  resize: none;
  opacity: 1;
  box-sizing: border-box;
`;

export const Button = styled.button`
  width: 150px;
  height: 40px;
  background-color: #000;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  align-self: center;

  &:hover {
    background-color: #333;
  }
`;
export const DisclaimerBox = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  color: black;
 margin-top: 30px;
  text-align: center;
  line-height: 1.5;
  font-weight:500;
`;
export const DisclaimerFirst = styled.p`
  font-size: 12px;
  color: black;
  width: 80%;
  text-align: center;
  line-height: 1.5;
`;
export const DisclaimerLast = styled.p`
  font-size: 12px;
  color: black;
  text-align: center;
  line-height: 1.5;
`;

export const Description = styled.p`
  font-size: 12px;
  color: #666;
  margin-top: 20px;
  text-align: left;
  line-height: 1.5;
`;
export const DescriptionWrapper = styled.p`
width: 100%;
  height: 50px; 
  display: flex;
  justify-content: flex-start;
`;