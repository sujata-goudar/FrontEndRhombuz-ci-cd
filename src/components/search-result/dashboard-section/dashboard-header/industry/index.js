import React from 'react';
import PropTypes from 'prop-types';
import {
  AddContentContainer,
  AddContentWrp,
  AddItemContainer,
  AddText,
  ComponentWrapper,
  ItemContainer,
  MainContent,
  // SectionHeader,
  // SectionTitle,
} from './index.sc';
import { Button } from '../../../../button';
import { theme } from '../../../../../constants/theme';
import { useSelector } from 'react-redux';

const Industry = ({ tabKeywords }) => {
  const selectedTheme = useSelector((store) => {
    return store?.theme.theme || {};
  });
  // const handleAddRemoveChart = () => {};
  const handleAnalyze = () => {};
  return (
    <ComponentWrapper>
      {/* <SectionHeader>
        <SectionTitle>Industry Dashboard</SectionTitle>
        <Button
          title="Add/Remove Charts"
          backgroundColor={theme[selectedTheme].background}
          color={theme[selectedTheme].primary}
          border={`1px solid ${theme[selectedTheme].primary}`}
          onClick={handleAddRemoveChart}
          btnStyle={{ borderRadius: '0.5rem' }}
          //   icon={<AddRemoveChart width="1rem" height="1rem" />}
        />
      </SectionHeader> */}
      <MainContent>
        <ItemContainer>
          <AddContentWrp>
            <AddContentContainer>
              <AddText>Industry Keywords</AddText>
              <AddItemContainer></AddItemContainer>
            </AddContentContainer>
          </AddContentWrp>
          <Button
            title="Analyze"
            backgroundColor="#C3C7D9"
            color={theme[selectedTheme].logoText}
            onClick={handleAnalyze}
            btnStyle={{
              width: '6.6rem',
              height: '2.75rem',
              borderRadius: '0.5rem',
            }}
          />
        </ItemContainer>
      </MainContent>
    </ComponentWrapper>
  );
};

export default Industry;

Industry.propTypes = {
  tabKeywords: PropTypes.any,
};
