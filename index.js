import React from "react";
import { View, TouchableOpacity, Animated, Dimensions } from "react-native";

var { height, width } = Dimensions.get("window");

export default class SlidingPane extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dim: 0, open: false };
  }

  open = false;

  componentDidMount() {
    this.setState({
      dim: new Animated.Value(width)
    });
  }

  componentWillReceiveProps(nextProps) {
    this.handlePress(nextProps);
  }

  handlePress = nextProps => {
    this.open = !this.open;
    if (this.open) {
      Animated.timing(this.state.dim, {
        toValue: width / 2.8,
        duration: 250
      }).start();
    } else {
      Animated.timing(this.state.dim, {
        toValue: width,
        duration: 250
      }).start();
    }
    this.setState({ open: this.open });
  };

  close = () => {
    if (this.props.closeOnTapOutside === false) {
      return;
    } else {
      Animated.timing(this.state.dim, {
        toValue: width,
        duration: 250
      }).start();
      this.open = false;
      this.setState({ open: false });
    }
  };

  render() {
    let drawer = (
      <Animated.View
        style={{
          position: "absolute",
          right: this.props.left ? 0 : this.state.dim,
          top: 0,
          bottom: 0,
          left: this.props.left ? this.state.dim : 0,
          backgroundColor: "white"
        }}
      >
        {this.props.layout}
      </Animated.View>
    );

    return (
      <View
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          left: 0
        }}
      >
        <TouchableOpacity
          onPress={() => this.close()}
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            left: this.state.open ? 0 : width,
            backgroundColor: "#62585858"
          }}
        />
        {drawer}
      </View>
    );
  }
}
