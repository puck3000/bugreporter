import { CollectionConfig } from 'payload/types'

export const Bugreport: CollectionConfig = {
  slug: 'bugRedux',
  fields: [
    {
      name: 'repeater',
      type: 'blocks',
      blocks: [
        {
          slug: 'textblock',
          fields: [
            {
              name: 'text',
              type: 'text',
            },
          ],
        },
        {
          slug: 'richtextblock',
          fields: [
            {
              name: 'text',
              type: 'richText',
            },
          ],
        },
      ],
    },
  ],
}
