import { Schema, Model } from 'mongoose'

const chatSchema = new Schema({
    channelId: String,
    posts: [{
        text: String,
        author: String
    }, {timestamps: true}]
}, {timestamps: true})
const ChatModel = new Model('chat', chatSchema)

module.exports = ChatModel;