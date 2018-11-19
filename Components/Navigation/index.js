import { createStackNavigator } from "react-navigation";

import CoffeeCart from "../CoffeeCart";
import CoffeeDetail from "../CoffeeDetail";
import CoffeeList from "../CoffeeList";
import HomePage from "../HomePage";
import Login from "../Login";

const OurStack = createStackNavigator(
  {
    CoffeeList: CoffeeList,
    CoffeeCart: CoffeeCart,
    CoffeeDetail: CoffeeDetail,
    Login: Login
  },
  {
    initialRouteName: "Login",
    navigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "transparent"
      },
      headerTextStyle: {
        fontWeight: "bold"
      }
    },
    cardStyle: {
      backgroundColor: "rgb(20,90,100)"
    }
  }
);

export default OurStack;
