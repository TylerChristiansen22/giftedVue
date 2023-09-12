export class Gift {
    constructor(data) {
        this.tag = data.tag
        this.url = data.url || 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lmdCUyMGJveHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
        this.opened = data.opened
        this.creatorId = data.creatorId
        this.id = data.id
    }
}