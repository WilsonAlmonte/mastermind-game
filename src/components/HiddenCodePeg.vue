<template>
    <div :style="{'background-color':color}"  class="codepeg selected-color" >
        <b v-if="isHidden">?</b>
    </div>
</template>

<script lang="ts">
import { CodePeg } from '@/core'
import {Component, Prop, Vue} from 'vue-property-decorator'
import {CodeColorHelper} from '@/helpers'

@Component({})
export default class HiddenCodePeg extends Vue{

    @Prop()
    public codePeg?: CodePeg

    @Prop()
    public isHidden?: boolean


    get color(){
        return this.isHidden?"#31190f":CodeColorHelper.getColorFromCodePeg(this.codePeg??0)
    }

}
</script>

<style>

</style>