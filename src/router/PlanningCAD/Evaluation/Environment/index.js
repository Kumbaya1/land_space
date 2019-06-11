// 规划辅助编制->双评价->资源环境承载能力评价
import Environment from "@/views/PlanningCAD/Evaluation/Environment/Environment.vue"

// 规划辅助编制->双评价->环境资源承载能力评价->数据准备
import Datapre from "@/views/PlanningCAD/Evaluation/Environment/Datapre.vue"
// 规划辅助编制->双评价->环境资源承载能力评价->集成评价
import Integrated from "@/views/PlanningCAD/Evaluation/Environment/Integrated.vue"
// 规划辅助编制->双评价->环境资源承载能力评价->要素单项评价
import Individual from "./Individual"

export default {
    path: "environment",
    name: "environment",
    component: Environment,

    children: [
        {
            path: "datapre",
            name: "datapre",
            component: Datapre,
            meta:{
                roleName:"datapre"
            }
        },
        Individual,
        {
            path: "integrated",
            name: "integrated",
            component: Integrated,
            meta:{
                roleName:"integrated"
            }
        }
    ]
}