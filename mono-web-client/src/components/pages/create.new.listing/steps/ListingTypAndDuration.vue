<template>
    <form>
        <div class="form-group row">
            <label class="col-md-4 col-form-label">Listing Type</label>
            <div class="col-md-8">
                <select :value="listingType" @input="updateListingType" class="form-control" formControlName="listingType">
                    <option value="BUY_NOW">Buy-Now</option>
                    <option value="AUCTION">Auction</option>
                    <option value="SILENT_AUCTION">Silent Auction</option>
                    <option value="TRADE">Trade-it</option>
                    <option value="GIVAWAY">Givaway</option>
                    <option value="WANTED">Wanted</option>
                </select>
            </div>
        </div>

        <div v-if="listingType">
            <div class="form-group row">
                <label class="col-md-4 col-form-label">Start Time</label>
                <div class="col-md-8">
                    <datetime type="datetime" v-model="startDateTime" @input="updateListingBegins" format="yyyy-MM-dd HH:mm:ss" class="form-control" formControlName="startDateTime" ></datetime>
                </div>
            </div>
        </div>

        <div v-if="listingType === 'AUCTION'">
            <div class="form-group row">
                <label class="col-md-4 col-form-label">Auction Duration</label>
                <div class="col-md-8">
                    <b-form-group>
                        <b-form-radio-group v-model="duration" @input="updateDuration" buttons button-variant="outline-dark" size="md" :options="auctionDurationOptions" name="radioBtnOutline" />
                    </b-form-group>
                </div>
            </div>
        </div>

        <div v-if="listingType === 'BUY_NOW'">
            <div class="form-group row">
                <label class="col-md-4 col-form-label">Buy-Now Duration</label>
                <div class="col-md-8">
                    <label>End time</label>
                    <b-form-group>
                        <b-form-radio-group v-model="duration" @input="updateDuration" buttons button-variant="outline-dark" size="md" :options="buyNowDurationOptions" name="radioBtnOutline" />
                    </b-form-group>
                </div>
            </div>
        </div>

    </form>
</template>

<script>
    import store from '../../../../store'

    export default {
        name: "listing-duration",
        data () {
            return {
                auctionDurationSelected: 'radio1',
                buyNowDurationSelected: 'radio2',
                auctionDurationOptions: [
                    { text: '10 seconds', value: '10seconds' },
                    { text: '3 hours', value: '3hours' },
                    { text: '1 day', value: '1day' },
                    { text: '3 days', value: '3days' },
                    { text: '7 days', value: '7days', disabled: true },
                    { text: '14 days', value: '14days' },
                    { text: '28 days', value: '28days' }
                ],
                buyNowDurationOptions: [
                    { text: '7 days', value: '7days', disabled: true },
                    { text: '14 days', value: '14days' },
                    { text: '28 days', value: '28days' }
                ]
            }
        },
        computed: {
            title: function() {
                return store.getters.newListingForm.title;
            },
            itemType: function() {
                return store.getters.newListingForm.itemType;
            },
            startDateTime: function() {
                return store.getters.newListingForm.startDateTime;
            },
            duration: function() {
                return store.getters.newListingForm.duration;
            },
            listingType: function() {
                return store.getters.newListingForm.listingType;
            }
        },
        methods: {
            updateListingBegins(e) {
                console.log('updating start time' + e);
                store.commit('updateListingBegins', e);
            },
            updateDuration(e) {
                console.log('updating duration' + e);
                store.commit('updateDuration', e);
            },
            updateListingType(e) {
                store.commit('updateListingType', e.target.value);
            }
        }
    }
</script>

<style scoped>

</style>