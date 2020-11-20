<template>
    <b-row>
        <b-col cols="9">
            <b-row>
                <b-col
                    cols="2"
                    class="mb-4"
                    :key="key"
                    v-for="(code, key) in guess"
                >
                    <selection-code-peg
                        :disabled="disabled"
                        :attempted="attempted"
                        :selectedColor="selectedColor"
                        v-model="guess[key]"
                    ></selection-code-peg>
                </b-col>
            </b-row>
        </b-col>
        <b-col cols="3"> 
            <div v-if="allSelected && !attempted">
                <b-btn @click="tryAttempt" variant="dark" class="btn-try">
                    Try
                </b-btn>
            </div>
            <div class="result-dots-container" v-else-if="attempted">
                <div :class="[resultDotClass(key)]" class="result-dot" :key="key" v-for="(result, key) in results">

                </div>
            </div>
        </b-col>
    </b-row>
</template>

<script lang="ts">
import { CodePeg, Mastermind, ResultPeg } from "@/core";
import { Vue, Component, Prop } from "vue-property-decorator";
import SelectionCodePeg from "@/components/SelectionCodePeg.vue";

@Component({
    components: {
        SelectionCodePeg,
    },
})
export default class SelectionRow extends Vue {
    @Prop()
    codeLength?: number;

    @Prop()
    attempted: boolean;

    @Prop()
    actualAttempt: number;

    @Prop()
    attempt: number;

    @Prop()
    mastermind: Mastermind;

    @Prop()
    selectedColor: CodePeg;

    public results:ResultPeg[] = []

    public guess: CodePeg[] = [];

    mounted() {
        this.loadGuess();
    }

    resultDotClass(key:number){
        return this.results[key] == ResultPeg.White?"white":"red";
    }

    get disabled() {
        if (this.selectedColor == -1) return true;

        return this.actualAttempt != this.attempt;
    }

    get allSelected(){
        return !this.guess.some(x => x == -1);
    }

    tryAttempt(){
        this.results = this.mastermind.getHints(this.guess);
        this.$emit('attempt-made',this.attempt);

        
    }

    loadGuess() {
        let index = 0;
        while (index < (this.codeLength ?? 0)) {
            this.guess.push(-1);

            index++;
        }
    }
}
</script>

<style>
</style>