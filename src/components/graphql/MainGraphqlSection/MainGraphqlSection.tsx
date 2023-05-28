import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { fallbackRender } from '../../../helpers/fallbackRender';
import Editors from '../../../modules/forms/Editors/Editors';
import GraphqlTools from '../GraphqlTools/GraphqlTools';
import { MainSection } from './MainGraphqlSection.style';

const MainGraphqlSection = () => {
  return (
    <MainSection>
      <ErrorBoundary fallbackRender={fallbackRender}>
        <GraphqlTools />
        <Editors />
      </ErrorBoundary>
    </MainSection>
  );
};

export default MainGraphqlSection;
