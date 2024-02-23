export interface IDetailAchiments {
  id: number
  title: string
  subtitle: string
  description: string
  content: string
  alias: string
  main_image: string
  images: Image[]
  infograph: Infograph[]
  video: string
  publishedon: string
  seo_title: string
  seo_description: string
}

export interface Image {
  image: string
  id: string
}

export interface Infograph {
  image: string
  id: string
}