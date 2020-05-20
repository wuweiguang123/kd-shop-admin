import Vue from 'vue'
import {
  Button, Switch,
  Form, FormItem, Input,
  Message, MessageBox,
  Container, Header, Aside, Main,
  Menu, MenuItem, Submenu,
  Breadcrumb, BreadcrumbItem,
  Card,
  Table, TableColumn, Pagination
} from 'element-ui'

Vue.use(Button)
Vue.use(Switch)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Pagination)
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
