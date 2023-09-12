<template>
    <form @submit.prevent="sendGift">
        <input v-model="tagForm" type="text" class="form-control" placeholder="tag">
        <input v-model="urlForm" type="text" class="form-control" placeholder="url">
        <button type="submit">Send Gift</button>
    </form>
</template>


<script>
import { ref } from 'vue';
import Pop from '../utils/Pop.js';
import { giftsService } from '../services/GiftsService.js';
import { logger } from '../utils/Logger.js';

export default {
    setup() {
        const urlForm = ref('')
        const tagForm = ref('')
        return {
            urlForm,
            tagForm,
            async sendGift() {
                try {
                    let giftData = {
                        url: urlForm.value,
                        tag: tagForm.value
                    }
                    logger.log(giftData)
                    await giftsService.sendGift(giftData)
                } catch (error) {
                    Pop.error(error)
                }
            }

        }
    }
}
</script>


<style lang="scss" scoped></style>