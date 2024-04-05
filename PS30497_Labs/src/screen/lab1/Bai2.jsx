import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SectionView from '../../common/SectionView';

const Bai2 = () => {
  const getContainerStyle = () =>{
    return{
      flex: 1,
      padding: 10,
    }
  }

  const getTitleStyle=()=>{
    return{
      fontSize: 25,
      fontWeight: 'bold',
      marginHorizontal: 10,
    }
  }
  const getSectionBody=()=>{
    return{
      margin: 10,
      backgroundColor: '#fff',
      borderRadius: 8,
      paddingVertical: 10,
      paddingHorizontal: 15,
      width: '95%',
      marginBottom: 40
    }
  }
  const getShadow=()=>{
    return{
      elevation: 4
    }
  }
  const getTitleChild=()=>{
    return{
      fontSize: 20,
      fontWeight: '600',
      color: '#000',
    }
  }
  const getContentChild=()=>{
    return{
      fontSize: 17,
      fontWeight: '400',
    }
  }
  const getImageStyle=()=>{
    return{
      width: '100%',
      height: 250,
    }
  }
  const getButtonStyle=()=>{
    return{
      backgroundColor: 'blue',
      width: '100%',
      height: 50,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    }
  }
  const getButtonTitleStyle=()=>{
    return{
      fontSize: 20,
      color: '#fff',
    }
  }

  const eventInfo = [
    {
      title: 'Lịch trình',
      events: [
        {
          title: 'Địa điểm',
          content: 'Hồ Tràm, Vũng Tàu'
        },
        {
          title: 'Thời gian',
          content: '09:00 AM - 12: 00 AM, 12/12/2024'
        },
        {
          title: 'Phương tiện di chuyển',
          content: 'Xe bus'
        },
        {
          title: 'Thời gian', content: '21:00 - 22:00'
        },
        {
          title: 'Hình ảnh',
          image: require('../../../resourses/images/HoTram.jpg')
        },
      ],
    },
    {
      title: 'Khách sạn',
      events: [
        {
          title: 'Tên khách sạn',
          content: 'Hồng Quỳnh'
        },
        {
          title: 'Giờ mở cửa',
          content: '06:00 AM - 12:00 AM'
        },
        {
          title: 'Địa điểm',
          content: '234 Quang Trung, Hồ Chí Minh'
        },
        {
          title: '',
          buttonTitle: 'CHI TIẾT'
        }
      ],
    },
  ];

  return (
    <SectionView
      styles={{
        container: getContainerStyle(),
        titleSection: getTitleStyle(),
        sectionBody: getSectionBody(),
        shadow: getShadow(),
        titleChild: getTitleChild(),
        contentChild: getContentChild(),
        image: getImageStyle(),
        button: getButtonStyle(),
        buttonTitle: getButtonTitleStyle(),
      }}
      eventInfo={eventInfo}
    />
  )
}

export default Bai2

const styles = StyleSheet.create({

})