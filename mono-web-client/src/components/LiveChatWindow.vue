<template>
    <div class="col-sm-offset-4 frame">
        <div>
            <div v-for="msg of chat">
                {{msg.text}}
            </div>
            <div class="">
                <input class="" v-model="inputText" type="text" placeholder="Type a message"/>
                <input type="button" v-on:click="addMessage" value="Enter message"/>
            </div>
        </div>
    </div>
</template>

<script>
    import store from '../store'

    export default {
        name: "live-chat-window",
        data: function() {
            return {
                socket: {},
                inputText: ''
            }
        },
        created: function() {
            this.socket = io('http://127.0.0.1:9100/channel9');
            this.socket.on('chat message', function (msg) {
                console.log('received message: ' + msg);
                store.commit('addChatMessage', { text: msg, sender: 'gez' });
            })
        },
        methods: {
            addMessage: function() {
                console.log('sending: ' + this.inputText);
                this.socket.emit('chat message', this.inputText)
            },
        },
        computed: {
            chat: function () {
                return store.getters.chat
            }
        }
    }
</script>

<style scoped>

</style>