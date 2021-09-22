//category
const Welcome = () => import('./components/Welcome.vue' /* webpackChunkName: "resource/js/components/welcome" */)
const CategoryList = () => import('./components/category/List.vue' /* webpackChunkName: "resource/js/components/category/list" */)
const CategoryCreate = () => import('./components/category/Add.vue' /* webpackChunkName: "resource/js/components/category/add" */)
const CategoryEdit = () => import('./components/category/Edit.vue' /* webpackChunkName: "resource/js/components/category/edit" */)

// users
const UserList = () => import('./components/Users/List.vue' /* webpackChunkName: "resource/js/components/user/list" */)
const UserCreate = () => import('./components/Users/Add.vue' /* webpackChunkName: "resource/js/components/user/add" */)
const UserEdit = () => import('./components/Users/Edit.vue' /* webpackChunkName: "resource/js/components/user/edit" */)

export const routes = [
    {
        name: 'home',
        path: '/',
        component: Welcome
    },
    {
        name: 'categoryList',
        path: '/category',
        component: CategoryList
    },
    {
        name: 'categoryEdit',
        path: '/category/:id/edit',
        component: CategoryEdit
    },
    {
        name: 'categoryAdd',
        path: '/category/add',
        component: CategoryCreate
    },

    //users
    {
        name: 'userList',
        path: '/user',
        component: UserList
    },
    {
        name: 'userEdit',
        path: '/user/:id/edit',
        component: UserEdit
    },
    {
        name: 'userAdd',
        path: '/user/add',
        component: UserCreate
    }
]
