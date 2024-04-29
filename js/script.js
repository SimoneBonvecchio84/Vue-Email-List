const { createApp } = Vue;

createApp ({
    data() {
        return{
           listMail : [], 
           isLoading: false
        }
    },
    // created () {
    //    this.sendMeMail(); 
    // },
    methods: {
       sendMeMail: function () {
            this.isLoading = true; 
            for(let i = 0; i < 10; i++) {            
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((resp) =>{                    
                    
                    this.listMail.push(resp.data.response);     
                    console.log(this.listMail);
                    if(this.listMail.length === 10) {
                        this.isLoading = false;
                        
                    }
                });  
            } 
       },
       
       reset: function () {
        this.listMail = [];
       } 
    }
}).mount("#app");