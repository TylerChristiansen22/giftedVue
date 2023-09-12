import { AppState } from "../AppState.js"
import { Gift } from "../models/Gift.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class GiftsService {
    async getGifts() {
        const res = await api.get('api/gifts')
        logger.log("Got Gifts, ", res.data)
        AppState.gifts = res.data.map(gift => new Gift(gift))
        logger.log(AppState.gifts)
    }

    async openGift(giftId) {
        const foundGift = AppState.gifts.find(gift => gift.id == giftId)
        foundGift.opened = true
        logger.log(foundGift.opened)
        let giftIndex = AppState.gifts.indexOf(foundGift)
        // find the position of this gift in the array
        // splice it out and replace it with the updated info
        // logger.log(foundGift)
        const res = await api.put(`api/gifts/${giftId}`, foundGift)
        let updatedGift = new Gift(res.data)
        AppState.gifts.splice(giftIndex, 1, updatedGift)
    }

    async sendGift(giftData) {
        const res = await api.post('api/gifts', giftData)
        const newGift = new Gift(res.data)
        AppState.gifts.unshift(newGift)

    }
}


export const giftsService = new GiftsService()