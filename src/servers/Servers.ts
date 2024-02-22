import { axiosBase } from "@/config/axiosConfig"
import { IAchivment } from "@/types/Achivments"
import { Ilongreads } from "@/types/longreads"
import axios from "axios"

export const axiosServers = {
  async GetAchievements (num:number = 1) {
    const {data} = await axiosBase.get<IAchivment>(`/achivments/russian/?page=${num}&per_page=8&seed=87665`)
    return data.achivments
  },
  async GetLongreads () {
    const {data} = await axios.get<Ilongreads>('https://xn--d1acchc3adyj9k.xn--p1ai/api/longreads')
    return data.data
  }
}