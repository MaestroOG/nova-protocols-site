// schemas/testimonialsSection.ts
export default {
    name: 'testimonialsSection',
    title: 'Testimonials Section',
    type: 'document',
    fields: [
        {
            name: 'heading',
            title: 'Heading',
            type: 'string',
        },
        {
            name: 'testimonials',
            title: 'Testimonials',
            type: 'array',
            of: [{ type: 'testimonial' }],
        },
    ],
}