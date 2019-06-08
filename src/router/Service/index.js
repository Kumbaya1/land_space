// 公众服务
import Service from "@/views/Service/Service.vue"

export default {
    path: 'service',
    name: 'service',
    component: Service,
    meta: {
        roles: ['user', 'admin']
    }
}