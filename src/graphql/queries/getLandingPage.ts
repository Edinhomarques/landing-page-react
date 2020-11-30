const GET_LANDING_PAGE = /* GraphQL */ `
  # Write your query or mutation here
  fragment logo on LandingPage {
    logo {
      alternativeText
      url
    }
  }
  fragment header on LandingPage {
    header {
      title
      description
      image {
        alternativeText
        url
      }
      button {
        label
        url
      }
    }
  }
  fragment sectionAboutProject on LandingPage {
    sectionAboutProject {
      title
      description
      image {
        url
        alternativeText
      }
    }
  }
  fragment sectionTech on LandingPage {
    sectionTech {
      title
      techIcons {
        icon {
          url
        }
        title
      }
    }
  }

  fragment sectionConcepts on LandingPage {
    sectionConcepts {
      title
      concepts {
        title
      }
    }
  }
  fragment sectionModules on LandingPage {
    sectionModules {
      title
      modules {
        title
        subtitle
        description
      }
    }
  }
  fragment sectionAgenda on LandingPage {
    sectionAgenda {
      title
      description
    }
  }
  fragment pricingBox on LandingPage {
    pricingBox {
      totalPrice
      numberInstallments
      priceInstallment
      benefits
      button {
        label
        url
      }
    }
  }

  fragment sectionAboutUs on LandingPage {
    sectionAboutUs {
      title
      authors {
        name
        photo {
          url
          name
        }
        role
        socialLinks {
          title
          url
        }
        description
      }
    }
  }

  query GET_LANDING_PAGE {
    landingPage {
      ...logo
      ...header
      ...sectionAboutProject
      ...sectionTech
      ...sectionConcepts
      ...sectionModules
      ...sectionAgenda
      ...pricingBox
      ...sectionAboutUs
    }
  }
`

export default GET_LANDING_PAGE
