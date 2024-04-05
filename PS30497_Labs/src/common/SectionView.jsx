import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const SectionView = (props) => {
  const { eventInfo, styles,
    eventComponent, contentComponent,
    titleStyle, contentStyle } = props

  const renderSection = (dataSection, indexSection) => {
    const { title, events, titleStyle } = dataSection;
    return (
      <View key={indexSection.toString()} style={styles.section}>
        <Text style={[styles.titleSection, titleStyle]}>{title}</Text>
        <View style={[styles.sectionBody, styles.shadow]}>
          {events?.map(renderChild)}
        </View>
      </View>
    )
  }

  const renderChild = (dataChild, indexChild) => {
    const { title, content, image, buttonTitle } = dataChild;
    return (
      eventComponent || (
        <View key={indexChild.toString()} style={styles.containerChild}>
          <Text style={[styles.titleChild, titleStyle]}>{title}</Text>
          {contentComponent || (
            content && <Text style={[styles.contentChild, contentStyle]}>{content}</Text>
          )}
          {image && <Image source={image} style={styles.image} />}
          {buttonTitle && <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonTitle}>{buttonTitle}</Text>
          </TouchableOpacity>}
        </View >
      )
    )
  }
  return (
    <ScrollView
      style={styles.container}>
      {eventInfo?.map?.(renderSection)}
    </ScrollView>
  )
}

export default SectionView

const styles = StyleSheet.create({})