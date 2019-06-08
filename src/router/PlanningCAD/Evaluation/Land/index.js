// 规划辅助编制->双评价->国土空间开发适宜性评价
import Land from "@/views/PlanningCAD/Evaluation/Land.vue"

export default {
    path: "land",
    name: "land",
    component: Land,
    meta: {
        roles: ['user', 'admin']
    }
}