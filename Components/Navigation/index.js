import { createStackNavigator } from "react-navigation";

import CoffeeCart from "../CoffeeCart";
import CoffeeDetail from "../CoffeeDetail";
import CoffeeList from "../CoffeeList";
import HomePage from "../HomePage";
import Login from "../Login";

const OurStack = createStackNavigator(
  {
    Home: HomePage,
    CoffeeList: CoffeeList,
    CoffeeCart: CoffeeCart,
    CoffeeDetail: CoffeeDetail,
    Login: Login
  },
  {
    initialRouteName: "Login"
  }
);

export default OurStack;
