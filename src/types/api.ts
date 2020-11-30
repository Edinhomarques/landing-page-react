export type techIcon = {
  title: string
  icon: {
    url: string
  }
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
export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
}
