import { defineStore } from 'pinia'
// import imgBase64 from 'assets/testImgBase64'

const movieData: Array<MovieState> = [
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

//ReActor arguments
const args = [
    // imgBase64,
    true,
    '0',
    '0',
    '',
    'None',
    1,
    true,
    'None',
    2,
    1,
    false,
    true,
    1,
    0,
    0,
    false
]

const prompt_value = "(masterpiece ,best quality:1.3) <lora:oldposter2:1>,  1girl ,solo, holding a book ,(school uniform,school ),(poster:0.6),round glasses, corridor,cowboy shot, happy,youth,classmate,classroom ,laughing,"
const negative_prompt_value = "(worst quality, low quality:1.4), (dusty sunbeams:1.0), (greyscale, monochrome:1.0),lowres,low quality,text,signature, artist name, copyright name, chinese text, glasses,sunglasses,man"

//設定預設的參數
const sdData = {
    "enable_hr": true,
    "denoising_strength": 0.3,
    "firstphase_width": 0,
    "firstphase_height": 0,
    "hr_scale": 2,
    "hr_upscaler": "Lanczos",
    "hr_second_pass_steps": 0,
    "hr_resize_x": 0,
    "hr_resize_y": 0,
    "hr_sampler_name": "",
    "hr_prompt": "",
    "hr_negative_prompt": "",
    "prompt": prompt_value,
    "styles": [""],
    "seed": -1,
    "subseed": -1,
    "subseed_strength": 0,
    "seed_resize_from_h": -1,
    "seed_resize_from_w": -1,
    "sampler_name": "DPM++ SDE Karras",
    "batch_size": 1,
    "n_iter": 1,
    "steps": 20,
    "cfg_scale": 5,
    "width": 512,
    "height": 768,
    "restore_faces": false,
    "tiling": false,
    "do_not_save_samples": false,
    "do_not_save_grid": false,
    "negative_prompt": negative_prompt_value,
    "eta": 0,
    "s_min_uncond": 0,
    "s_churn": 0,
    "s_tmax": 0,
    "s_tmin": 0,
    "s_noise": 1,
    "override_settings": {},
    "override_settings_restore_afterwards": true,
    "script_args": [],
    "sampler_index": "DPM++ SDE Karras",
    "script_name": "",
    "send_images": true,
    "save_images": false,
    "alwayson_scripts": { "reactor": { "args": args } }
}

interface State {
    movies: Array<MovieState>
    selfieBase64: string | null
    selectedMovie: number
    resultImgBase64: string | null
    sdRequestData: Object
}

export const usePostersStore = defineStore('posters', {
    state: (): State => ({
        movies: movieData,
        selfieBase64: null,
        selectedMovie: 0,
        resultImgBase64: null,
        sdRequestData: sdData
    }),
    actions: {
        setSelectedMovie(selectedMovie: number): void {
            this.selectedMovie = selectedMovie
        },
        setSelfieBase64(imgBase64: string): void {
            this.selfieBase64 = imgBase64

            this.sdRequestData.alwayson_scripts = { "reactor": { "args": [ imgBase64,...args] } }
        },
        setResultImgBase64(imgBase64: string): void {
            this.resultImgBase64 = imgBase64
        }
    },
    getters: {
    }
})