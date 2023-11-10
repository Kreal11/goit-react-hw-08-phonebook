import { AllContacts } from 'components/AllContacts/AllContacts';
import Loader from 'components/Loader/Loader';
import { SearchContacts } from 'components/SearchContact/SearchContact';
import { AppWrapper, StyledPlug } from 'components/StyledApp';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';

export const Home = () => {
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);
  const loading = useSelector(selectIsLoading);
  return (
    <AppWrapper>
      <SearchContacts />
      {!contacts.length && !error && !loading && (
        <StyledPlug>There are no contacts yet😭</StyledPlug>
      )}
      {error && <h2>{error}</h2>}
      {loading && <Loader />}
      <AllContacts />
    </AppWrapper>
  );
};
