// contentfulClient.js
import { createClient } from 'contentful';

// Initialize Contentful client
const client = createClient({
  space: 'in6ejm21oz1g', // Your Space ID
  accessToken: 'zxOfz54nOcCzUxLc1uEdIhY-Lfkp6_GfkQtUNfjof5w', // Your Access Token
});


client.getSpace()
  .then((space) => console.log('Connected to Contentful Space:', space.name))
  .catch((error) => console.error('Error connecting to Contentful:', error));


export default client;
