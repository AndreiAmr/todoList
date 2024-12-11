import { Tabs } from 'expo-router';

const TabsLayout = () => {
  return (
    <Tabs initialRouteName="home" screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="home" />
      <Tabs.Screen name="calendario" />
      <Tabs.Screen name="config" />
    </Tabs>
  );
};

export default TabsLayout;
