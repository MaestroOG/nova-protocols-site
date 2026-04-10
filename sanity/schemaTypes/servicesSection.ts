export default {
    name: 'servicesSection',
    title: 'Services Section',
    type: 'document',
    fields: [
        {
            name: 'heading',
            title: 'Heading',
            type: 'string',
        },
        {
            name: 'subtext',
            title: 'Subtext',
            type: 'text',
        },
        {
            name: 'services',
            title: 'Services',
            type: 'array',
            of: [{ type: 'service' }],
        },
    ],
}