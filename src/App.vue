<template>
  <div id="app">
    <b-container fluid class="pt-5">
      <h1 class="font-weight-bold">Welcome to Mastermind</h1>
      <mastermind></mastermind>
    </b-container>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Mastermind from '@/components/Mastermind.vue'
import '@/assets/global.css'

@Component({
  components: {
    Mastermind
  },
})
export default class App extends Vue {

  public validationMsg = " ";
  mounted(){
    this.validationMsg = "mounted";
  }

}
</script>

<style>


</style>
