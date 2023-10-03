<template>
    <div class="footer">
        <ul>
            <span>- 主辦單位 -</span>
            <li><img src="@/assets/img/NMTH.png" srcset="@/assets/img/NMTH.png 1x, @/assets/img/NMTH@2x.png 2x" /></li>
        </ul>
        <ul>
            <span>- 執行單位 -</span>
            <li><img src="@/assets/img/TCMB.png" srcset="@/assets/img/TCMB.png 1x, @/assets/img/TCMB@2x.png 2x" /></li>
            <li><img src="@/assets/img/IFII.png" srcset="@/assets/img/IFII.png 1x, @/assets/img/IFII@2x.png 2x" /></li>
        </ul>
        <ul>
            <span>- 合作單位 -</span>
            <li><img src="@/assets/img/NTUE.png" srcset="@/assets/img/NTUE.png 1x, @/assets/img/NTUE@2x.png 2x" /></li>
        </ul>
        <a herf="https://www.facebook.com/TaiwanCulturalMemoryBank" target="_blank" class="fb-link">
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="22" cy="22" r="21" stroke="#05648A" stroke-width="2" />
                <path
                    d="M28.3121 23.8334L29.1202 18.5247H24.0677V15.0798C24.0677 13.6274 24.7735 12.2118 27.0364 12.2118H29.3333V7.69202C29.3333 7.69202 27.2489 7.33337 25.2559 7.33337C21.095 7.33337 18.3752 9.87598 18.3752 14.4788V18.5247H13.75V23.8334H18.3752V36.6667H24.0677V23.8334H28.3121Z"
                    fill="#05648A" />
            </svg>
        </a>
        <span class="license">國家文化記憶庫版權所有 2023 © All rights reserve<br>本計畫為國家文化記憶庫示範性案例</span>
    </div>
</template>


<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.footer {
    padding: 24px 42px 42px;
    display: grid;
    grid-template-columns: max-content auto max-content;
    align-items: center;
}

ul {
    display: flex;
    align-items: center;

    &:first-child {
        grid-column: 1/4;
    }

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
        margin-bottom: 20px;
    }
}

.license {
    color: $gray-500;
    grid-column: 1/4;
    justify-self: center;
    @include font(normal, 12px, 700);
}

@media screen and (max-width: 1140px) {
    .footer {
        grid-template-columns: auto max-content;
        align-items: center;
    }

    ul {
        &:nth-child(3) {
            grid-column: 1/3;
            margin-bottom: 40px;
        }
    }

    .fb-link {
        justify-self: center;
    }
}

@media screen and (max-width: 760px) {
    .footer {
        padding: 44px 0px;
        grid-template-columns: max-content;
        grid-auto-flow: row;
        justify-content: center;
    }

    ul {
        flex-direction: column;
        padding-left: 0;
        margin-bottom: 50px;

        &:first-child {
            grid-column: auto;
        }

        &:nth-child(3) {
            grid-column: auto;
        }

        li {
            margin-left: 0px;
        }

        span {
            margin-bottom: 10px;
        }
    }

    .license {
        grid-column: auto;
        justify-self: center;
        text-align: center;
        max-width: 100vw;
    }

    .fb-link {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 40px;
        order: -1;

        &::after {
            content: "記憶庫粉絲專頁";
            @include font(normal, 18px, 700);
            color: $gray-700;
            margin-left: 10px;
        }
    }
}
</style>