import { defineStore } from 'pinia'
// import imgBase64 from 'assets/testImgBase64'

const movieData: Array<MovieState> = [
    {
        name: "海角七號",
        year: 2008,
        prompt_value: "(masterpiece ,best quality:1.3) <lora:oldposter2:1>, ,(poster:0.6), man standing on a beach next to the ocean with a stamp on it that says cape no 7,sunset,postmark,solo,1man,shirt pants,",
        negative_prompt_value: " (worst quality, low quality:1.4), (dusty sunbeams:1.0), (greyscale, monochrome:1.0),lowres,low quality,text,signature, artist name, copyright name, chinese text, glasses,sunglasses,",
        id: 0
    },
    {
        name: "我的少女時代",
        year: 2015,
        prompt_value: "(masterpiece ,best quality:1.3) <lora:oldposter2:1>,  1girl ,solo, holding a book ,(school uniform,school ),(poster:0.6),round glasses, corridor,cowboy shot, happy,youth,classmate,classroom ,laughing,",
        negative_prompt_value: "(worst quality, low quality:1.4), (dusty sunbeams:1.0), (greyscale, monochrome:1.0),lowres,low quality,text,signature, artist name, copyright name, chinese text, glasses,sunglasses,man",
        id: 3
    },
    {
        name: "當男人戀愛時",
        year: 2021,
        prompt_value: "(masterpiece ,best quality:1.3) <lora:oldposter2:1> a man sitting on a ladder eating popsicle, serial art,1man,ladder",
        negative_prompt_value: "(worst quality, low quality:1.4), (dusty sunbeams:1.0), (greyscale, monochrome:1.0),lowres,low quality,text,chinese text, signature, watermark,",
        id: 4
    },
    {
        name: "月老",
        year: 2021,
        prompt_value: "(masterpiece ,best quality:1.3) <lora:oldposter2:1> a man standing in front of a city street with a cross on it,(school uniform suit), red string ,(poster:0.6),neo-romanticism,upper body, close up,",
        negative_prompt_value: "(worst quality, low quality:1.4), (dusty sunbeams:1.0), (greyscale, monochrome:1.0),lowres,low quality,text,signature, artist name, copyright name, chinese text, glasses,sunglasses,1girl,woman,long hair",
        
        id: 5
    },
    {
        name: "KANO",
        year: 2014,
        prompt_value: "(masterpiece ,best quality:1.3) <lora:oldposter2:1>, a baseball team in front of a stadium,pitcher solo, baseball,asian ,(poster:0.6),1boy,",
        negative_prompt_value: "(worst quality, low quality:1.4), (dusty sunbeams:1.0), (greyscale, monochrome:1.0),lowres,low quality,text,signature, artist name, copyright name, chinese text,",
        id: 6
    },
]

interface MovieState {
    name: string
    year: number
    prompt_value: string
    negative_prompt_value: string
    id: number
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
    //"prompt":  prompt_value
    "prompt": null,
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
    "width": 480,
    "height": 640,
    "restore_faces": false,
    "tiling": false,
    "do_not_save_samples": false,
    "do_not_save_grid": false,
    //"negative_prompt": negative_prompt_value
    "negative_prompt": null,
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
    selectedMovie: number | null
    resultImgBase64: string | null
    sdRequestData: Object
    resultImgName: string | null
    qrcodeUrl: string | null
}

export const usePostersStore = defineStore('posters', {
    state: (): State => ({
        movies: movieData,
        selfieBase64: null,
        selectedMovie: null,
        resultImgBase64: null,
        sdRequestData: sdData,
        resultImgName: null,
        qrcodeUrl: null
    }),
    actions: {
        setSelectedMovie(selectedMovie: number): void {
            this.selectedMovie = selectedMovie

            this.sdRequestData.prompt = movieData[selectedMovie].prompt_value
            this.sdRequestData.negative_prompt = movieData[selectedMovie].negative_prompt_value
        },
        setSelfieBase64(imgBase64: string | null): void {
            this.selfieBase64 = imgBase64

            this.sdRequestData.alwayson_scripts = { "reactor": { "args": [ imgBase64,...args] } }
        },
        setResultImgBase64(imgBase64: string): void {
            this.resultImgBase64 = imgBase64
        },
        setResultImgName(name: string): void {
            this.resultImgName = name
        },
        setQrcodeUrl(url: string): void {
            this.qrcodeUrl = url
        }
    },
    getters: {
    }
})