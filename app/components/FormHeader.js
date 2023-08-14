import React from 'react';
import { View, StyleSheet, Text, Animated } from 'react-native';

const FormHeader = ({
  leftHeading,
  rightHeading,
  subHeading,
  leftHeaderTranslateX = 40,
  rightHeaderTranslateY = -20,
  rightHeaderOpacity = 0,
}) => {
  return (
    <>
      <View style={styles.container}>
        <Animated.Text
          style={[
            styles.headingLeft,
            { transform: [{ translateX: leftHeaderTranslateX }] },
          ]}
        >
          {leftHeading}
        </Animated.Text>
        <Animated.Text
          style={[
            styles.headingRight,
            {
              opacity: rightHeaderOpacity,
              transform: [{ translateY: rightHeaderTranslateY }],
            },
          ]}
        >
          {rightHeading}
        </Animated.Text>
      </View>
      <Text style={styles.subHeading}>{subHeading}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingLeft: { fontSize: 25, fontWeight: 'bold', color: '#1b1b33' },
  headingRight: { fontSize: 25, fontWeight: 'bold', color: '#1b1b33' },
  subHeading: { fontSize: 18, color: '#1b1b33', textAlign: 'center' },
});

export default FormHeader;
