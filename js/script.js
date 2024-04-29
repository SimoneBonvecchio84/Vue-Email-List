const { createApp } = Vue;

createApp ({
    data() {
        return{
           listMail : [], 
        }
    },
    created () {
        this.sendMeMail ()
    },
    methods: {
       sendMeMail: function () {
        for(let i = 0; i < 10; i++) {
            
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((resp) =>{
               console.log(resp)
               this.listMail.push(resp.data.response)
               console.log(this.listMail)
            });
        }
        

       } 
    }
}).mount("#app");