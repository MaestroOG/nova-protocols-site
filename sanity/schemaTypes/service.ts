export default {
    name: 'service',
    title: 'Service',
    type: 'object',
    fields: [
        {
            name: 'icon',
            title: 'Icon',
            type: 'image',
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'badges',
            title: 'Badges',
            type: 'array',
            of: [{ type: 'string' }],
        },
    ],
}