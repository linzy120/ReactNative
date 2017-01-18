import React, { Component } from 'react';
import {
	StyleSheet,
	Text, 
	View, 
} from 'react-native';

import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';

export default React.createClass({
  render() {
    return (
    	<ScrollableTabView
			renderTabBar={() => <DefaultTabBar/>}
			// 默认打开第几个（0为第一个）
			//initialPage={1}
			tabBarPosition='top'
			// 选中的下划线颜色(可操他娘的没起作用)
			//tabBarUnderlineColor='red'
			// 选中的背景颜色
			tabBarBackgroundColor='#fff'
			// 选中的文字颜色
			//tabBarActiveTextColor='red'
			// 未选中的文字颜色
			tabBarInactiveTextColor='#333'
			tabBarTextStyle={{fontSize: 18}}
		>
			<View style={styles.flex} tabLabel='Tab1'>
				<Text>第一页</Text>
			</View>
			<View style={styles.flex} tabLabel='Tab2'>
				<Text>第二页</Text>
			</View>
			<View style={styles.flex} tabLabel='Tab3'>
				<Text>第三页</Text>
			</View>
	    </ScrollableTabView>
    );
  },
});

const styles = StyleSheet.create({
  flex : {
    flex : 1,
    justifyContent: 'center',
	alignItems: 'center',
  },
});