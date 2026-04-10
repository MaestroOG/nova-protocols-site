import { type SchemaTypeDefinition } from 'sanity'
import service from './service'
import servicesSection from './servicesSection'
import featureItem from './featureItem'
import featuresSection from './featuresSection'
import processStep from './processStep'
import testimonial from './testimonial'
import testimonialsSection from './testimonialsSection'
import seo from './seo'
import page from './page'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [service, servicesSection, featureItem, featuresSection, processStep, testimonial, testimonialsSection, seo, page],
}
