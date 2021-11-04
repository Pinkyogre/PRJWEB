import Home from "./src/components/Home";
import UserSettings from "./src/components/UserSettings";
import ShoppingCart from "./src/components/ShoppingCart";

export default   [
    { path: '/', component: Home, name: 'Home' },
    { path: '/user-settings', component: UserSettings, name : 'UserSettings' },
    { path: '/shopping-cart', component: ShoppingCart, name: 'ShoppingCart' },
]