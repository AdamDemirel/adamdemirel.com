// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import documentArticle from "./documents/documentArticle"
import objectContent from './objects/objectContent'
import objectImage from './objects/objectImage'
import objectExternalLink from './objects/objectExternalLink'
import objectInternalLink from './objects/objectInternalLink'

const documents = [
  documentArticle,
]

const objects = [
  objectContent,
  objectImage,
  objectInternalLink,
  objectExternalLink,
]

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    ...documents,
    ...objects,
  ]),
})
