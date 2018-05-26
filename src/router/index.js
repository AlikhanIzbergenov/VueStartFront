import Vue from 'vue'
import Router from 'vue-router'
import AppAdmin from '@/components/admin/Admin'
import AppAdminProfile from '@/components/admin/Profile'

import AppContent from '@/components/content/Content'

import Page404 from '@/components/common/page404'


import AppLogin from '@/components/system/Login'
import AppRegister from '@/components/system/Regist'


import AppChat from '@/components/user/Chat'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/admin',
            component: AppAdmin,
            children: [
                {
                    path: '/profile',
                    component: AppAdminProfile
        },

      ]
    }, {
            path: '/login',
            component: AppLogin,
            name: "login"

        }, {
            path: '/register',
            name: "register",
            component: AppRegister

        },
        {
            path: '/',
            component: AppContent,
            children: [

                {
                    path: '/chat',
                    name: "chat",
                    component: AppChat

                },

                {
                    path: '*',
                    name: "page404",
                    component: Page404
                }

      ]

    }

  ]
})
