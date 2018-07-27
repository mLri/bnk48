<template>
    <header>
        <div class="bg_logo">
            <div class="toggle_hamburger" @click="toggleSlid">
                <span></span><span></span><span></span>
            </div>
            <div class="logo">
                <img src="https://www.bnk48.com/static/img/logo-bnk48.png">
            </div>
            <div :class="{'menu': true, 'active': active}">
                <div class="close" @click="toggleSlid">
                    <span class="top"></span>
                    <span class="bottom"></span>
                </div>
                <ul>
                    <li @click="toggleSlid"><router-link to="/">Home</router-link></li>
                    <li @click="toggleSlid"><router-link to="/members">Member</router-link></li>
                    <li @click="toggleSlid"><router-link to="/products">Products</router-link></li>
                    <li @click="toggleSlid"><router-link to="/contact">Contact Us</router-link></li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
    data () {
        return {
            active: false
        }
    },
    methods: {
        toggleSlid() {
            if(this.active){
                this.active = false
                return
            }
            this.active = true
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

/* Hambuger After Before */
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
/* --- End Hambuger After Before --- */

/* Desktop */
    /* .toggle_hamburger {
        display: none;
    }

    .bg_logo {
        width: 970px;
        height: auto;
        margin: 0 auto;
    }

    .logo {
        text-align: left;
        float: left;
    }

    .logo img {
        border-left: 1px solid #fff;
        border-right: 1px solid #fff;
    }

    .menu ul {
        margin: 0;
        padding: 0;
    }

    .menu ul li {
        display: inline-block;
        line-height: 60px;
        padding: 0 15px;
    }

    .menu ul li a {
        text-decoration: none;
        color: #fff;
    } */
/* --- Desktop --- */

/* Mobile */
    /* @media screen and (max-width: 991px) {

        .logo {
            text-align: center;
            float: none;
        }

        .logo img {
            border: none;
        }

        .toggle_hamburger {
            display: inline-block;
            position: absolute;
            top: 30%;
            left: 5%;
        }

        .toggle_hamburger span {
            display: block;
            width: 30px;
            height: 5px;
            background-color: #4f2e68;
            margin: 3px 0;
        }

        .menu {
            position: fixed;
            width: 200px;
            height: 100%;
            background-color: #151719;
            top: 0;
            display: block;
            left: -200px;
            transition: all 200ms ease-out;
            
        }

        .menu.active {
            left: 0;
            display: block;
        }

        .menu ul {
            margin: 35px 0 0 0;
            padding: 0;
        }

        .menu ul li {
            list-style: none;
            padding: 15px 10px;
            border-bottom: 1px solid rgba(100, 100, 100, 0.3);
        }

        .menu ul li a {
            color: rgba(230, 230, 230, 0.9);
            text-decoration: none;
        }

        .close {
            position: absolute;
            display: inline-block;
            width: 15%;
            height: 30px;
            right: 0;
        }

        .close .top {
            position: absolute;
            top: 13px;
            right: 0;
            width: 30px;
            height: 5px;
            -ms-transform: rotate(20deg);
            -webkit-transform: rotate(20deg);
            transform: rotate(45deg);
            background-color: rgba(230, 230, 230, 0.9);
        }

        .close .bottom {
            position: absolute;
            top: 13px;
            right: 0;
            width: 30px;
            height: 5px;
            -ms-transform: rotate(135deg);
            -webkit-transform: rotate(135deg);
            transform: rotate(135deg);
            background-color: rgba(230, 230, 230, 0.9);
        }
    } */
/* --- END Mobile --- */

/* TOGGLE HAMBURGER */
    .toggle_hamburger {
        position: absolute;
        top: 30%;
        left: 5%;
    }

    .toggle_hamburger span {
        display: block;
        width: 30px;
        height: 5px;
        background-color: #4f2e68;
        margin: 3px 0;
    }

    .menu {
        position: fixed;
        width: 200px;
        height: 100%;
        background-color: #151719;
        top: 0;
        display: block;
        left: -200px;
        transition: left 200ms ease-out;
        z-index: 10;
    }

    .menu.active {
        left: 0;
        display: block;
    }

    .menu ul {
        margin: 35px 0 0 0;
        padding: 0;
    }

    .menu ul li {
        list-style: none;
        padding: 15px 10px;
        border-bottom: 1px solid rgba(100, 100, 100, 0.3);
    }

    .menu ul li a {
        color: rgba(230, 230, 230, 0.9);
        text-decoration: none;
    }

    .close {
        position: absolute;
        display: inline-block;
        width: 15%;
        height: 30px;
        right: 0;
    }

    .close .top {
        position: absolute;
        top: 13px;
        right: 0;
        width: 30px;
        height: 5px;
        -ms-transform: rotate(20deg); 
        -webkit-transform: rotate(20deg);
        transform: rotate(45deg);
        background-color: rgba(230, 230, 230, 0.9);
    }

    .close .bottom {
        position: absolute;
        top: 13px;
        right: 0;
        width: 30px;
        height: 5px;
        -ms-transform: rotate(135deg);
        -webkit-transform: rotate(135deg);
        transform: rotate(135deg);
        background-color: rgba(230, 230, 230, 0.9);
    }
/* --- END TOGGLE HAMBUGER --- */

/* MEDIA QUERY */

@media screen and (min-width: 992px) {
    .toggle_hamburger {
        display: none;
    }

    .bg_logo {
        width: 970px;
        height: auto;
        margin: 0 auto;
    }
    
    .logo {
        text-align: left;
        float: left;
    }

    .logo img {
        border-left: 1px solid #fff;
        border-right: 1px solid #fff;
    }

    .menu {
        position: relative;
        float: left;
        left: inherit;
        width: 80%;
        background-color: transparent;
    }

    .menu ul {
        margin: 0;
        padding: 8px 15px 0 15px;
    }

    .menu ul li {
        display: inline-block;
        border-bottom: none;
    }

    .menu ul li a {
        color: #fff;
    }

    .close {
        display: none;
    } 
}
</style>