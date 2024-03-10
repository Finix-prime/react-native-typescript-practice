declare module '@react-navigation/stack' {
    import { RouteProp } from '@react-navigation/native';
    import { NativeStackNavigationProp } from '@react-navigation/native-stack';

    type RootStackParamList = {
        PreInfo: undefined;
        IdCard: undefined;
        // Add other screens here
    };

    type NavigationProps<T extends keyof RootStackParamList> = {
        navigation: NativeStackNavigationProp<RootStackParamList, T>;
        route: RouteProp<RootStackParamList, T>;
    };
}
