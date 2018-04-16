import Api from "@/services/Api"

export default {
    regist(info){
        return Api.post('/login',info)
    }
}
