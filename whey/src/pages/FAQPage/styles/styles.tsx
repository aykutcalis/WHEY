import styled from 'styled-components';
export const FAQContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  background: rgba(229, 229, 229, 1);
  padding: 20px;
  margin-top: 20px;
`;

export const CategoryContainer = styled.div`

  display: flex;
  gap: 5px;
  justify-content: flex-start;
  margin-bottom: 20px;
  margin-top: 10px;
`;

export const CategoryButton = styled.button<{ isActive: boolean }>`
  background: ${({ isActive }) => (isActive ? 'rgba(200, 200, 200, 1)' : 'rgba(245, 245, 245, 1)')};
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: bold;
`;

export const SelectedCategoryHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  h2 {
    margin: 0;
    margin-left: 10px;
    font-size: 24px;
  }

  img {
    width: 24px;
    height: 24px;
  }
`;

export const QuestionList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const QuestionItem = styled.li`
  background: rgba(245, 245, 245, 1);
  margin: 10px 0;
  padding: 15px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PlusIcon = styled.span`
  width: 20px;
  height: 20px;
  display: inline-block;
  background: gray;
  color: white;
  text-align: center;
  line-height: 20px;
  border-radius: 4px;
`;
