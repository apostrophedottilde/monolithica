<template>
    <div class="">{{bid.currencyType}} {{bid.bidAmount}} {{bid.bidder.username}}</div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "auction-bid-card",
        data: () => {
            return {
                bidAmount: 0,
            }
        },
        props: {
            bid: {
                currencyType: String,
                bidAmount: Number,
                bidder: {
                    username: String,
                    firstName: String,
                    lastName: String,
                    countryOfResidence: String
                }
            }
        }
    }
</script>

<style scoped>

</style>