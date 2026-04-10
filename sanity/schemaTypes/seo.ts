// schemas/seo.ts
export default {
    name: 'seo',
    title: 'SEO',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Meta Title',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Meta Description',
            type: 'text',
        },
        {
            name: 'image',
            title: 'Open Graph Image',
            type: 'image',
        },
        {
            name: 'keywords',
            title: 'Keywords',
            type: 'array',
            of: [{ type: 'string' }],
        },
    ],
}