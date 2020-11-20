<template>
    <div class="pl-5 mt-5">
        <selection-row
            :key="key"
            @game-won="$emit('game-won')"
            v-for="(attempt, key) in attempts"
            :codeLength="codeLength"
            :selectedColor="selectedColor"
            :mastermind="mastermind"
            :attempted="attempt"
            @attempt-made="onAttemptMade"
            :actualAttempt="actualAttempt"
            :attempt="key"
        >
        </selection-row>
    </div>
</template>
<script lang="ts">
import { CodePeg, Mastermind } from "@/core";
import { Vue, Component, Prop } from "vue-property-decorator";
import SelectionRow from "@/components/SelectionRow.vue";

@Component({
    components: {
        SelectionRow,
    },
})
export default class SelectionBoard extends Vue {
    @Prop()
    codeLength?: number;

    @Prop()
    mastermind?: Mastermind;

    @Prop()
    selectedColor:CodePeg

    public attemptsAmmount = 8;
    public attempts: boolean[] = [];
    actualAttempt: number = 0;

    mounted() {
        this.loadGuesses();
    }

    onAttemptMade(attemptIndex:number){
        this.attempts[attemptIndex] = true;
        this.actualAttempt--;

        if(this.actualAttempt < 0){
            this.$emit('last-try-made');
        }
    }

    loadGuesses() {
        let index = 0;

        while (index < this.attemptsAmmount) {
            this.attempts.push(false);
            index++;
        }

        this.actualAttempt = this.attempts.length - 1; 
    }

}
</script>

<style>
</style>