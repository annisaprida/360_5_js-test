
import { isReadable } from 'stream';

<template>
    <div id="app">
        <div class="container">
            <div class="container__content">
                What do you want to do for sport activity today?
            </div>
            <div class="container__content">
                <div
                    class="container__content__radio-item"
                    v-for="(item, idx) in sportList"
                    :key="idx"
                >
                    <input
                        type="radio"
                        :id="item.name"
                        :value="item"
                        v-model="selectedSport"
                        name="sportItem"
                        @change="onChangeSportItem"
                    />
                    <label :for="item.name">{{ item.name }}</label>
                </div>
            </div>
            <div class="container__content">
                <div
                    class="container__content__center-rectangle"
                    :style="rectangleStyle"
                >
                    <div
                        v-for="(item, idx) in sportList"
                        :id="'rectangle-' + item.name"
                        :key="idx"
                        class="container__content__center-rectangle__sport-item"
                    >
                        {{ item.name }}
                    </div>
                    <div
                        id="rectangle-me"
                        class="container__content__center-rectangle__me"
                    >
                        me
                    </div>
                </div>
            </div>
            <div class="container__content">
              Select Sport: {{ selectedSport.name }}
            </div>
            <div class="container__content">
              Equipments: {{ selectedEquipment }}
            </div>
        </div>
    </div>
</template>

<script src="./app.js"></script>

<style lang="scss" scoped>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    max-width: 768px;
    margin: 0 auto;
    border: 1px solid #eee;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    height: 100%;
    padding: 20px;
    h1 {
        text-align: left;
    }
}
.container {
    &__content {
        flex-grow: 1;
        display: flex;
        &__radio-item {
            margin-right: 1em;
            label, input {
              &:hover{
                cursor: pointer;
              }
            }
        }
        &__center-rectangle {
            width: 320px;
            height: 200px;
            border: 2px solid #aaa;
            margin: 1em 0;
            padding: 10px;
            position: relative;
            &__sport-item,
            &__me {
                border: 1px solid #aaa;
                display: inline-block;
                width: 80px;
                text-align: center;
                padding: 5px;
                position: absolute;
            }
            &__sport-item {
                &:nth-child(1) {
                    left: 10px;
                    top: 10px;
                }
                &:nth-child(2) {
                    left: 240px;
                    top: 10px;
                }
                &:nth-child(3) {
                    left: 130px;
                    top: 180px;
                }
            }
            &__me {
                left: 130px;
                top: 90px;
                background: #000;
                color: #fff;
            }
        }
    }
}
</style>

<style lang="scss">
html,
body {
    height: 100%;
}
</style>
