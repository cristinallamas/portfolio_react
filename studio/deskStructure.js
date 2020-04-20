import S from '@sanity/desk-tool/structure-builder'
import MdSettings from 'react-icons/lib/md/settings'
import MdBusinessCenter from 'react-icons/lib/md/business-center'
import MdFreeBreakfast from 'react-icons/lib/md/free-breakfast'
import MdLabelOutline from 'react-icons/lib/md/label-outline'
import MdWhatshot from 'react-icons/lib/md/whatshot'
import MdDescription from 'react-icons/lib/md/description'

const hiddenDocTypes = listItem =>
  !['category', 'sideProject', 'project', 'siteSettings', 'blogPost'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        )
        .icon(MdWhatshot),
      S.listItem()
        .title('Projects')
        .schemaType('project')
        .child(S.documentTypeList('project').title('Projects'))
        .icon(MdBusinessCenter),
      S.listItem()
        .title('Side Projects')
        .schemaType('sideProject')
        .child(S.documentTypeList('sideProject').title('Side Projects'))
        .icon(MdFreeBreakfast),
      S.listItem()
        .title('Categories')
        .schemaType('category')
        .child(S.documentTypeList('category').title('Categories'))
        .icon(MdLabelOutline),
      S.listItem()
        .title('Blog Posts')
        .schemaType('blogPost')
        .child(S.documentTypeList('blogPost').title('Blog Posts'))
        .icon(MdDescription),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
