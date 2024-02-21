export interface IAchivment {
  achivments: Achivment[]
  meta: Meta
}

export interface Achivment {
  id: number
  title: string
  subtitle: string
  description: string
  alias: string
  main_image: string
  publishedon: string
}

export interface Meta {
  page: number
  per_page: number
  total: number
  total_records: number
}