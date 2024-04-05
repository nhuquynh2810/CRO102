import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import RenderLeft from '../../common/RenderLeft'
import RenderCenter from '../../common/RenderCenter'
import { Header } from 'react-native/Libraries/NewAppScreen'
import RenderRighttt from '../../common/RenderRighttt'
const Bai1 = () => {

    const getCenterStyle = () => {
        return {

        }
    }
    const getIconStyle = () => {
        return {
            width: 30,
            height: 30,
        }
    }

    const getTitleStyle = () => {
        return {
            color: '#000',
            fontSize: 20,
            fontWeight: '600'
        }
    }
    const getContainerStyle = () => {
        return {
            backgroundColor: '#fff',
            width: '100%',
            height: '100%',
        }
    }
    const getHeaderStyle = () => {
        return {
            width: '100%',
            height: 50,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottomColor: 'grey',
            borderBottomWidth: 1,
            borderStyle: 'solid',
            paddingHorizontal: 10,
        }
    }


    return (
        <View style={getContainerStyle()}>
            <View style={getHeaderStyle()}>
                <RenderLeft
                    styles={{
                        iconLeft: getIconStyle()
                    }}
                    iconLeft={require('../../../resourses/images/back.png')}
                />
                <RenderCenter
                    styles={{
                        renderCenterContain: getCenterStyle(),
                        title: getTitleStyle()
                    }}
                    title={'Header'}
                />
                <RenderRighttt
                    iconRight={require('../../../resourses/images/avatar.png')}
                    styles={{
                        iconRight: getIconStyle()
                    }}
                />
            </View>
            <View style={getHeaderStyle()}>
                <RenderLeft
                    styles={{}}
                    iconLeft={require('../../../resourses/images/back.png')}
                />
                <RenderCenter
                    styles={{
                        renderCenterContain: getCenterStyle(),
                        title: getTitleStyle()
                    }}
                    title={'Trang chủ'}
                />
                 <RenderRighttt
                    iconRight={{}}
                    styles={{
                        iconRight: getIconStyle()
                    }}
                />
            </View>
            <View style={getHeaderStyle()}>
                <RenderLeft
                    styles={{}}
                    iconLeft={require('../../../resourses/images/back.png')}
                />
                <RenderCenter
                    styles={{
                        renderCenterContain: getCenterStyle(),
                        title: getTitleStyle()
                    }}
                    title={''}
                />
                 <RenderRighttt
                    iconRight={{}}
                    styles={{
                        iconRight: getIconStyle()
                    }}
                />
            </View>
        </View>
    )
}

export default Bai1
const styles = StyleSheet.create({
    dfsf: {


    }
})