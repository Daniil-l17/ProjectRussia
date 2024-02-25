import { axiosBase } from "@/config/axiosConfig"
import { IAchivment } from "@/types/Achivments"
import { IDetailAchiments } from "@/types/DetailAchiments"
import {IRegionalAchievementsMain } from "@/types/RegionalAchievements"
import { Ilongreads } from "@/types/longreads"


export const axiosServers = {
  async GetAchievements (num:number) {
    const {data} = await axiosBase.get<IAchivment>(`/achivments/russian/?page=${num}&per_page=8&seed=87665`)
    return data.achivments
  },
  async GetLongreads () {
    const {data} = await axiosBase.get<Ilongreads>('/longreads')
    return data.data
  },
  async GetDetailAchievements (id:number) {
    const {data} = await axiosBase.get<IDetailAchiments>(`/achivments/russian/${id}`)
    return data
  },
  async GetRegionalAchievements (id:number) {
      const {data} = await axiosBase.get<IRegionalAchievementsMain>(`/achivments/regions?page=${id}&per_page=16&seed=8256`)
      return data
  }
}