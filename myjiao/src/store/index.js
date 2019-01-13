import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

var state={
    token:''
}

var  mutations={
    cun:function(a,b){
		a.token=b
	}
}

var actions = {
   
    cun( {commit} , i ){
        commit( 'cun' , i )
    },
}
var getters = {
   
    cun(state){
        return state.token
    }
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})
