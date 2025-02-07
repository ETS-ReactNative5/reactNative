import React from "react";
import { Easing, Animated, Dimensions } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Block } from "galio-framework";

// screens
import Home from "../screens/Home";
import Onboarding from "../screens/Onboarding";
import Pro from "../screens/Pro";    
import Profile from "../screens/Profile";
import Register from "../screens/Register";
import Elements from "../screens/Elements";
import Messages from "../screens/Messages";
import AddCasContact from "../screens/AddCasContact";
import Articles from "../screens/Articles";
import Donnees from "../screens/Donnees";
import Login from "../screens/Login";
import EditProfile from "../screens/EditProfile";
import CatMessages from "../screens/CatMessages";
import Param from "../screens/Param";
// drawer
import CustomDrawerContent from "./Menu";

// header for screens
import { Icon } from "../components"; 
import Header  from "../components/Header"; 
import { argonTheme, tabs } from "../constants";

const { width } = Dimensions.get("screen");

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function ElementsStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Données"
        component={Elements}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Données" navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
            <Stack.Screen
        name="Pro"
        component={Pro}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  );
}
function MessagesStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Messages"
        component={Messages}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Messages" navigation={navigation} scene={scene} back={true}/>
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
    </Stack.Navigator>
  );
}
function CatMessagesStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="CatMessages"
        component={CatMessages}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Messages" navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
    </Stack.Navigator>
  );
}
function AddCasContactStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="AddCasContact"
        component={AddCasContact}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Nouveau Contact" navigation={navigation} scene={scene} back={true}/>
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
    </Stack.Navigator>
  );
}
function EditProfileStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Edit Profile" navigation={navigation} scene={scene} back={true}/>
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
    </Stack.Navigator>
  );
}
function ParamStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Param"
        component={Param}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Nouveau Paramètre" navigation={navigation} scene={scene} back={true}/>
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
    </Stack.Navigator>
  );
}

function ArticlesStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen 
        name="Articles"
        component={Donnees}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Données" 
              title="Données"
              search
              tabs={[{ id: 'messure', title: 'Nouveau paramètre', type: true }]}
              navigation={navigation}
              data = {true}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
    </Stack.Navigator>
  );
}

function ProfileStack(props) {
  return (
    <Stack.Navigator initialRouteName="Profile" mode="card" headerMode="screen">
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              white
              title="Profile"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" },
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  );
}

function HomeStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Journal"
        component={Home}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Journal"
              search
              // options
              tabs={tabs.categories}
              navigation={navigation}
              // scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
      <Stack.Screen
        name="Pro"
        component={Pro}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            /> 
          ),
          headerTransparent: true
        }}
      /> 
    </Stack.Navigator>
  );
}
// export default function OnboardingStack(props) {
//   return (
//     <Stack.Navigator mode="card" headerMode="none">
//       <Stack.Screen
//         name="Onboarding"
//         component={Onboarding}
//         option={{
//           headerTransparent: true
//         }}
//       />
//       <Stack.Screen name="App" component={AppStack} />
//     </Stack.Navigator>
//   );   
// }
function RegisterStack(props) { 
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen
        name="Register"
        component={Register}
        option={{
          headerTransparent: true
        }}
      /> 
      <Stack.Screen name="App" component={AppStack} />
    </Stack.Navigator>
  );
}
export default function OnboardingStack(props) { 
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen
        name="login"
        component={Login}
        option={{
          headerTransparent: true
        }}
      /> 
      <Stack.Screen name="App" component={AppStack} />
      <Stack.Screen name="Register" component={RegisterStack} />
    </Stack.Navigator>
  );
}


function AppStack(props) {
  return (
    <Drawer.Navigator
      style={{ flex: 1 }}
      drawerContent={props => <CustomDrawerContent {...props} />}
      drawerStyle={{
        backgroundColor: "white",
        width: width * 0.8
      }}
      drawerContentOptions={{
        activeTintcolor: "white",
        inactiveTintColor: "#000",
        activeBackgroundColor: "transparent",
        itemStyle: {
          width: width * 0.75,
          backgroundColor: "transparent",
          paddingVertical: 16,
          paddingHorizonal: 12,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          overflow: "hidden"
        },
        labelStyle: {
          fontSize: 18,
          marginLeft: 12,  
          fontWeight: "normal"
        }
      }}
      initialRouteName="Home" 
    >
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Profile" component={ProfileStack} />
      <Drawer.Screen name="Account" component={RegisterStack} />
      <Drawer.Screen name="Elements" component={ElementsStack} />
      <Drawer.Screen name="Messages" component={MessagesStack} />
      <Drawer.Screen name="CatMessages" component={CatMessagesStack} />
      <Drawer.Screen name="EditProfile" component={EditProfileStack} />
      <Drawer.Screen name="AddCasContact" component={AddCasContactStack} />
      <Drawer.Screen name="Param" component={ParamStack} />
      <Drawer.Screen name="Articles" component={ArticlesStack} />
    </Drawer.Navigator>
  );
}

