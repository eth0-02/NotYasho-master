import sanityClient from '@sanity/client';

const client = sanityClient({
	projectId: 'e7hpgv7c',
	dataset: 'production',
	apiVersion: '2023-01-05',
	useCdn: false // development
});

export default client;