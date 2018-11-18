<template>
    <form>
       <div class="col-6">
            <div class="form-group">
                <label>Sale type</label>
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
    </form>
</template>

<script>
    import store from '../../../../store'

    export default {
        name: "listing-type",
        computed: {
            listingType: function() {
                return store.getters.newListingForm.listingType
            }
        },
        methods: {
            updateListingType(e) {
                store.commit('updateListingType', e.target.value)
            },
        }
    }
</script>

<style scoped>

</style>