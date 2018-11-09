# react-native-sliding-drawer

A drwer component for your react-native application.

To Download, run: yarn add react-native-sliding-drawer, or npm install -s react-native-sliding-drawer.

Sample Usage:

    import Drawer from "react-native-sliding-drawer";

    openDrawer = () {
      this.setState({ open: true});
    }

    closeDrawer = () {
      this.setState({ open: false});
    }


    render () {
      let myLayout = (
        <View>
          // this is what will be displayed inside the drawer
        </View>
    )
      return (
          <Drawer
           open={this.state.open}
           layout={myLayout}
           closeOnTapOutside={false}   //Default is true
           left={true}/>               // add this to open the drawer from the left side
      )
    }
