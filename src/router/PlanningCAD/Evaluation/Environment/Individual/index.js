// 规划辅助编制->双评价->环境资源承载能力评价->要素单项评价
import Individual from "@/views/PlanningCAD/Evaluation/Environment/Individual/Individual.vue"


// 规划辅助编制->双评价->环境资源承载能力评价->要素单项评价->土地资源评价
import Landeva from "@/views/PlanningCAD/Evaluation/Environment/Individual/Landeva.vue"
// 规划辅助编制->双评价->环境资源承载能力评价->要素单项评价->水资源评价
import Watereva from "@/views/PlanningCAD/Evaluation/Environment/Individual/Watereva.vue"
// 规划辅助编制->双评价->环境资源承载能力评价->要素单项评价->海洋资源评价
import Seaeva from "@/views/PlanningCAD/Evaluation/Environment/Individual/Seaeva.vue"
// 规划辅助编制->双评价->环境资源承载能力评价->要素单项评价->环境资源评价
import Enveva from "@/views/PlanningCAD/Evaluation/Environment/Individual/Enveva.vue"
// 规划辅助编制->双评价->环境资源承载能力评价->要素单项评价->生态资源评价
import Ecologyeva from "@/views/PlanningCAD/Evaluation/Environment/Individual/Ecologyeva.vue"
// 规划辅助编制->双评价->环境资源承载能力评价->要素单项评价->灾害资源评价
import Disaster from "@/views/PlanningCAD/Evaluation/Environment/Individual/Disaster.vue"

export default {
    path: "individual",
    name: "individual",
    component: Individual,
    children: [
        {
            path: "landeva",
            name: "landeva",
            component:Landeva,
            meta:{
                roles:["user","admin"]
            }
        },
        {
            path: "watereva",
            name: "watereva",
            component:Watereva,
            meta:{
                roles:["user","admin"]
            }
        },
        {
            path: "seaeva",
            name: "seaeva",
            component:Seaeva,
            meta:{
                roles:["user","admin"]
            }
        },
        {
            path: "enveva",
            name: "enveva",
            component:Enveva,
            meta:{
                roles:["user","admin"]
            }
        },
        {
            path: "ecologyeva",
            name: "ecologyeva",
            component:Ecologyeva,
            meta:{
                roles:["user","admin"]
            }
        },
        {
            path: "disaster",
            name: "disaster",
            component:Disaster,
            meta:{
                roles:["user","admin"]
            }
        }
    ]
}