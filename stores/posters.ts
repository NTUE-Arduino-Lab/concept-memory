import { defineStore } from 'pinia'
// import imgBase64 from 'assets/testImgBase64'
import frame1 from '@/assets/img/outline/frame1'
import frame2 from '@/assets/img/outline/frame2'
import frame3 from '@/assets/img/outline/frame3'
import frame4 from '@/assets/img/outline/frame4'
import frame5 from '@/assets/img/outline/frame5'
import frame6 from '@/assets/img/outline/frame6'
import frame7 from '@/assets/img/outline/frame7'
import frame8 from '@/assets/img/outline/frame8'
import frame9 from '@/assets/img/outline/frame9'
import frame10 from '@/assets/img/outline/frame10'
import frame11 from '@/assets/img/outline/frame11'
import frame12 from '@/assets/img/outline/frame12'
import frame13 from '@/assets/img/outline/frame13'
import frame14 from '@/assets/img/outline/frame14'
import frame15 from '@/assets/img/outline/frame15'
import frame16 from '@/assets/img/outline/frame16'
import frame17 from '@/assets/img/outline/frame17'
import frame18 from '@/assets/img/outline/frame18'
import frame20 from '@/assets/img/outline/frame20'
import frame21 from '@/assets/img/outline/frame21'

const movieData: Array<MovieState> = [
    {
        name: "海角七號",
        year: 2008,
        prompt_value: "(masterpiece ,best quality:1.3) <lora:oldposter2:1>,(poster:0.6),hug each other at the beach, sunset, a man, a woman, romantic, look forward, asian, medium shot, T-shirt, jeans, skirt",
        negative_prompt_value: "(worst quality, low quality:1.4), (dusty sunbeams:1.0), (greyscale, monochrome:1.0),lowres,low quality,text,signature, artist name, copyright name, chinese text,​​lowres, bad anatomy, bad hands, text,error, missing fngers,extra digt ,fewer digits,cropped, wort quality ,low quality,normal quality, jpeg artifacts,signature,watermark, username, blurry, bad feet​​lowres, bad anatomy, bad hands, text,error, missing fngers,extra digt ,fewer digits,cropped, wort quality ,low quality,normal quality, jpeg artifacts,signature,watermark, username, blurry, bad feet,",
        id: 1,
        frame: frame1
    },
    {
        name: "那些年，我們一起追的女孩",
        year: 2011,
        prompt_value: "(masterpiece ,best quality:1.3) <lora:oldposter2:1>,(poster:0.6),sitting on the breakwater, a boy, a girl, sunny, college student, smile, full body, t-shirt, short pants, looking away, asian, ",
        negative_prompt_value: "(worst quality, low quality:1.4), (dusty sunbeams:1.0), (greyscale, monochrome:1.0),lowres,low quality,text,signature, artist name, copyright name, chinese text,​​lowres, bad anatomy, bad hands, text,error, missing fngers,extra digt ,fewer digits,cropped, wort quality ,low quality,normal quality, jpeg artifacts,signature,watermark, username, blurry, bad feet​​lowres, bad anatomy, bad hands, text,error, missing fngers,extra digt ,fewer digits,cropped, wort quality ,low quality,normal quality, jpeg artifacts,signature,watermark, username, blurry, bad feet,",
        id: 2,
        frame: frame2
    },
    {
        name: "我的少女時代",
        year: 2015,
        prompt_value: "(masterpiece ,best quality:1.3) <lora:oldposter2:1>,(poster:0.6),holding books, a boy and a girl, laugh, school uniform, satchel bag, school, classroom, asian, bob cut, glasses,",
        negative_prompt_value: "(worst quality, low quality:1.4), (dusty sunbeams:1.0), (greyscale, monochrome:1.0),lowres,low quality,text,signature, artist name, copyright name, chinese text,​​lowres, bad anatomy, bad hands, text,error, missing fngers,extra digt ,fewer digits,cropped, wort quality ,low quality,normal quality, jpeg artifacts,signature,watermark, username, blurry, bad feet​​lowres, bad anatomy, bad hands, text,error, missing fngers,extra digt ,fewer digits,cropped, wort quality ,low quality,normal quality, jpeg artifacts,signature,watermark, username, blurry, bad feet,",
        id: 3,
        frame: frame3
    },
    {
        name: "當男人戀愛時",
        year: 2021,
        prompt_value: "(masterpiece ,best quality:1.3) <lora:oldposter2:1>,(poster:0.6),couple, a man wear an unbuttoned floral shirt, a woman wear an uniform, siting on the rooftop staircase and eating ice popsicles, medium shot,",
        negative_prompt_value: "(worst quality, low quality:1.4), (dusty sunbeams:1.0), (greyscale, monochrome:1.0),lowres,low quality,text,signature, artist name, copyright name, chinese text,​​lowres, bad anatomy, bad hands, text,error, missing fngers,extra digt ,fewer digits,cropped, wort quality ,low quality,normal quality, jpeg artifacts,signature,watermark, username, blurry, bad feet​​lowres, bad anatomy, bad hands, text,error, missing fngers,extra digt ,fewer digits,cropped, wort quality ,low quality,normal quality, jpeg artifacts,signature,watermark, username, blurry, bad feet,",
        id: 4,
        frame: frame4
    },
    {
        name: "月老",
        year: 2021,
        prompt_value: "(masterpiece ,best quality:1.3) <lora:oldposter2:1>,(poster:0.6),a woman with pink hair and a man with black hair, index finger with red line, school uniform, fantasy, street scenery, night, halo light surrounds them, looking at finder, Asian, magic",
        negative_prompt_value: "(worst quality, low quality:1.4), (dusty sunbeams:1.0), (greyscale, monochrome:1.0),lowres,low quality,text,signature, artist name, copyright name, chinese text,​​lowres, bad anatomy, bad hands, text,error, missing fngers,extra digt ,fewer digits,cropped, wort quality ,low quality,normal quality, jpeg artifacts,signature,watermark, username, blurry, bad feet​​lowres, bad anatomy, bad hands, text,error, missing fngers,extra digt ,fewer digits,cropped, wort quality ,low quality,normal quality, jpeg artifacts,signature,watermark, username, blurry, bad feet,",
        id: 5,
        frame: frame5
    },
    {
        name: "KANO",
        year: 2014,
        prompt_value: "(masterpiece ,best quality:1.3) <lora:oldposter2:1>,(poster:0.6),a baseball team in front of a stadium, pitcher, baseball, Asian, a person, Asian, close up portrait.",
        negative_prompt_value: "(worst quality, low quality:1.4), (dusty sunbeams:1.0), (greyscale, monochrome:1.0),lowres,low quality,text,signature, artist name, copyright name, chinese text,​​lowres, bad anatomy, bad hands, text,error, missing fngers,extra digt ,fewer digits,cropped, wort quality ,low quality,normal quality, jpeg artifacts,signature,watermark, username, blurry, bad feet​​lowres, bad anatomy, bad hands, text,error, missing fngers,extra digt ,fewer digits,cropped, wort quality ,low quality,normal quality, jpeg artifacts,signature,watermark, username, blurry, bad feet,",
        id: 6,
        frame: frame6
    },
    {
        name: "返校",
        year: 2019,
        prompt_value: "(masterpiece ,best quality:1.3) <lora:oldposter2:1>,(poster:0.6),a student, , (holding a red lit candle:1.3), standing on the school hall way, horror, Asian, dark, bob cut, white blouse and a black knee-length pleated skirt",
        negative_prompt_value: "(worst quality, low quality:1.4), (dusty sunbeams:1.0), (greyscale, monochrome:1.0),lowres,low quality,text,signature, artist name, copyright name, chinese text,​​lowres, bad anatomy, bad hands, text,error, missing fngers,extra digt ,fewer digits,cropped, wort quality ,low quality,normal quality, jpeg artifacts,signature,watermark, username, blurry, bad feet​​lowres, bad anatomy, bad hands, text,error, missing fngers,extra digt ,fewer digits,cropped, wort quality ,low quality,normal quality, jpeg artifacts,signature,watermark, username, blurry, bad feet,",
        id: 7,
        frame: frame7
    },
    {
        name: "關於我和鬼變成家人的那件事",
        year: 2023,
        prompt_value: "(Masterpiece, best quality: 1.3) <lora:oldposter2:1>,(poster:0.6),two men, (police uniform: 1.3),  a red sweater, Taiwanese temple roof background, yellow warning tape, facing the camera, wide angle shot, dynamic composition",
        negative_prompt_value: "(worst quality, low quality:1.4), (dusty sunbeams:1.0), (greyscale, monochrome:1.0),lowres,low quality,text,signature, artist name, copyright name, chinese text,​​lowres, bad anatomy, bad hands, text,error, missing fngers,extra digt ,fewer digits,cropped, wort quality ,low quality,normal quality, jpeg artifacts,signature,watermark, username, blurry, bad feet​​lowres, bad anatomy, bad hands, text,error, missing fngers,extra digt ,fewer digits,cropped, wort quality ,low quality,normal quality, jpeg artifacts,signature,watermark, username, blurry, bad feet,",
        id: 8,
        frame: frame8
    },
    {
        name: "比悲傷更悲傷的故事",
        year: 2018,
        prompt_value: "(masterpiece ,best quality:1.3) <lora:oldposter2:1>,(poster:0.6),coffee shop, a couple is drinking coffee, sitting by the windows, rainning outside",
        negative_prompt_value: "(worst quality, low quality:1.4), (dusty sunbeams:1.0), (greyscale, monochrome:1.0),lowres,low quality,text,signature, artist name, copyright name, chinese text,​​lowres, bad anatomy, bad hands, text,error, missing fngers,extra digt ,fewer digits,cropped, wort quality ,low quality,normal quality, jpeg artifacts,signature,watermark, username, blurry, bad feet​​lowres, bad anatomy, bad hands, text,error, missing fngers,extra digt ,fewer digits,cropped, wort quality ,low quality,normal quality, jpeg artifacts,signature,watermark, username, blurry, bad feet,",
        id: 9,
        frame: frame9
    },
    {
        name: "紅衣小女孩2",
        year: 2019,
        prompt_value: "(masterpiece, best quality: 1.3) <lora:oldposter2:1>,(poster:0.6), a little girl in a red dress, squatting on the ground, pale, amusement park ruins, horror, Asia, dark, broken, cloudy, weird atmosphere, spooky creepy",
        negative_prompt_value: "(worst quality, low quality:1.4), (dusty sunbeams:1.0), (greyscale, monochrome:1.0),lowres,low quality,text,signature, artist name, copyright name, chinese text,​​lowres, bad anatomy, bad hands, text,error, missing fngers,extra digt ,fewer digits,cropped, wort quality ,low quality,normal quality, jpeg artifacts,signature,watermark, username, blurry, bad feet​​lowres, bad anatomy, bad hands, text,error, missing fngers,extra digt ,fewer digits,cropped, wort quality ,low quality,normal quality, jpeg artifacts,signature,watermark, username, blurry, bad feet,",
        id: 10,
        frame: frame10
    },
    {
        name: "痞子英雄首部曲：全面開戰",
        year: 2012,
        prompt_value: "(masterpiece ,best quality:1.3) <lora:oldposter2:1>,(poster:0.6),criminal police, mafia, running and holding guns on the road, building was exploded. Asian",
        negative_prompt_value: "(worst quality, low quality:1.4), (dusty sunbeams:1.0), (greyscale, monochrome:1.0),lowres,low quality,text,signature, artist name, copyright name, chinese text,​​lowres, bad anatomy, bad hands, text,error, missing fngers,extra digt ,fewer digits,cropped, wort quality ,low quality,normal quality, jpeg artifacts,signature,watermark, username, blurry, bad feet​​lowres, bad anatomy, bad hands, text,error, missing fngers,extra digt ,fewer digits,cropped, wort quality ,low quality,normal quality, jpeg artifacts,signature,watermark, username, blurry, bad feet,",
        id: 11,
        frame: frame11
    },
    {
        name: "等一個人咖啡",
        year: 2014,
        prompt_value: "(masterpiece ,best quality:1.3) <lora:oldposter2:1>,(poster:0.6),couple, coffee shop, drinking coffee, sitting by the windows, raining outside, close shot, Asian, T-shirt, jeans, ",
        negative_prompt_value: "(worst quality, low quality:1.4), (dusty sunbeams:1.0), (greyscale, monochrome:1.0),lowres,low quality,text,signature, artist name, copyright name, chinese text,​​lowres, bad anatomy, bad hands, text,error, missing fngers,extra digt ,fewer digits,cropped, wort quality ,low quality,normal quality, jpeg artifacts,signature,watermark, username, blurry, bad feet​​lowres, bad anatomy, bad hands, text,error, missing fngers,extra digt ,fewer digits,cropped, wort quality ,low quality,normal quality, jpeg artifacts,signature,watermark, username, blurry, bad feet,",
        id: 12,
        frame: frame12
    },
    {
        name: "孤味",
        year: 2017,
        prompt_value: "(masterpiece ,best quality:1.3) <lora:oldposter2:1>,(poster:0.6),grandmother and woman are cooking together, happiness, kitchen, Asian",
        negative_prompt_value: "(worst quality, low quality:1.4), (dusty sunbeams:1.0), (greyscale, monochrome:1.0),lowres,low quality,text,signature, artist name, copyright name, chinese text,​​lowres, bad anatomy, bad hands, text,error, missing fngers,extra digt ,fewer digits,cropped, wort quality ,low quality,normal quality, jpeg artifacts,signature,watermark, username, blurry, bad feet​​lowres, bad anatomy, bad hands, text,error, missing fngers,extra digt ,fewer digits,cropped, wort quality ,low quality,normal quality, jpeg artifacts,signature,watermark, username, blurry, bad feet,",
        id: 13,
        frame: frame13
    },
    {
        name: "樓下的房客",
        year: 2016,
        prompt_value: "(Masterpiece, best quality: 1.3) <lora:oldposter2:1>,(poster:0.6),A psychotic man wear green and plaid nightgown and sits in front of many monitors, the wall background is filled with nine screens which no signal, evil smile, Asian, strange, dark room, nervous, anchor beard, neon lamp,",
        negative_prompt_value: "(worst quality, low quality:1.4), (dusty sunbeams:1.0), (greyscale, monochrome:1.0),lowres,low quality,text,signature, artist name, copyright name, chinese text,​​lowres, bad anatomy, bad hands, text,error, missing fngers,extra digt ,fewer digits,cropped, wort quality ,low quality,normal quality, jpeg artifacts,signature,watermark, username, blurry, bad feet​​lowres, bad anatomy, bad hands, text,error, missing fngers,extra digt ,fewer digits,cropped, wort quality ,low quality,normal quality, jpeg artifacts,signature,watermark, username, blurry, bad feet,",
        id: 14,
        frame: frame14
    },
    {
        name: "色，戒",
        year: 2007,
        prompt_value: "(masterpiece ,best quality:1.3) <lora:oldposter2:1>,(poster:0.6),couple, a woman wears green cheongsam and a man wear black suit and sits on the wood chair, hotel room, Asian, night shanghai, mystery",
        negative_prompt_value: "(worst quality, low quality:1.4), (dusty sunbeams:1.0), (greyscale, monochrome:1.0),lowres,low quality,text,signature, artist name, copyright name, chinese text,​​lowres, bad anatomy, bad hands, text,error, missing fngers,extra digt ,fewer digits,cropped, wort quality ,low quality,normal quality, jpeg artifacts,signature,watermark, username, blurry, bad feet​​lowres, bad anatomy, bad hands, text,error, missing fngers,extra digt ,fewer digits,cropped, wort quality ,low quality,normal quality, jpeg artifacts,signature,watermark, username, blurry, bad feet,",
        id: 15,
        frame: frame15
    },
    {
        name: "不能說的·秘密",
        year: 2007,
        prompt_value: "(masterpiece ,best quality:1.3) <lora:oldposter2:1>,(poster:0.6),A couple, school uniform, sitting on the riverbank, back-to-back, Asian, sunset, close up portrait, music story.",
        negative_prompt_value: "(worst quality, low quality:1.4), (dusty sunbeams:1.0), (greyscale, monochrome:1.0),lowres,low quality,text,signature, artist name, copyright name, chinese text,​​lowres, bad anatomy, bad hands, text,error, missing fngers,extra digt ,fewer digits,cropped, wort quality ,low quality,normal quality, jpeg artifacts,signature,watermark, username, blurry, bad feet​​lowres, bad anatomy, bad hands, text,error, missing fngers,extra digt ,fewer digits,cropped, wort quality ,low quality,normal quality, jpeg artifacts,signature,watermark, username, blurry, bad feet,",
        id: 16,
        frame: frame16
    },
    {
        name: "藍色大門",
        year: 2002,
        prompt_value: "(masterpiece ,best quality:1.3) <lora:oldposter2:1>,(poster:0.6),a couple, sitting on the top floor, school uniform, school, smile, sky, sunny, romantic, Asian",
        negative_prompt_value: "(worst quality, low quality:1.4), (dusty sunbeams:1.0), (greyscale, monochrome:1.0),lowres,low quality,text,signature, artist name, copyright name, chinese text,​​lowres, bad anatomy, bad hands, text,error, missing fngers,extra digt ,fewer digits,cropped, wort quality ,low quality,normal quality, jpeg artifacts,signature,watermark, username, blurry, bad feet​​lowres, bad anatomy, bad hands, text,error, missing fngers,extra digt ,fewer digits,cropped, wort quality ,low quality,normal quality, jpeg artifacts,signature,watermark, username, blurry, bad feet,",
        id: 17,
        frame: frame17
    },
    {
        name: "一家子兒咕咕叫",
        year: 2022,
        prompt_value: "(masterpiece ,best quality:1.3) <lora:oldposter2:1>,(poster:0.6),Family members stand on the grassy field, gazing at the sky. Someone releases racing pigeons. close up portrait, Asian,",
        negative_prompt_value: "(worst quality, low quality:1.4), (dusty sunbeams:1.0), (greyscale, monochrome:1.0),lowres,low quality,text,signature, artist name, copyright name, chinese text,​​lowres, bad anatomy, bad hands, text,error, missing fngers,extra digt ,fewer digits,cropped, wort quality ,low quality,normal quality, jpeg artifacts,signature,watermark, username, blurry, bad feet​​lowres, bad anatomy, bad hands, text,error, missing fngers,extra digt ,fewer digits,cropped, wort quality ,low quality,normal quality, jpeg artifacts,signature,watermark, username, blurry, bad feet,",
        id: 18,
        frame: frame18
    },
    {
        name: "消失的情人節",
        year: 2020,
        prompt_value: "(masterpiece ,best quality:1.3) <lora:oldposter2:1>,(poster:0.6),A man is a bus driver, closing his eyes, (holding a camera:1.3), smiling, front view, Asian, beach car window background,",
        negative_prompt_value: "(worst quality, low quality:1.4), (dusty sunbeams:1.0), (greyscale, monochrome:1.0),lowres,low quality,text,signature, artist name, copyright name, chinese text,​​lowres, bad anatomy, bad hands, text,error, missing fngers,extra digt ,fewer digits,cropped, wort quality ,low quality,normal quality, jpeg artifacts,signature,watermark, username, blurry, bad feet​​lowres, bad anatomy, bad hands, text,error, missing fngers,extra digt ,fewer digits,cropped, wort quality ,low quality,normal quality, jpeg artifacts,signature,watermark, username, blurry, bad feet,",
        id: 20,
        frame: frame20
    },
    {
        name: "陣頭",
        year: 2012,
        prompt_value: "(masterpiece ,best quality:1.3) <lora:oldposter2:1>,(poster:0.6),A person, (playing a large drum:1.3),Taiko , standing, in front of the Taiwanese temple gate, open mouth, exciting, Asian, culture, intense expression",
        negative_prompt_value: "(worst quality, low quality:1.4), (dusty sunbeams:1.0), (greyscale, monochrome:1.0),lowres,low quality,text,signature, artist name, copyright name, chinese text,​​lowres, bad anatomy, bad hands, text,error, missing fngers,extra digt ,fewer digits,cropped, wort quality ,low quality,normal quality, jpeg artifacts,signature,watermark, username, blurry, bad feet​​lowres, bad anatomy, bad hands, text,error, missing fngers,extra digt ,fewer digits,cropped, wort quality ,low quality,normal quality, jpeg artifacts,signature,watermark, username, blurry, bad feet,",
        id: 21,
        frame: frame21
    }
]

interface MovieState {
    name: string
    year: number
    prompt_value: string
    negative_prompt_value: string
    id: number
    frame: string
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
    downloadUrl: string | null
}

export const usePostersStore = defineStore('posters', {
    state: (): State => ({
        movies: movieData,
        selfieBase64: null,
        selectedMovie: null,
        resultImgBase64: null,
        sdRequestData: sdData,
        resultImgName: null,
        downloadUrl: null
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
        setDownloadUrl(url: string | null): void {
            this.downloadUrl = url
        }
    },
    getters: {
    }
})