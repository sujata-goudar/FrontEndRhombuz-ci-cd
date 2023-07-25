import styled from 'styled-components';

export const MainWrp = styled.div`
  padding: 0.625rem 0.8125rem 0.625rem 0.625rem;
  background: ${(props) =>
    props.isOpen ? 'rgba(160, 167, 198, 0.6)' : 'transparent'};
  width: 100vw;
  height: 100vh;
  position: absolute;
  transition: 0.3s ease-in-out;
  z-index: 500;
`;

export const BtnWrp = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;
export const PopupCloseBtnWrp = styled.div`
  position: absolute;
  top: 1.8rem;
  right: 1.5rem;
  cursor: pointer;
  height: 1.5rem;
  width: 1.5rem;
  background-color: #e8eaee;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PopUpWrp = styled.div`
  height: 100vh;
  width: 26.75rem;
  flex-shrink: 0;
  border-radius: 0.9375rem 0 0 0.935rem;
  background: #fff;
  box-shadow: 0px 8px 8px 0px rgba(153, 153, 153, 0.4);
  position: absolute;
  right: 0rem;
  transition: 0.3s ease-in-out;
  z-index: 1000;
  transform: ${(props) =>
    props.isOpen ? 'translate(0, 0)' : 'translate(200%,0%)'};
`;

export const TextArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.59rem;
  padding: 2rem 1.61rem;
`;

export const HeadingText = styled.h3`
  color: #000;

  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.25rem;
  letter-spacing: -0.025rem;
  padding: 0;
  margin: 0;
`;
export const Subtext = styled.p`
  color: #656b8a;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.0625rem;
  letter-spacing: -0.015rem;
  padding: 0;
  margin: 0;
`;

export const TableArea = styled.div`
  width: 100%;
  padding: 0 1.61rem;
`;

export const TableWrapper = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #d1d5dc;
`;

export const TableHeader = styled.th`
  padding-bottom: 0.94rem;
  color: #161a34;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.0625rem;
  letter-spacing: -0.015rem;
`;

export const RowHeader = styled.td`
  vertical-align: middle; /* Center the content vertically */
  color: #000;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.0625rem;
  letter-spacing: -0.015rem;
`;
export const TableData = styled.td`
  text-align: center; /* Center the content horizontally */
  vertical-align: middle; /* Center the content vertically */
  padding: 1rem 0;
`;
