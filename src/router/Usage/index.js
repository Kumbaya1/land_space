// 用途管制
import Usage from "@/views/Usage/Usage.vue"

export default {
    path: 'usage',
    name: 'usage',
    component: Usage,
    meta: {
        roles: ['user', 'admin']
    }
}