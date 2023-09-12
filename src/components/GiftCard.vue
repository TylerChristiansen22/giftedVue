<template>
    <div @click="openGift()" class="col-4 card my-1">
        <img class="img-fluid" :src="gift.url" alt="bad gift img">
        <span>{{ gift.tag }}</span>
    </div>
</template>


<script>
import { Gift } from '../models/Gift.js';
import { giftsService } from '../services/GiftsService.js';
import Pop from '../utils/Pop.js';

export default {
    props: { gift: { type: Gift, required: true } },
    setup(props) {
        return {
            async openGift() {
                try {
                    const giftId = props.gift.id
                    await giftsService.openGift(giftId)
                } catch (error) {
                    Pop.error(error)
                }
            }
        }
    }
}
</script>


<style lang="scss" scoped></style>