import styled from "styled-components";

const ErrorMsg = styled.div`
  font-size: 1.6rem;
  line-height: 150%;
  @media (max-width: 767px) {
    font-size: 1.4rem;
    line-height: normal;
  }
`;

const ErrorMsgContainer = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.2rem;
`;

const NoLinksMsg = () => {
  return (
    <ErrorMsgContainer>
      <ErrorMsg>저장된 링크가 없습니다.</ErrorMsg>
    </ErrorMsgContainer>
  );
};

export default NoLinksMsg;
