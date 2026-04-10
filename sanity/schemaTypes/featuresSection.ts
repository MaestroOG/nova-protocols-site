// schemas/featuresSection.ts
export default {
    name: 'featuresSection',
    title: 'Features Section',
    type: 'document',
    fields: [
        {
            name: 'heading',
            type: 'string',
        },
        {
            name: 'subtext',
            type: 'text',
        },
        {
            name: 'features',
            title: 'Left Features',
            type: 'array',
            of: [{ type: 'featureItem' }],
        },
        {
            name: 'processSteps',
            title: 'Right Process Steps',
            type: 'array',
            of: [{ type: 'processStep' }],
        },
    ],
}