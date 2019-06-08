// 规划辅助审查
import Review from "@/views/Review/Review.vue"

export default {
    path: 'review',
    name: 'review',
    component: Review,
    meta: {
        roles: ['user', 'admin']
    }
}