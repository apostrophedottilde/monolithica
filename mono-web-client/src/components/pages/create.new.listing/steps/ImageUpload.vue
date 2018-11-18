<template>
    <form>
        <file-upload-form v-on:changedimagefiles="logChange"></file-upload-form>
    </form>
</template>

<script>
    import store from '../../../../store'
    export default {
        name: "image-upload",
        data: () => {
            return {
                blag: '',
                listings: []
            }
        },
        methods: {
            logChange: function (event){
                store.state.newListingForm.images.push(event[0])
                this.images.push(event[0])
                console.log('logging change to files list ' + event)
            },
        }
    }
</script>

<style scoped>

</style>