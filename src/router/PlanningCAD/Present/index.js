// 规划辅助编制->现状分析
import Present from "@/views/PlanningCAD/Present/Present.vue"

// 规划辅助编制->现状分析->自然资源分析
import Analysis from "@/views/PlanningCAD/Present/Analysis.vue"
// 规划辅助编制->现状分析->国土空间保护
import Protect from "@/views/PlanningCAD/Present/Protect.vue"
// 规划辅助编制->现状分析->国土空间开发
import Development from "@/views/PlanningCAD/Present/Development.vue"
// 规划辅助编制->现状分析->城市运行情况
import Running from "@/views/PlanningCAD/Present/Running.vue"
export default {
    path: 'present',
    name: 'present',
    component: Present,
    meta: {
        roleName: "present"
    },
    children: [
        {
            path: "analysis",
            component: Analysis,
            meta: {
                roleName: "zranalysis"
            }
        },
        {
            path: "protect",
            component: Protect,
            meta: {
                roleName: "protect"
            }
        },
        {
            path: "development",
            component: Development,
            meta: {
                roleName: "development"
            }
        },
        {
            path: "running",
            component: Running,
            meta: {
                roleName: "running"
            }
        },

    ]
}