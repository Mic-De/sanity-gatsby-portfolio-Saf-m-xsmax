// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'
import blockText from './blockText'
import category from './category'
import mainImage from './mainImage'
import person from './person'
import project from './project'
import projectMember from './projectMember'
import siteSettings from './siteSettings'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'blog',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    blockContent,
    blockText,
    category,
    mainImage,
    person,
    project,
    projectMember,
    siteSettings

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ])
})
