<template>
    <div>hello world!
        <button class="register_btn" @click="registerMobile">注册</button>
    </div>
</template>

<script>
    export default {
        name: 'home',
        methods:{
            registerMobile() {
                this.$axios({
                    url: this.$settings.base_url + '',
                    method: 'get',
                    data: {
                        mobile: 'mobile',
                    }
                }).then(response => {
                    window.console.log(response);
                    // let _this = this;
                })

            }
        }
    }

</script>

