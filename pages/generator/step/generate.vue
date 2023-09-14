<script setup lang="ts">
import { usePostersStore } from '@/stores/posters'

// // check permission
// definePageMeta({
//   middleware: 'permission'
// })

const postersStore = usePostersStore()
const requestData = useState('requestData', () => postersStore.sdRequestData)

const { pending: pending, data: poster, error: error } = useFetch('http://44.218.216.41:7860/sdapi/v1/txt2img', {
    method: 'post',
    lazy: true,
    body: requestData,
    onResponse({ request, response, options }) {
        postersStore.setResultImgBase64(response._data.images[0])
        return response._data
    },
    onResponseError({ request, response, options }) {
        console.log(error)
    }
})
</script>

<template>
    <Confirm v-if="!pending" />
    <Loading v-if="pending" />
</template>