<template>
  
    <div class="background">
      <br>
    
      <b-form @submit="onSubmit" @reset="onReset" v-if="show" id="form">
      <h1 class="text-center"> Login </h1>
      <b-form-group id="input-group-2" label="Nome de usuário:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.user"
          required
          placeholder="Digite o nome de seu usuário"
        ></b-form-input>
      </b-form-group>

       <b-form @submit.stop.prevent id="input-4" >
        <label for="text-password">Senha</label>
        <b-input type="password" id="text-password" aria-describedby="password-help-block" v-model="form.senha" required minlength="8" maxlength="20" placeholder="Digite a sua senha"></b-input>
        <b-form-text id="password-help-block"> 
        </b-form-text>
        </b-form>
     

      <b-form-group id="input-group-5">
        <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
          <b-form-checkbox value="me">Lembrar usuário e senha</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

    
      <div id='botões'>
        <b-button pill type="submit" variant="primary" aria-pressed="false" class="m-2" id='b_login'>Login</b-button>
        <b-button pill type="reset" variant="danger" aria-pressed="false" class="m-2" id='b_recuperar'>Recuperar senha </b-button>
        <b-button pill type="reset" variant="danger" aria-pressed="false" class="m-2" id='b_cadastro' href="/cadastro">Ainda não cadastrado? </b-button>
      </div>

    </b-form>
    
  </div>



</template>



<script>
export default {
  name: 'Form_Login',
  data() {
      return {
        form: {
          user:'',
          senha:'',
          checked: []
        },
        
        show: true
      }
},
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        this.$router.push("jogar")
       
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.user = ''
        this.form.senha = ''
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }




</script>

<style scoped>
h1 {
  font-size:50px;
  margin-top:100px;
  color:black;
  font-family: "theboldfont";
  text-align:center;
}
#form{
    border: 1px white;
    width:50%;
    font-size:20px;
    margin:0 auto;
    margin-top: 2%;
    max-width: 450px;
    color:black;
   font-family: "Beckman-free";
   font-size:1.1EM;
   text-align:center;
    

}

#b_login{
  font-size: 1EM;
  width:200px;
  background-color: green;
}

#b_recuperar{
  font-size: 1EM;
  width:200px;
}

#b_cadastro{
  font-size: 1EM;
  width:200px;
  background-color: orange;
}
.background{
  height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #2f4f4f;
	background: url("../assets/ironman.jpg");
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
	background-position-y: 0;
	opacity: 1;
	color: #010102;
  background-attachment: fixed;
  
}



#botões{
  max-width:500px;
  margin:0 auto;
}



@media only screen and (max-width: 600px) {
  
  h1{
    font-size:1.5EM;
  }
  h2{
    font-size:0.8EM;
  }
  h3{
    font-size:0.8Em;
  }
  #b_login{
    font-size:0.8EM;
  }
  #b_recuperar{
    font-size:0.8EM;
  }
  #b_cadastro{
    font-size:0.8EM;
  }
 
}


</style>