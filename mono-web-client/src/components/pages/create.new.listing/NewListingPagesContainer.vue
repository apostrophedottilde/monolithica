<template>
    <div class="container ">
            <div class="col-8 col-centered dimensions">
                <div v-if="stepsMap[newListingStep] === 'itemDetails'">
                    <item-details></item-details>
                </div>
                <div v-if="stepsMap[newListingStep] === 'listingDescription'">
                    <listing-description></listing-description>
                </div>
                <div v-if="stepsMap[newListingStep] === 'listingDuration'">
                    <listing-duration></listing-duration>
                </div>
                <div v-if="stepsMap[newListingStep] === 'imageUpload'">
                    <image-upload></image-upload>
                </div>
                <div v-if="stepsMap[newListingStep] === 'listingType'">
                    <listing-type></listing-type>
                </div>
                <div v-if="stepsMap[newListingStep] === 'price'">
                    <price></price>
                </div>
                <div v-if="stepsMap[newListingStep] === 'submit'">
                    <submit></submit>
                </div>
            </div>

            <input type="button" class="btn btn-outline-dark" v-on:click="previousStep" value="Back"></input>
            <input type="button" class="btn btn-outline-dark" v-on:click="nextStep" value="Next"></input>
            <input type="button" class="btn btn-outline-dark" v-on:click="postNewListing" value="Submit Listing"></input>
    </div>
</template>

<script>
    import ItemDetails from "./steps/ItemDetails";
    import ListingDescription from "./steps/ListingDescription";
    import ListingDuration from "./steps/ListingTypAndDuration";
    import ImageUpload from "./steps/ImageUpload";
    import ListingType from "./steps/ListingType";
    import Price from "./steps/Price";
    import Submit from "./steps/Submit";
    import axios from 'axios'
    import store from '../../../store'

    export default {
        name: "new-listing-pages-container",
        components: {Price, ListingType, ImageUpload, ListingDuration, ListingDescription, ItemDetails},
        data: () => {
            return {
                newListingStep: 0,
                stepsMap: [
                    "itemDetails",
                    "listingDescription",
                    "listingDuration",
                    "imageUpload",
                    "price"
                ],
            }
        },
        methods: {
            postNewListing: function () {
                let formData = new FormData();
                formData.append('image', store.getters.newListingForm.images[0]);
                const terminatesDate = Date.now() + 10000;
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
                            duration: data.duration
                        },
                        listingType: data.listingType,
                    },
                    {headers: {'Authorization': jwt}})
                    .then(res => {
                        console.log('listing was created ')
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
            },
            nextStep: function () {
                if (this.newListingStep < this.stepsMap.length - 1) {
                    this.newListingStep = this.newListingStep + 1
                }
                console.log('clicking left side panel')
            },
            previousStep: function () {
                if (this.newListingStep >= 1) {
                    this.newListingStep = this.newListingStep - 1
                }
                console.log('clicking right side panel')
            }
        }
    }
</script>

<style scoped>
.side-nav-panel {
    background: lightgray;
}

.dimensions {
    min-height: 320px;
}

.col-centered{
    float: none;
    margin: 0 auto;
}
</style>