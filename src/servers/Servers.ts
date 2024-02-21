import { axiosBase } from "@/config/axiosConfig"
import { IAchivment } from "@/types/Achivments"

export const axiosServers = {
  async GetAchievements (num:number = 1) {
    const {data} = await axiosBase.get<IAchivment>(`/?page=${num}&per_page=8&seed=87665`)
    return data.achivments
  }
}