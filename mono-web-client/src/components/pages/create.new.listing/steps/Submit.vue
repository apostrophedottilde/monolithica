<template>
    <form>
        <div class="form-group">
            <label>Do you want to submit the listing</label>
            <input v-on:click="postNewListing" type="button" class="btn btn-dark"></input>
        </div>
    </form>
</template>

<script>

    import axios from 'axios'
    import store from '../../../../store'
    export default {
        name: "submit",
        methods: {
            postNewListing: function () {
                let formData = new FormData();
                formData.append('image', this.images[0]);
                const jwt = this.$cookie.get('jwt');
                console.log(jwt);
                const data = store.getters.newListingForm;
                axios.post('http://localhost:9000/api/v1/listings',
                    {
                        item: {
                            title: data.title,
                            itemType: data.itemType,
                            briefDescription: data.briefDescription,
                            fullDescription: data.fullDescription
                        },
                        listingLifetime: {
                            listingBegins: data.listingBegins,
                            duration: data.duration,
                        },
                        listingType: data.listingType
                    },
                    {headers: {'Authorization': jwt}})
                    .then(res => {
                        console.log('listing was created ');
                        console.log(res);
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