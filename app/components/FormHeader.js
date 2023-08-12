import { View, Text, Animated, StyleSheet} from 'react-native'
import React from 'react'

const FormHeader = ({
    leftHeading,
    rightHeading,
    subHeading,
    leftHeaderTranslateX = 40,
    rightHeaderTranslateY = -20,
    rightHeaderOpacity = 0
}) => {
    return (
        <>
            <View style={styles.container}>
                <Animated.Text
                style={[
                    styles.leftheading, {transform: [{translateX: leftHeaderTranslateX}]}
                ]}
                >{leftHeading}</Animated.Text>
                <Animated.Text
                 style={[
                    styles.rightheading, {
                        opacity: rightHeaderOpacity,
                        transform: [{translateX: rightHeaderTranslateY}]}
                ]}
                >{rightHeading}</Animated.Text>
            </View>
            <Text style={styles.subHeading}>{subHeading}</Text>
        </>
    )
}

const styles = StyleSheet.create({
   container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
   },
   leftheading: { fontSize: 25, fontWeight: 'bold', color: '#1b1b33',marginRight: 6 },
   rightheading: {fontSize: 25, fontWeight: 'bold', color: '#1b1b33' },
  subHeading: { fontSize: 18, color: '#1b1b33', textAlign: 'center' },
})

export default FormHeader