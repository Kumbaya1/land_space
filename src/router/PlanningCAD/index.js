// 规划辅助编编制
import PlanningCAD from '@/views/PlanningCAD/PlanningCAD.vue'

// 规划辅助编制->现状分析
import Present from "./Present"

// 规划辅助编制->双评价
import Evaluation from "./Evaluation"

// 规划辅助编制->三区三线划定
import Delimitation from "./Delimitation"

// 规划辅助编制->发展预测
import Forecast from "./Forecast"

// 规划辅助编制->要素配置
import Factor from "./Factor"


export default {
    path: "planningcad",
    component: PlanningCAD,
    name: "Planningcad",
    children: [
        Present,
        Evaluation,
        Delimitation,
        Forecast,
        Factor
    ]
}