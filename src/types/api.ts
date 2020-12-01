export type techIcon = {
  title: string
  icon: {
    url: string
  }
}
export type ModulesProps = {
  title: string
  subtitle: string
  description: string
}
export type LogoProps = {
  alternativeText: string
  url: string
}
export type ButtonProps = {
  label: string
  url: string
}
export type HeaderProps = {
  title: string
  description: string
  image: LogoProps
  button: ButtonProps
}
export type SectionAboutProjectProps = {
  title: string
  description: string
  image: LogoProps
}
export type SectionTechProps = {
  title: string
  techIcons: Array<techIcon> // ou techIcon[]
}
export type SectionConceptsProps = {
  title: string
  concepts: Array<{ title: string }>
}
export type SectionModulesProps = {
  title: string
  modules: Array<ModulesProps>
}
export type SectionAgendaProps = {
  title: string
  description: string
}
export type PrincingBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  benefits: string
  button: ButtonProps
}
export type AuthorsArray = {
  name: string
  photo: LogoProps
  role: string
  socialLinks: Array<{
    title: string
    url: string
  }>
  description: string
}
export type SectionAboutUsProps = {
  title: string
  authors: Array<AuthorsArray>
}
export type Review = {
  name: string
  text: string
  photo: {
    url: string
  }
}
export type SectionReviewsProps = {
  title: string
  reviews: Review[]
}
export type Question = {
  question: string
  answer: string
}
export type SectionFaqProps = {
  title: string
  questions: Question[]
}
export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  pricingBox: PrincingBoxProps
  sectionAboutUs: SectionAboutUsProps
  sectionReviews: SectionReviewsProps
  sectionFaq: SectionFaqProps
}
