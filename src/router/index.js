import Vue from 'vue'
import Router from 'vue-router'
import AppAdmin from '@/components/admin/Admin'
import AppAdminProfile from '@/components/admin/Profile'

import AppContent from '@/components/content/Content'



import AppLogin from '@/components/system/Login'
import AppRegist from '@/components/system/Regist'

Vue.use(Router)

export default new Router({
  mode:'history',
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
    },
    { 
      path: '/', 
      component: AppContent,
      children: [
        {
          path: '/login',
          component: AppLogin
        },
        {
          path: '/regist',
          component: AppRegist
        },
        
      ]
      
    }
    
  ]
})
