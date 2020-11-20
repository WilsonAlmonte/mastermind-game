<template>
    <div class="pl-5 pt-4">
        <b-row>
            <b-col cols="2" :key="key" v-for="(code, key) in codePegs">
                <hidden-code-peg
                    :codePeg="code"
                    :is-hidden="!gameEnded"
                ></hidden-code-peg>
            </b-col>
        </b-row>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import HiddenCodePeg from "@/components/HiddenCodePeg.vue";
import { CodePeg } from '@/core';

@Component({
    components: {
        HiddenCodePeg,
    },
})
export default class HiddenCode extends Vue {
    @Prop()
    public gameEnded?: boolean;

    @Prop()
    public codePegs?: CodePeg[];
}
</script>

<style>
</style>