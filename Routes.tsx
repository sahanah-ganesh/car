import 'react-native-gesture-handler'
import * as React from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import {
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faGlobeAsia, faUser } from '@fortawesome/free-solid-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  )
}

function SettingsScreen(): React.ReactElement {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  )
}

const Tab = createBottomTabNavigator()

type CustomIconTab = {
  iconName: IconProp
  color: string
  size: number
}

function CustomIconTab({
  iconName,
  color,
  size = 24,
}: CustomIconTab): React.ReactElement {
  return <FontAwesomeIcon icon={iconName} color={color} size={size} />
}

type tabBarIconProps = {
  color: string
}

export function Routes(): React.ReactElement {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }: tabBarIconProps): React.ReactElement => {
            let iconName
            if (route.name === 'Home') {
              iconName = faGlobeAsia
            } else {
              iconName = faUser
            }
            return <CustomIconTab iconName={iconName} color={color} size={24} />
          },
        })}
        tabBarOptions={{
          activeTintColor: '#771CBF',
          inactiveTintColor: '#E8E8E8',
          showLabel: false,
        }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
