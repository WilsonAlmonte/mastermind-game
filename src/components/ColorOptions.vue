<template>
<div class="pl-5">
      <b-row>
        <b-col class="mb-4" cols="3" :key="key" v-for="(code, key) in options">
            <option-code-peg
                @selected="selectColor"
                :codePeg="code"
            ></option-code-peg>
        </b-col>
    </b-row>
</div>
</template>
<script lang="ts">
import { CodePeg } from '@/core';
import {Component, Prop, Vue} from 'vue-property-decorator';
import OptionCodePeg from '@/components/OptionCodePeg.vue';

@Component({
    components:{
        OptionCodePeg
    }
})
export default class ColorOptions extends Vue{

    @Prop()
    public value?:CodePeg
    
    public options:CodePeg[] = [];
    mounted(){
        for(const value in CodePeg){
            let option = Number(value);
            if(!isNaN(option)){
                this.options.push(option);
            }
        }
    }

    selectColor(color:CodePeg){
        this.$emit('input', color);
    }
    

}
</script>

<style>

</style>