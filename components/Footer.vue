<template>
    <div class="footer">
        <ul>
            <span>- 主辦單位 -</span>
            <li><img src="@/assets/img/NMTH.png" /></li>
        </ul>
        <ul>
            <span>- 執行單位 -</span>
            <li><img src="@/assets/img/TCMB.png" /></li>
            <li><img src="@/assets/img/IFII.png" /></li>
        </ul>
        <ul>
            <span>- 合作單位 -</span>
            <li><img src="@/assets/img/NTUE.png" /></li>
        </ul>
        <a to="https://www.facebook.com/TaiwanCulturalMemoryBank" target="_blank">
            <img src="@/assets/img/btn-fb.svg">
        </a>
        <span>國家文化記憶庫版權所有 2023 © All rights reserve<br>本計畫為國家文化記憶庫示範性案例</span>
    </div>
</template>


<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

ul {
    display: flex;
    align-items: center;

    li {
        list-style-type: none;
        margin-left: 15px;
    }

    img {
        width: 215px;
    }

    span {
        color: $primary-default;
        @include font(serif, 18px, 900);
    }
}

.footer {
    padding: 24px 42px 42px;
    display: grid;
    grid-template-columns: max-content auto max-content;
    align-items: center;

    ul:first-child {
        grid-column: 1/4;
    }
}

span {
    color: $text-gray-dark;
    grid-column: 1/4;
    justify-self: center;
    @include font(normal, 12px, 700);
}
</style>