<template>
    <div
        @click="selectColor"
        :style="{ 'background-color': color }"
        class="codepeg selection-codepeg selected-color"
    ></div>
</template>

<script lang="ts">
import { CodePeg } from "@/core";
import { Component, Prop, Vue } from "vue-property-decorator";
import { CodeColorHelper } from "@/helpers";

@Component({})
export default class SelectionCodePeg extends Vue {
    @Prop()
    public codePeg?: CodePeg;

    selectColor(){
        this.$emit('selected', this.codePeg);
    }

    get color() {
        return CodeColorHelper.getColorFromCodePeg(this.codePeg ?? 0);
    }
}
</script>

<style>
</style>