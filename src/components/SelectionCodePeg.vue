<template>
    <div
        @click="selectColor"
        :style="{ 'background-color': color }"
        :class="{ 'selected-color': populated, 'disabled-codepeg':disabled&&!attempted ,'selection-codepeg':!disabled}"
        class="codepeg"
    ></div>
</template>

<script lang="ts">
import { CodePeg } from "@/core";
import { Component, Prop, Vue } from "vue-property-decorator";
import { CodeColorHelper } from "@/helpers";

@Component({})
export default class SelectionCodePeg extends Vue {

    @Prop()
    public value:CodePeg;

    @Prop()
    public disabled:boolean

    @Prop()
    public selectedColor:CodePeg

    @Prop()
    public attempted:boolean

    get populated() {
        return this.value != -1;
    }

    selectColor(){
        if(!this.disabled && !this.attempted){
            this.$emit('input', this.selectedColor)
        }
    }

    get color() {
        return !this.populated
            ? "rgb(64 33 19)"
            : CodeColorHelper.getColorFromCodePeg(this.value ?? 0);
    }


}
</script>

<style>
</style>