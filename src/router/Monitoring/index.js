// 监测评估预警
import Monitoring from "@/views/Monitoring/Monitoring.vue"

export default {
    path: 'monitoring',
    name: 'monitoring',
    component: Monitoring,
    meta: {
        roles: ['user', 'admin']
    }
}