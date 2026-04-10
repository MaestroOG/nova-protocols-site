export const servicesQuery = `
  *[_type == "servicesSection"][0]{
    heading,
    subtext,
    services[]{
      title,
      description,
      badges,
      icon
    }
  }
`