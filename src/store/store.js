import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    headMenus: [],
    sideMenus: [
      {
        name: "资源环境承载能力评价",
        icon: "<i class='iconfont icon-ziyuan'></i>",
        children: [
          {
            name: "数据准备",
            path: "/planningcad/evaluation/environment/datapre",
            icon: "<i class='el-icon-star-on'></i>"
          },
          {
            name: "要素单项评价",
            icon: "<i class='iconfont icon-zheng'></i>",
            children: [
              {
                name: "土地资源评价",
                path: "/planningcad/evaluation/environment/individual/landeva",
                icon: "<i class='iconfont icon-ling'></i>"
              },
              {
                name: "水资源评价",
                path: "/planningcad/evaluation/environment/individual/watereva",
                icon: "<i class='iconfont icon-ling'></i>"
              },
              {
                name: "海洋资源评价",
                path: "/planningcad/evaluation/environment/individual/seaeva",
                icon: "<i class='iconfont icon-ling'></i>"
              },
              {
                name: "环境评价",
                path: "/planningcad/evaluation/environment/individual/enveva",
                icon: "<i class='iconfont icon-ling'></i>"
              },
              {
                name: "生态评价",
                path: "/planningcad/evaluation/environment/individual/ecologyeva",
                icon: "<i class='iconfont icon-ling'></i>"
              },
              {
                name: "灾害评价",
                path: "/planningcad/evaluation/environment/individual/disaster",
                icon: "<i class='iconfont icon-ling'></i>"
              }
            ]
          },
          {
            name: "集成评价",
            path: "/planningcad/evaluation/environment/integrated",
            icon: "<i class='iconfont icon-zheng'></i>"
          }
        ]
      },
      {
        name: "国土空间开发适宜性评价",
        path: "/planningcad/evaluation/land",
        icon: "<i class='iconfont icon-guotu'></i>"
      },
      {
        name: "综合分析",
        path: "/planningcad/evaluation/analysis",
        icon: "<i class='iconfont icon-zonghe'></i>"
      },
      {
        name: "文化保护空间评价",
        path: "/planningcad/evaluation/protect",
        icon: "<i class='iconfont icon-wenhua'></i>"
      }
    ],
    userInfo: {},
    permissions: [],
  },
  mutations: {
    UPDATEMENUS(state, payload) {
      if (payload.type == "head") {
        state.headMenus = payload.menus;
      } else {
        state.sideMenus = payload.menus;
      }
    }
  },
  actions: {
    // 获取菜单列表
    updateMenus({ commit }, payload) {
      commit("UPDATEMENUS", payload)
    }
  }
})
