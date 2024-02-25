export interface IRegionalAchievementsMain {
  achivments: IRegionalAchievements[]
  meta: Meta
}

export interface IRegionalAchievements  {
  id: number
  title: string
  subtitle: string
  description: string
  alias: string
  main_image: string
  votes: number
  region: Region
  publishedon: string
}

export interface Region {
  id: number
  name: string
  alias: string
  geoname_id: number
}

export interface Meta {
  page: number
  per_page: number
  total: number
  total_records: number
}
