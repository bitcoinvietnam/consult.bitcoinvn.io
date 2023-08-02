<template>
    <div class="flex flex-col py-5 text-sm text-center text-gray-400 bg-dark-blue-2/70">
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
                    url: 'https://bitcoinvn.io?utm_source=consult&utm_medium=footer&utm_campaign=landing'
                },
                {
                    caption: 'News',
                    url: 'https://bitcoinvn.io/news?utm_source=consult&utm_medium=footer&utm_campaign=landing'
                },
                {
                    caption: 'Shop',
                    url: 'https://shop.bitcoinvn.io?utm_source=consult&utm_medium=footer&utm_campaign=landing'
                },
                {
                    caption: 'OTC',
                    url: 'https://otc.bitcoinvn.io?utm_source=consult&utm_medium=footer&utm_campaign=landing'
                },
                {
                    caption: 'Newsletter',
                    url: 'https://newsletter.bitcoinvn.io/private-client?utm_source=consult&utm_medium=footer&utm_campaign=subscribe'
                },
            ]
        }
    }
}
</script>
