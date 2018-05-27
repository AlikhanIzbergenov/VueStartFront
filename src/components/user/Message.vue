<template>
   <div class="message">
       
       <v-card :color="owner ? 'green lighten-2' : 'light-blue lighten-1'" class="white--text message_content">
       <div class="message_head">
           <div class="message_date">{{date}}</div>
           <div class="message_author">{{author}}</div>
       </div>
       <hr>
       <div class="message_body">{{text}}</div>
        </v-card>
   </div>
    
</template>


<script>
    export default {
        data() {
            return {

            }
        },
        props: {
            author: {
                type: String,
                default: "No name"
            },
            date: {
                type: [String, Date],
                default: function() {
                    return new Date().toString()
                }

            },
            text: {
                type: String,
                default: "Some Text"

            },
            owner: {
                type: Boolean,
                default: false

            }
        }


    }

</script>



<style>
    .message {
        padding: 10px;
        box-sizing: border-box;

    }

    .message_content {
        padding: 5px;
    }

    .message_head {
        display: flex;
        justify-content: space-between;
    }

</style>
