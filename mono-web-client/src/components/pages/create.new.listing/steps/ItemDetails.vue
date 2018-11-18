<template>
    <form>
        <div class="form-group">
            <label>Title</label>
            <input :value="title" @input="updateTitle" type="text" formControlName="title" class="form-control"/>
        </div>

        <label >Item type</label>
        <select :value="itemType" @input="updateItemType" name="itemType" formControlName="itemType" class="form-control">
            <option value="Anime">Anime</option>
            <option value="Manga">Manga</option>
            <option value="Collectables">Collectables</option>
            <option value="ComputerGame">Computer Game</option>
            <option value="TabletopGame">Tabletop Game</option>
            <option value="Figurine">Figurine</option>
            <option value="Book">Book</option>
        </select>

        <item-tag-management></item-tag-management>

    </form>
</template>

<script>
    import axios from 'axios'
    import store from '../../../../store'

    export default {
        name: 'new-listing-form',
        computed: {
            title: function() {
                return store.getters.newListingForm.title
            },
            itemType: function() {
                return store.getters.newListingForm.itemType
            }
        },
        created: function() {
            store.commit('switchedToCreateNewListingPage')
        },
        methods: {
            updateTitle (e) {
                store.commit('updateTitle', e.target.value)
            },
            updateItemType (e) {
                store.commit('updateItemType', e.target.value)
            },
            logChange: function (event){
                this.images.push(event[0])
                console.log('logging change to files list ' + event)
            },
            postNewListing: function () {
                let formData = new FormData();
                formData.append('image', this.images[0]);
                const terminatesDate = Date.now() + 10000;
                const jwt = this.$cookie.get('jwt');
                console.log(jwt);
                axios.post('http://localhost:9000/api/v1/listings',
                    {
                        item: {
                            title: this.title,
                            itemType: this.itemType,
                            briefDescription: this.briefDescription,
                            fullDescription: this.fullDescription
                        },
                        listingLifetime: {
                            auctionBeginsTime: Date.now(),
                            auctionEndsTime: terminatesDate
                        },
                        listingType: this.listingType,
                        state: 'LIVE',
                        bids: [],
                        highBid: {},
                        numBids: 0
                    },
                    {headers: {'Authorization': jwt}})
                    .then(res => {
                        console.log('listing was created ')
                        console.log(res)
                        return res
                    })
                    .then(res => {
                        console.log('now going to upload files(s) for the newly created listing........ ')
                        const id = res.data._id;
                        return axios.put(`http://localhost:9000/api/v1/listings/${id}/images`, formData, {
                            headers: {
                                'Content-Type': 'multipart/form-data',
                                'Authorization': jwt
                            }
                        })
                        return id
                    })
                    .then(res => {
                        console.log(`.......successfully upload images for listing ${res}`)
                    })
                    .catch(error => {
                        console.error(error)
                    })
            }
        }
    }
</script>

<style scoped>

</style>