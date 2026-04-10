// schemas/processStep.ts
export default {
    name: 'processStep',
    title: 'Process Step',
    type: 'object',
    fields: [
        {
            name: 'title',
            type: 'string',
        },
        {
            name: 'description',
            type: 'text',
        },
    ],
}