<template>
    <div class="flex flex-col text-center md:h-[60px] bg-dark-blue-2 text-gray-400 py-3 ">
        <div class="m-auto md:m-0 md:px-7">
            <div class="pt-3 md:float-left">
                BitcoinVN 2014 - 2023
            </div>
            <div class="pt-1 md:float-right">
                <div class="flex flex-row justify-center ">
                    <div v-for="item in items" :key="item.caption"
                        class="px-2 hover:underline hover:underline-offset-8 hover:decoration-1 hover:text-white">
                        <nuxt-link :to="item.url" target="_blank">
                            {{ item.caption }}
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    caption: 'Exchange',
                    url: 'https://bitcoinvn.io'
                },
                {
                    caption: 'News',
                    url: 'https://news.bitcoinvn.io'
                },
                {
                    caption: 'Shop',
                    url: 'https:/shop.bitcoinvn.io'
                },
                {
                    caption: 'OTC',
                    url: 'https:/otc.bitcoinvn.io'
                },
                {
                    caption: 'Newsletter',
                    url: 'https:/newsletter.bitcoinvn.io'
                },
            ]
        }
    }
}
</script>
