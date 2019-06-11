// 规划辅助编制->双评价
import Evaluation from "@/views/PlanningCAD/Evaluation/Evaluation.vue"

// 规划辅助编制->双评价->环境资源承载能力评价
import Environment from "./Environment"
// 规划辅助编制->双评价->国土空间开发适宜性评价
import Land from "./Land"
// 规划辅助编制->双评价->综合分析
import CAnalysis from "./CAnalysis"
// 规划辅助编制->双评价->文化保护空间评价
import CProtect from "./CProtect"


export default {
    path: "evaluation",
    name: 'evaluation',
    meta:{
        roleName:"evaluation"
    },
    component: Evaluation,
    children: [
        Environment,
        Land,
        CAnalysis,
        CProtect
    ]
}