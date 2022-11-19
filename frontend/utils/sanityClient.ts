import { createClient } from "next-sanity"

const sanityClient = createClient({
  projectId: 'pjm6nqei',
  dataset: 'production',
  apiVersion: '2022-11-19',
  useCdn: false,
})

export { sanityClient }
