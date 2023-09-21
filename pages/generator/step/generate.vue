<script setup lang="ts">
import { usePostersStore } from '@/stores/posters'
import imgFrameBase64 from '@/assets/imgFrameBase64'

// check permission
definePageMeta({
    middleware: 'permission'
})

const postersStore = usePostersStore()
const requestData = useState('requestData', () => postersStore.sdRequestData)
const loading = useState('loading', () => true)
const canvas = ref<HTMLCanvasElement | null>(null)

const { pending: pending, data: poster, error: error } = useFetch('https://127.0.0.1:7860/sdapi/v1/txt2img.', {
    method: 'post',
    lazy: true,
    body: requestData,
    onResponse({ request, response, options }) {
        return response._data
    },
    onResponseError({ request, response, options }) {
        console.log(error)
    }
})

const drawCanvas = async (imgBase64: string) => {
    if (!canvas.value) return
    const context = canvas.value.getContext('2d')
    canvas.value.width = 768
    canvas.value.height = 1024

    const img = new Image()
    img.src = `data:image/jpeg;base64, ${imgBase64}`

    const img2 = new Image()
    img2.src = `data:image/jpeg;base64, ${imgFrameBase64}`

    const drawImage = (image: HTMLImageElement) => {
        return new Promise((resolve) => {
            image.onload = () => {
                context.drawImage(image, 0, 0, 768, 1024)
                resolve()
            }
        })
    }

    await Promise.all([drawImage(img), drawImage(img2)])

    const mergedBase64 = canvas.value.toDataURL()
    postersStore.setResultImgBase64(mergedBase64)
}

onMounted(() => {
    if (postersStore.selectedMovie === null)
        navigateTo('/generator/step/select')

    loading.value = true
})

watch(pending, value => {
    if (!pending.value) {
        drawCanvas(poster._rawValue.images[0])
        loading.value = false
    }
})
</script>

<template>
    <Confirm v-if="!loading" />
    <Loading v-if="loading" />
    <canvas ref="canvas" class="poster"></canvas>
</template>

<style lang="scss" scoped>
.poster {
    width: 340px;
    height: auto;
    opacity: 0;
    position: absolute;
}
</style>