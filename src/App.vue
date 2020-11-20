<template>
    <div id="app">
        <b-container fluid class="pt-5">
            <b-row>
                <b-col cols="12" md="5">
                    <h1 class="font-weight-bold mb-5 mt-5">
                        Welcome to Mastermind
                    </h1>
                    <div class="d-flex justify-content-center">
                        <div class="w-50 mr-2">
                            <b-form-select
                                v-model="selected"
                                :options="options"
                            ></b-form-select>
                        </div>
                        <div>
                            <b-btn variant="success" @click="restartGame">
                                Restart game
                            </b-btn>
                        </div>
                    </div>
                </b-col>
                <b-col cols="12" md="7">
                    <mastermind
						:codeLength="codeLength"
                        @game-ended="onGameEnded"
                        :key="gameKey"
                    ></mastermind>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Mastermind from "@/components/Mastermind.vue";
import "@/assets/global.css";

@Component({
    components: {
        Mastermind,
    },
})
export default class App extends Vue {
    public gameKey: number = 0;
    public validationMsg = " ";
    codeLength: number = 4;

    selected: number = 4;
    options: any[] = [
        { value: 4, text: "Normal" },
        { value: 6, text: "Hard" },
    ];
    mounted() {
        this.validationMsg = "mounted";
    }

    onGameEnded(userWon: boolean) {
        if (userWon) {
            this.notifySuccess();
        } else {
            this.notifyLose();
        }
    }

    restartGame() {
        this.gameKey++;
        this.codeLength = this.selected;
    }

    notifyLose() {
        this.$bvModal
            .msgBoxOk("You lost but, come on, try again", {
                title: "Actually you were too close :3",
                size: "md",
                okTitle: "Sure",
                buttonSize: "md",
                cancelTitle: "Not so far",
                okVariant: "danger",
                headerClass: "p-2 border-bottom-0",
                footerClass: "p-2 border-top-0",
                centered: true,
            })
            .then((value) => {
                if (value) {
                    this.gameKey++;
                }
            });
    }

    notifySuccess() {
        this.$bvModal
            .msgBoxOk(
                "Congratulations, you've eaten our candies, now, test you luck again",
                {
                    title: "Congratulations",
                    size: "sm",
                    buttonSize: "sm",
                    okTitle: "Sure",
                    cancelTitle: "Not",
                    okVariant: "success",
                    headerClass: "p-2 border-bottom-0",
                    footerClass: "p-2 border-top-0",
                    centered: true,
                }
            )
            .then((value) => {
                if (value) {
                    this.gameKey++;
                }
            });
    }
}
</script>

<style>
</style>
