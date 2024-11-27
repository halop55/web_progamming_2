import axios from "axios";// thư viện thực hiện các yêu cầu của http
import Vue from 'vue';// thư viejn vue.js
import VueFlashMessage from 'vue-flash-message';//Thư viện để hiển thị các thông báo ngắn gọn flash message
import 'vue-flash-message/dist/vue-flash-message.min.css';// css của flash message cho các thông báo

Vue.use(VueFlashMessage,{
messageOptions:{
    timeout: 3000,//Thời gian hiển thị thông báo (3000 ms)
    pauseOnInteract: true//Tạm dừng thời gian đếm khi người dùng tương tác với thông báo.
}
});
const vm =new Vue();
const baseURL = 'http://localhost:3000/words/';//URL cơ sở cho các yêu cầu API chạy server

const handleError = fn => (...params)=>
    fn(...params).catch(error => {
        vm.flash(`${error.response.status}: ${error.response.statusText}`,'error');
        // vm.flash('error');
    });

    export const api ={ 
        getWord: handleError(async id =>{
            const res = await axios.get(baseURL + id);
            return res.data;
        }),
        getWords: handleError(async()=>{
            const res = await axios.get(baseURL);
            return res.data;
        }),
        deleteWord: handleError(async id =>{
            const res = await axios.delete(baseURL + id);
            return res.data;
        }),
        createWord: handleError(async payload  =>{
            const res = await axios.post(baseURL, payload);
            return res.data;
        }),
        updateWord: handleError(async payload  =>{
            const res = await axios.put(baseURL + payload._id, payload);
            return res.data;
        }) ,
        searchWord: handleError(async query =>{
            const res = await axios.get(`http://localhost:3000/search?q=${query}`);
            return res.data;
        })

        // searchWord: handleError(async query => {
        //     const res = await axios.get(`http://localhost:3000/search?q=${query}`);
        //     return res.data; 
        // })
    };