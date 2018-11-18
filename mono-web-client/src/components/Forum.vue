<template>
    <b-card no-body class="mb-1 my-3">
        <b-card-header header-tag="header" class="p-1" role="tab">
            <b-btn block href="#" v-b-toggle.accordion1 variant="dark">Forum</b-btn>
        </b-card-header>
        <b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
            <b-card-body>
                <div>
                    <div>
                        <div>
                            <textarea class="forumEntryInput" v-model="forumEntryInput"></textarea>
                        </div>
                        <div>
                            <input type="button" class="btn btn-dark forumEntryInputSubmit" v-on:click="submitForumEntry" value="Submit"/>
                        </div>
                    </div>
                </div>

                <div class="card-text my-3">
                    <div v-for="entry in forum.entries" class="container">
                        <forum-entry v-bind:text="entry.text" v-bind:author="entry.author"></forum-entry>
                    </div>
                </div>

                <div class="card-text">

                </div>
            </b-card-body>
        </b-collapse>
    </b-card>
</template>

<script>
    import axios from 'axios'
    import ForumEntry from "./ForumEntry";

    export default {
        name: "forum",
        components: {ForumEntry},
        data: function () {
            return {
                id: '',
                forumEntryInput: '',
                listing: {},
                forum: {
                    name: '',
                    entries: [{
                        text: '',
                        sender: ''
                    }]
                }
            }
        },
        props: {

        },
        created: function () {
            this.id = this.$route.params.listingId;
            this.getForum();
        },
        methods: {
            getForum: function () {
                const jwt = this.$cookie.get('jwt');
                axios.get(`http://localhost:9005/api/v1/listings/${this.id}/forum`, {
                    headers: {'Authorization': jwt}
                })
                .then(result => {
                    console.log('forum result :' + JSON.stringify(result.data));
                    this.forum = result.data
                }, error => error)
            },
            submitForumEntry: function () {
                const jwt = this.$cookie.get('jwt');
                axios.put(`http://localhost:9005/api/v1/listings/${this.id}/forum/add-entry`, {
                    text: this.forumEntryInput
                }, {
                    headers: {'Authorization': jwt}
                })
                .then(result => {
                    console.log('submitted forum result :' + JSON.stringify(result.data));
                    this.forum = result.data;
                })
            }
        }
    }
</script>

<style scoped>

</style>