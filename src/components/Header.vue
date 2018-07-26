<template>
    <header>
        <div class="bg_logo">
            <div class="hamburger"></div>
            <div class="logo">
                <img src="https://www.bnk48.com/static/img/logo-bnk48.png">
            </div>
            <div class="menu"></div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
    data () {
        return {
            msg: 'Header'
        }
    }
}
</script>

<style scoped>
    header {
        width: 100%;
        min-height: 60px;
        /* height: 60px; */
        background-color: #c58ec3;
    }

    .bg_logo {
        position: relative;
    }

    .logo {
        text-align: center;
    }

    .logo img {
        margin: 0;
        padding: 0;
    }

    .hamburger {
        position: absolute;
        width: 25px;
        height: 3px;
        background-color: #4f2e68;
        top: 50%;
        margin-left: 20px;
    }

    .hamburger::before,
    .hamburger::after {
        content: '';
        position: absolute;
        width: 25px;
        height: 3px;
        background-color: #4f2e68;
    }

    .hamburger::before {
        top: -7px;
    }

    .hamburger::after {
        top: 7px;
    }
</style>