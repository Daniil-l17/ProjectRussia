export interface Ilongreads {
  data: Ilongred[]
  meta: Meta
}

export interface Ilongred {
  id: string
  title: string
  subtitle: string
  alias: string
  image: string
  sphere: string
  publishedon: string
}

export interface Meta {
  page: number
  per_page: number
  total: number
  total_records: number
}