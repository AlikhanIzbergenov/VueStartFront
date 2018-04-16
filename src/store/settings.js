export default {
    namespaced:true,
    state:{
        main_color:{ 
            
            purple_pink:{
                main:'purple darken-4',
                font:''
            },
            blue:{
                main:'pink darken-2',
                font:''
            }
        }
    },
    getters:{
        main_colors(state){
            return state.main_color
        }
    }

      
}