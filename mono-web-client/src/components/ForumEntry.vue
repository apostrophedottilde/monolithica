<template>
    <div class="row">
        <div class="col-md-1">
            <img class="userThumbnail" src="https://res.cloudinary.com/ddfurqsuk/image/upload/v1538918058/yszbpdzgmwtcytl41by8.jpg"/>
        </div>
        <div class="col-md-11">
            <div>
                {{author.username}}
            </div>
            <div>
                {{text}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "forum-entry",
        props: {
            text: String,
            author: {
                username: String,
                firstName: String,
                lastName: String,
                countryOfResidence: String
            }
        }
    }
</script>

<style scoped>

</style>