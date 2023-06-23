<template>
    <div class="flex flex-col py-5 text-sm text-center text-gray-400 bg-dark-blue-2">
        <div class="m-auto md:m-0 md:px-12">
            <div class="md:float-left">
                BitcoinVN 2014 - {{ new Date().getFullYear() }}
            </div>
            <div class="md:float-right">
                <div class="flex flex-row justify-center ">
                    <div v-for="item in items" :key="item.caption"
                        class="px-2 hover:underline hover:underline-offset-8 hover:decoration-1 hover:text-white">
                        <a :href="item.url" target="_blank">
                            {{ item.caption }}
                        </a>
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
                    url: 'https://shop.bitcoinvn.io'
                },
                {
                    caption: 'OTC',
                    url: 'https://otc.bitcoinvn.io'
                },
                {
                    caption: 'Newsletter',
                    url: 'https://newsletter.bitcoinvn.io'
                },
            ]
        }
    }
}
</script>
