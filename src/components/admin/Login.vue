<template>
    <div class="login">
        <h1>Login Admin</h1>
        <label for="username">Username</label>
        <input type="text" name="username" id="username" v-model="userName">
        {{ userName }}
        <label for="password">Password</label>
        <input type="text" name="password" id="password" v-model="passWord">
        {{ passWord }}
        <input type="button" value="Login" @click="login">
        {{ error }}
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: '',
    data () {
        return {
            userName: '',
            passWord: '',
            error : ''
        }
    },
    methods: {
        login(){
            if( this.userName !== '' && this.passWord !== '') {
                console.log('call api login')
                const _data = {
                    'email' : this.userName,
                    'pass' : this.passWord
                }
                this.call(_data).then(res => {
                    this.$router.push({ name: 'Members'} )
                })

            }else {
                this.error = 'username , password not have null !!'
            }
        },
        call(data){
            let _data = data
            return new Promise((resolve, reject) => {
                axios.post( 'http://localhost:3100/api/user/signin',
                    _data,
                    {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }
                ).then(function(respon){
                    console.log(respon.data);
                    console.dir(respon)
                    resolve(respon)
                    // this.$router.push({ name: 'Home' })
                    // this.$route.router.go('/api/member/')
                    // this.props.history.push("/");
                    // window.location = "http://localhost:3001/"

                })
                .catch(function(){
                    console.log('FAILURE!!');
                    reject('error')
                });
            })
        }
    }
}
</script>

<style scoped>
    .login {
        width: 50%;
        /* height: 100%; */
        margin: 0 auto;
    }

    .login input {
        border: 1px solid #ced4da;
        width: 100%;
        padding: 1em 0;
        margin: 1em 0;
        border-radius: .25rem;
    }
</style>