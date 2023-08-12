import {
    View,
    Dimensions,
    StyleSheet,
    ScrollView,
    Animated
} from 'react-native'
import React, { useRef } from 'react'

import FormHeader from './FormHeader'
import FormSelectorBtn from './FormSelectorBtn'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'


const { width } = Dimensions.get('window')

const AppForm = ({ navigation }) => {
    const animation = useRef(new Animated.Value(0)).current;
    const scrollView = useRef();

    const rightHeaderOpacity = animation.interpolate({
        inputRange: [0, width],
        outputRange: [1, 0]
    });
    const rightHeaderTranslateY = animation.interpolate({
        inputRange: [0, width],
        outputRange: [0, -20],
    })
    const leftHeaderTranslateX = animation.interpolate({
        inputRange: [0, width],
        outputRange: [0, 40]
    })
    const loginColorInterpolate = animation.interpolate({
        inputRange: [0, width],
        outputRange: ['rgba(27,27,51,1)', 'rgba(27,27,51,0.4)']
    })
    const signupColorInterpolate = animation.interpolate({
        inputRange: [0, width],
        outputRange: ['rgba(27,27,51,0.4)', 'rgba(27,27,51,1)']
    })

    return (
        <View style={{ flex: 1, paddingTop: 120 }}>
            <View style={{ height: 80 }}>
                <FormHeader
                    leftHeading='Selamat Datang'
                    rightHeading='Kembali'
                    subHeading='React Authentication Project'
                    leftHeaderTranslateX={leftHeaderTranslateX}
                    rightHeaderTranslateY={rightHeaderTranslateY}
                    rightHeaderOpacity={rightHeaderOpacity}
                />
            </View>
            <View style={{ flexDirection: 'row', paddingHorizontal: 20, marginBottom: 20 }}>

                <FormSelectorBtn
                    style={styles.borderLeft}
                    title='Masuk'
                    backgroundColor={loginColorInterpolate}
                    onPress={() => scrollView.current.scrollTo({ x: 0 })} />

                <FormSelectorBtn
                    style={styles.borderRight}
                    title='Daftar'
                    backgroundColor={signupColorInterpolate}
                    onPress={() => scrollView.current.scrollTo({ x: width })} />
            </View>
            <ScrollView
                horizontal
                ref={scrollView}
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16}
                onScroll={Animated.event(
                    [{
                        nativeEvent: {
                            contentOffset: {
                                x: animation
                            }
                        }
                    }],
                    { useNativeDriver: false }
                )}
            >
                <LoginForm navigation={navigation} />
                <ScrollView>
                    <SignupForm navigation={navigation} />
                </ScrollView>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    borderLeft: {
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8
    },
    borderRight: {
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8
    }
})

export default AppForm