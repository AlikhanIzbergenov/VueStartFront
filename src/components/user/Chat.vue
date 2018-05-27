<template>
   
    <v-flex fill-height shrink class="chat_content">
 
      <v-card class="comments_area" >
          <div v-for="(message, index) in messages" :key="index" >
              <app-message :text="message.text" :date="message.date" :owner="'owner' in message" :author="message.author"></app-message>
          </div>
       </v-card>
       
   <div class="comment_input">
       <textarea type="text" autofocus class="com_textarea" placeholder="print your message and click enter" rows="4" @keyup.enter="count" v-model="message"></textarea>
   </div>
    

    </v-flex>
    
</template>

<script>
    import AppMessage from './Message'
    export default {
        components: {
            AppMessage
        },
        data() {
            return {
                messages: this.$store.getters['socket/getMessages'],
                //maxHeight: '100vh',
                message: null
            }

        },
        computed: {
            now() {
                return new Date()
            }

            //            styleForMsgArea() {
            //                return {
            //                    height: this.maxHeight,
            //                    maxHeight: this.maxHeight
            //
            //                }
            //
            //            }
        },
        created() {
            //            this.$store.state.socket
            //            console.log(this.$store.state.socket)


        },
        methods: {
            count() {
                let a = {
                    author: this.$store.getters['socket/getName'],
                    text: this.message,
                    date: this.now
                }
                this.$store.dispatch('socket/sendMessage', a)
                this.message = ""
            },
            //            onResize() {
            //                //alert(1)
            //                //this.maxHeight = this.$refs.commentsArea.$el.offsetHeight + 'px'
            //
            //            }

        },
        mounted() {
            //this.onResize()


        }
    }

</script>

<style>
    .chat_content * {
        word-break: break-all
    }

    .chat_content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .comments_area {
        flex-grow: 1;
        max-height: 100%;
        overflow: auto;
    }

    .comment_input {
        padding: 10px 0;
    }

    .comment_input .com_textarea {
        width: 100%;
        padding: 5px 3px;
        border-radius: 2px;
        border: 1px solid #424242;
        outline: none;

    }

</style>
