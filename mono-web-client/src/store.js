import Vue from 'vue'
import Vuex from 'vuex'
import { getField, updateField } from 'vuex-map-fields'
Vue.use(Vuex)

export default new Vuex.Store({
    // strict: true,
    state: {
        count: 0,
        chat: [],
        newListingForm: {
            title: '',
            itemType: '',
            briefDescription: '',
            fullDescription: '',
            listingType: '',
            listingBegins: new Date(),
            duration: '',
            images: []
        },
        contextMenuItems: [
            {
                name: 'Some special link',
                hoverText: 'You have hovered',
                route: '/routed',
                data: {val1: '', val2: '', val3: ''}
            }
        ],
    },
    mutations: {
        updateImages (state, images) {g
            state.newListingForm.images = images
        },
        addChatMessage (state, msg) {
            state.chat.push(msg);
        },
        updateTitle (state, title) {
            state.newListingForm.title = title
        },
        updateListingType (state, listingType) {
            state.newListingForm.listingType = listingType
        },
        updateItemType (state, itemType) {
            state.newListingForm.itemType = itemType
        },
        updateListingBegins (state, listingBegins) {
            state.newListingForm.listingBegins = listingBegins
        },
        updateDuration (state, duration) {
            state.newListingForm.duration = duration
        },
        updateBriefDescription (state, briefDescription) {
            state.newListingForm.briefDescription = briefDescription
        },
        updateFullDescription (state, fullDescription) {
            state.newListingForm.fullDescription = fullDescription
        },
        switchedToCreateNewListingPage(state) {
            state.listItems = [{
                name: 'Item Details',
                hoverText: 'Item Details',
                route: '/routed',
                data: {val1: '', val2: '', val3: ''}
            },
                {
                    name: 'Listing Type',
                    hoverText: '1',
                    route: '/routed',
                    data: {val1: '', val2: '', val3: ''}
                },
                {
                    name: 'Listing Duration',
                    hoverText: 'Listing Duration',
                    route: '/routed',
                    data: {val1: '', val2: '', val3: ''}
                },
                {
                    name: 'Gallery',
                    hoverText: 'Gallery',
                    route: '/routed',
                    data: {val1: '', val2: '', val3: ''}
                }]
        },
        switchedToBrowseListingsPage(state) {
            state.listItems = [{
                name: 'My Listings',
                hoverText: 'My Listings',
                route: '/routed',
                data: {val1: '', val2: '', val3: ''}
            },
                {
                    name: 'Create New Listing',
                    hoverText: 'Create New Listing',
                    route: '/routed',
                    data: {val1: '', val2: '', val3: ''}
                },
                {
                    name: 'Reccomend This Listing',
                    hoverText: 'Reccomend This Listing',
                    route: '/routed',
                    data: {val1: '', val2: '', val3: ''}
                }
            ]
        }
    },
    getters: {
        newListingForm (state) {
          return state.newListingForm
        },
        contextMenuItems (state) {
            return state.contextMenuItems
        },
        chat (state) {
            return state.chat
        },
        increment (state) {
            state.count++
        }
    }
})
