import Vue from "vue"
import VueRouter from "vue-router"
import Index from "../components/page/index.vue"
import Login from "../components/page/Login/Login.vue"
import User from "../components/page/PersonalCenter.vue"
import GoodsInfo from "../components/page/GoodsInfo/GoodsInfo.vue"
import goodsComment from "../components/page/GoodsInfo/goodsComment.vue"

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        { path: '/', redirect: '/index' },
        { path: '/index', component: Index },
        { path: '/login', component: Login },
        { path: '/user', component: User },
        {
            path: '/goodsinfo/:id',
            component: GoodsInfo,
            children: [
                { path: 'comment', component: goodsComment }
            ]
        }
    ]

})

router.beforeEach((to, from, next) => {
    if (to.path === '/login') {
        next()
    } else {
        if (localStorage.getItem('token')) {
            next()
        } else {
            next('/login')
        }
    }
})


router.afterEach((to, from, next) => {
    window.scrollTo(0, 0);
})

export default router