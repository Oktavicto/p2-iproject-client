import { defineStore } from "pinia";
import axios from "axios";

const BASE_URL = "http://localhost:3000";
export const useNbaStore = defineStore({
  id: "nba",
  state: () => ({}),
  getters: {},
  actions: {
    axiosStandings(season, conference) {
      return axios.post(`${BASE_URL}/nba/standings`, { season, conference });
    },

    axiosSeasons() {
      return axios.get(`${BASE_URL}/nba/seasons`)
    },

    axiosGames(season, date) {},
  },
});