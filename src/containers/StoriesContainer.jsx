import { useState, useEffect } from 'react';
import { getStoryIds } from '../api/haskerNewsApi.js';

function StoriesContainer() {
    const [topStoriesIds, setTopStoriesIds] = useState([]);

    useEffect(() => {
      getStoryIds().then(data => setTopStoriesIds(data))
    }, [])

  return <p>{JSON.stringify(topStoriesIds)}</p>
}

export default StoriesContainer;