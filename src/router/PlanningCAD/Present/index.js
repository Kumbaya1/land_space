// 规划辅助编制->现状分析
import Present from "@/views/PlanningCAD/Present/Present.vue"
import Analysis from "@/views/PlanningCAD/Present/Analysis.vue"
import Protect from "@/views/PlanningCAD/Present/Protect.vue"
import Development from "@/views/PlanningCAD/Present/Development.vue"
import Running from "@/views/PlanningCAD/Present/Running.vue"
export default {
    path: 'present',
    name: 'present',
    component: Present,
    children: [
        {
            path: "analysis",
            component: Analysis,
            meta: {
                roles: ['user', 'admin']
            }
        },
        {
            path: "protect",
            component: Protect,
            meta: {
                roles: ['user', 'admin']
            }
        },
        {
            path: "development",
            component: Development,
            meta: {
                roles: ['user', 'admin']
            }
        },
        {
            path: "running",
            component: Running,
            meta: {
                roles: ['user', 'admin']
            }
        },

    ]
}