import { createRouter, createWebHashHistory } from 'vue-router'

// 导入各个视图组件
import Chat from '../views/Chat.vue'
import Settings from '../views/Settings.vue'
import AddContact from '../views/AddContact.vue'
import Help from '../views/Help.vue'
import Switch from '../views/Switch.vue'

// 创建路由实例
const router = createRouter({
  // 使用 Web Hash History 模式
  // 这种模式会在 URL 中使用 # 来模拟完整的 URL，适用于不支持 HTML5 History API 的浏览器
  history: createWebHashHistory(import.meta.env.BASE_URL),

  // 定义路由规则
  routes: [
    {
      path: '/',
      name: 'Switch', // 主页路由 
      component: Switch // 对应的组件
    },
    {
      path: '/chat/:contactId', // 动态路径参数 :contactId
      name: 'ChatRoom', // 聊天室路由路由名称
      component: Chat, // 对应的组件
      props: true, // 将路径参数作为 props 传递给组件
    },
    {
      path: '/settings',
      name: 'Settings', // 设置页面路由 
      component: Settings // 对应的组件
    },
    {
      path: '/newcontact',
      name: 'AddContact', // 添加联系人页面路由 
      component: AddContact // 对应的组件
    },
    {
      path: '/help',
      name: 'Help', // 帮助页面路由 
      component: Help // 对应的组件
    },
  ]
})

// 导出路由实例，以便在应用中使用
export default router