<template>
   <div id='Home'>
      <Header/>
      <section id='JogarHome'>
      <JogarHome/>
      </section>
      
      <section id='sobre'>
      <Sobre/>
      </section>
      <section id='contatos'>
      <Contatos/>
      </section>
    </div>

</template>

<script>

import Header from '../components/Header'
import Sobre from '../components/Sobre'
import Contatos from '../components/Contatos'
import JogarHome from '../components/JogarHome'


export default {
  name: 'Home',
  components: {
    Header,
    Sobre,
    Contatos,
    JogarHome
    
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@font-face {
  font-family:"Beckman-free";
  src: url("../assets/Beckman-Free.otf");
}
@font-face {
  font-family: "Conversation";
  src: url("../assets/Conversation.otf");
}
@font-face {
  font-family: "theboldfont";
  src: url("../assets/theboldfont.ttf");
  
}

#contatos{
  background-color:#008080;
  
}
#Home{
  background-color: #2f4f4f
}

</style>
