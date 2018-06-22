// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置
import Dictionary from "./pages/system/Dictionary"
const headerMenuConfig = []

const asideMenuConfig = [
  {
    path: '/system',
    name: '系统管理',
    children: [
      {
        path: '/system/dictionary',
        name: '词典管理',
        components: Dictionary
      }
    ]
  },
  {
    path: '/medical',
    name: '医患管理',
    children: [
      {
        path: '/hospital',
        name: '医院列表'
      }
    ]
  },
  {
    path: '/product',
    name: '产品管理',
    children: [
      {
        path: '/supplier',
        name: '供应商管理'
      },
      {
        path: '/info',
        name: '产品信息'
      },
      {
        path: '/testing',
        name: '检测管理'
      }
    ]
  },
  {
    path: '/order',
    name: '订单管理',
    children: [
      {
        path: '/list',
        name: '订单列表'
      }
    ]
  },
  {
    path: '/jurisdiction',
    name: '权限管理',
    children: [
      {
        path: '/groups',
        name: '用户组管理'
      },
      {
        path: '/admin',
        name: '管理员列表'
      }
    ]
  }
]

export { headerMenuConfig, asideMenuConfig }
