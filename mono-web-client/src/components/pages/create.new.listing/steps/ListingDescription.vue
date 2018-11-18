<template>
    <form>
        <div class="form-group">
            <label>Brief Description</label>
            <textarea :value="briefDescription" @input="updateBriefDescription" type="text" rows="2" formControlName="briefDescription" class="form-control no-resize"></textarea>
        </div>

        <div class="form-group">
            <label>Full Description</label>
            <textarea :value="fullDescription" @input="updateFullDescription" rows="6" class="form-control no-resize" formControlName="fullDescription"></textarea>
        </div>
    </form>
</template>

<script>
    import store from '../../../../store'

    export default {
        name: "listing-description",
        computed: {
            briefDescription: function() {
                return store.getters.newListingForm.briefDescription
            },
            fullDescription: function() {
                return store.getters.newListingForm.fullDescription
            }
        },
        methods: {
            updateBriefDescription(e) {
                store.commit('updateBriefDescription', e.target.value)
            },
            updateFullDescription(e) {
                store.commit('updateFullDescription', e.target.value)
            }
        }
    }
</script>

<style scoped>

</style>