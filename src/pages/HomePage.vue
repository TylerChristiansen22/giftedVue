<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-4">
        <GiftForm />
      </div>
      <div class="col-8">
        <div class="row">
          <GiftCard v-for="g in gifts" :key="g.id" :gift="g" />
        </div>
      </div>
    </div>
  </div>
  <!-- <div>{{ gifts }}</div> -->
</template>

<script>
import { computed, onMounted, onUpdated } from 'vue'
import { giftsService } from '../services/GiftsService.js'
import Pop from '../utils/Pop.js'
import { AppState } from '../AppState.js'


export default {
  setup() {
    onMounted(getGifts)
    // onUpdated(getGifts)
    async function getGifts() {
      try {
        await giftsService.getGifts()
      } catch (error) {
        Pop.error(error)
      }
    }
    return {
      getGifts,
      gifts: computed(() => AppState.gifts)
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
