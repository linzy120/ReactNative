import React, {
  Component
} from 'react';
import {
  Animated,
  Easing,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';

export default class Animated3 extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      fadeInOpacity: new Animated.Value(0),
      rotation: new Animated.Value(0),
      fontSize: new Animated.Value(0),
    };

    //this.startAnimation = this.startAnimation.bind(this);
  }

  startAnimation = () => {
    var timing = Animated.timing;
    var that = this;
    Animated.parallel(['fadeInOpacity', 'rotation', 'fontSize'].map(property => {
      return timing(this.state[property], {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear
      });
    })).start(that.startAnimation);
  };

  componentDidMount() {
    this.startAnimation();
  }
  
  render(): ReactElement {
    return (
      <Animated.View style = {
      [styles.demo, {
        opacity: this.state.fadeInOpacity,
        transform: [{
          rotateZ: this.state.rotation.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
          })
        }]
      }]
    } >
      <Animated.Text style = {
        {
          fontSize: this.state.fontSize.interpolate({
            inputRange: [0, 1],
            outputRange: [12, 26]
          })
        }
      } >我骑着七彩祥云出现了
      </Animated.Text>
    </Animated.View>
    );
  }
}

var styles = StyleSheet.create({
  demo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 30
  }
});