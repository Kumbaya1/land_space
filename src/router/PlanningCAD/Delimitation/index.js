// 规划辅助编制->三区三线划定
import Delimitation from "@/views/PlanningCAD/Delimitation/Delimitation.vue"

export default {
    path: "delimitation",
    name: "delimitation",
    component: Delimitation,
    meta: {
        roles: ['user', 'admin']
    }
}