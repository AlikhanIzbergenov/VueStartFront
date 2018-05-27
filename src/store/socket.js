export default {
    namespaced: true,
    state: {
        name: "",
        messages: []

    },
    getters: {
        getName(state) {
            return state.name
        },
        getMessages(state) {
            return state.messages

        }




    },
    mutations: {
        setName(store, name) {
            store.name = name
        },
        setSocket(store, socket) {
            store.socket = socket
        },
        sendMessage(store, data) {
            store.socket.emit('sendMessage', data)
            data.owner = true
            store.messages.push(data)
        },
        receivedMessage(store, data) {
            store.messages.push(data);
            console.log(store.messages)



        }

    },
    actions: {
        setSocket({
            commit
        }, socket) {
            commit('setSocket', socket)

        },
        setName({
            commit
        }, name) {
            commit('setName', name)

        },
        sendMessage({
            commit
        }, data) {
            commit('sendMessage', data)

        },
        receivedMessage({
            commit
        }, data) {

            commit('receivedMessage', data)

        }



    }


}
