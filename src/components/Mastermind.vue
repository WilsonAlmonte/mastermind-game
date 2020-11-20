<template>
    <div class="d-flex justify-content-center w-100">
        <div class="game-container" v-if="gameCore !=null">
            <b-row>
                <b-col cols="9">
                    <hidden-code
                        :gameEnded="gameEnded"
                        :codePegs="hiddenCodes"
                    ></hidden-code>
                </b-col>
            </b-row>
            <selection-board @last-try-made="onLastTryMade" :mastermind="gameCore" :selectedColor="selectedColor" :codeLength="codeLength"></selection-board>
			<hr>
            <b-row class="pt-3">
                <b-col cols="8">
                    <color-options v-model="selectedColor"></color-options>
                </b-col>
                <b-col>
                    <template v-if="colorIsSelected">
                        <h4>Selected</h4>
                        <div class="d-flex justify-content-center">
                            <div>
                                <option-code-peg
                                    :codePeg="selectedColor"
                                ></option-code-peg>
                            </div>
                        </div>
                    </template>
                    <h5 v-else>Select a color</h5>
                </b-col>
            </b-row>
        </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import HiddenCode from "@/components/HiddenCode.vue";
import SelectionBoard from "@/components/SelectionBoard.vue";
import { CodePeg } from "@/core";
import ColorOptions from "@/components/ColorOptions.vue";
import OptionCodePeg from "@/components/OptionCodePeg.vue";
import {Mastermind} from '@/core'

@Component({
    components: {
        HiddenCode,
        ColorOptions,
        SelectionBoard,
        OptionCodePeg,
    },
})
export default class MastermindComponent extends Vue {
    codeLength = 4;
    hiddenCodes: CodePeg[] = [];
	selectedColor: number = -1;
    gameCore?:Mastermind = null;
    gameEnded:boolean = false;

    loadGame() {
        let index = 0;
        while (index < this.codeLength) {
            this.hiddenCodes.push(this.generateRandomCode());
            index++;
		}
		this.gameCore = new Mastermind(this.hiddenCodes);
    }

    mounted() {
        this.loadGame();
    }

    onLastTryMade(){
        this.gameEnded = true;
    }

    get colorIsSelected() {
        return this.selectedColor != -1;
    }

    generateRandomCode() {
        const min = CodePeg.Red;
        const max = CodePeg.Black;
        const random = Math.floor(Math.random() * (+max + 1 - +min)) + +min;
        return random;
    }
}
</script>

<style>
hr{
	border-top: 1px inset rgb(49, 25, 15) !important;
	margin: 0 0 !important;
}
</style>