import styled from 'styled-components';

export const MainWrp = styled.div`
  width: 100%;
  min-height: 28.125rem;
  max-height: fit-content;
  border-radius: 10px;
  border: 1px solid #f3f4f8;
  background: #fff;
  box-shadow: 0px px 2px 0px rgba(0, 0, 0, 0.05);
  cursor: pointer;
`;

export const CardTop = styled.div`
  height: 8.3rem;
  background-color: rgba(198, 193, 244, 0.3);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.7rem;
  justify-content: space-between;
  border-top-left-radius: 0.625rem;
  border-top-right-radius: 0.625rem;
`;

export const CardTopWrp = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TopLeftWrp = styled.div`
  display: flex;
  gap: 0.35rem;
`;

export const CheckBox = styled.div`
  height: 1.5rem;
  width: 1.5rem;
  border: 2px solid #5c5e60;
  background-color: #fff;
  border-radius: 0.25rem;
  display: none;
`;

export const TopAuthorWrp = styled.div`
  width: 5.5rem;
  height: 1.5rem;
  border-radius: 0.188rem;
  background: rgba(46, 104, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  align-items: center;
  display: flex;
`;

export const TopAuthorText = styled.p`
  color: #2e68ff;
  font-size: 0.625rem;
  font-weight: 600;
  line-height: 0.9375rem;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const ProfileImage = styled.div`
  width: 6.25rem;
  height: 6.25rem;
  border-radius: 50%;
  border: 3px solid #fff;
  background: url(${(props) => props.image}), lightgray 50% / cover no-repeat;
  position: absolute;
  bottom: -0.42rem;
`;

export const CardMiddle = styled.div`
  height: 9.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1.67rem;
  gap: 2.14rem;
  border-bottom: 1px solid #eceff3;
`;

export const DescrWrp = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.3125rem;
`;

export const ProfileName = styled.p`
  color: #000;
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  padding: 0;
`;

export const SubText = styled.p`
  color: var(--grey-grey-1, #555);
  text-align: center;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1rem;
  margin: 0;
  padding: 0;
`;

export const ScoreWrp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ScoreText = styled.div`
  color: var(--grey-dark, #000);
  text-align: center;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1rem;
`;

export const CardBottom = styled.div`
  height: 10.38rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TagsWrp = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  gap: 0.375rem;
  flex-wrap: wrap;
`;

export const TagContainer = styled.div`
  display: flex;
  padding: 0.375rem 0.625rem;
  align-items: flex-start;
  height: fit-content;
  border-radius: 0.313rem;
  background-color: ${(props) =>
    props.id === 0 ? 'rgba(46, 104, 255, 0.10)' : '#F3F4F8'};
  cursor: pointer;
`;

export const TagText = styled.p`
  font-size: 0.75rem;
  line-height: 1rem;
  margin: 0;
  padding: 0;
  color: ${(props) => (props.id === 0 ? '#2e68ff' : '#555')};
`;

export const TagLengthContainer = styled.div`
  padding: 0.375rem 0.625rem;
  background-color: #f3f4f8;
  border-radius: 0.313rem;
`;

export const ExtraTagText = styled.p`
  font-size: 0.75rem;
  line-height: 1rem;
  margin: 0;
  padding: 0;
  color: #555;
`;
