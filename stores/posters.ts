import { defineStore } from 'pinia'

const data: Array<MovieState> = [
    {
        name: "海角七號",
        year: 2008,
        // keywords: null
    },
    {
        name: "灣生回家",
        year: 2015,
        // keywords: []
    },
    {
        name: "誰先愛上他的",
        year: 2018,
        // keywords: []
    },
    {
        name: "我的少女時代",
        year: 2015,
        // keywords: []
    },
    {
        name: "當男人戀愛時",
        year: 2021,
        // keywords: []
    },
    {
        name: "月老",
        year: 2021,
        // keywords: []
    },
    {
        name: "KANO",
        year: 2014,
        // keywords: []
    },
]

interface MovieState {
    name: string
    year: number
    keywords?: [string]
}

interface State {
    movies: Array<MovieState>
    selfieBase64: string | null
    selectedMovie: number
}

export const usePostersStore = defineStore('posters', {
    state: (): State => ({
        movies: data,
        selfieBase64: null,
        selectedMovie: 0
    }),
    actions: {
        setSelectedMovie(selectedMovie: number): void {
            this.selectedMovie = selectedMovie
        },
        setSelfieBase64(imgBase64: string): void {
            this.selfieBase64 = imgBase64
        }
    },
    getters: {
    }
})