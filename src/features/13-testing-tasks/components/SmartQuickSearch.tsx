import React, { useEffect } from 'react';
import { Card, Form, Spinner } from 'react-bootstrap';

import nbaPlayersApi from 'src/api/nba-player-api';

import useDebounce from '../hooks/useDebounce';
import useFetch, { RequestStatus } from '../hooks/useFetch';
import PureList from './PureList';

const MIN_WIDTH = 2;

export default function SmartQuickSearch(): React.ReactElement {
  const [searchQuery, setSearchQuery] = useDebounce('', 800);
  const { data = [], status, fetchData } = useFetch(nbaPlayersApi.search);
  const isLoading = status === RequestStatus.Pending;
  const isSuccessfullyLoaded = status === RequestStatus.Success;

  useEffect(() => {
    if (searchQuery.length >= MIN_WIDTH) {
      fetchData({ q: searchQuery });
    }
  }, [searchQuery, fetchData]);

  return (
    <Card className="shadow p-3">
      <Form.Group className="mb-3" controlId="searchField">
        <Form.Label>Search</Form.Label>
        <Form.Control type="search"
          onChange={(ev: any) => setSearchQuery(ev.target.value)}
          placeholder="Your search phrase"
        />
      </Form.Group>

      {
        isLoading &&
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      }

      {
        isSuccessfullyLoaded && <>
          <h3>Search results</h3>
          <PureList
            items={data}
            renderItem={
              (item) => `${item.last_name}, ${item.first_name} (${item.position})`
            }
          />
        </>
      }

    </Card>
  );
}

