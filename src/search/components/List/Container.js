import React from 'react';
import { connectModule } from 'redux-modules';

import List from '../../../components/List';
import searchModule from '../../module';
import nowPlayingModule from '../../../nowPlaying/module';

export function ListContainer(props) {
  const {
    search: {
      searchResults
    },
    actions: {
      nowPlaying: {
        setCurrentVideo
      }
    }
  } = props;

  return (
    <List
      listItems={searchResults}
      onListItemClicked={setCurrentVideo}
    />
  );
}

export default connectModule([searchModule, nowPlayingModule])(ListContainer);
