import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from '../components/Metrics';

function Home() {
  return (
    <ScrollView style={styles.rootContainer}>
      <Text style={styles.heading}>Newspaper.</Text>
      <View style={styles.article}>
        <Text style={styles.date}>03 February 2023 / 12.00</Text>
        <Text style={styles.headline}>
          The World Is Stunned! The Fifth Emperor of the Sea Emerges!
        </Text>
        <View style={styles.imageContainer}>
          <View style={styles.posterContainer}>
            <Image
              source={require('../assets/images/wantedLuffy.jpg')}
              style={styles.poster}
            />
          </View>
        </View>
        <View style={styles.articleTextConatiner}>
          <Text style={styles.articleText}>
            One of the Whole Cake Island arc’s greatest contributions to One
            Piece at large was Luffy’s new bounty and title. With a bounty of
            1.5 billion Beri, Luffy was being hailed as the Fifth Emperor of the
            Sea. While many fans welcomed this revelation, others felt it was
            unjustified and Luffy had not yet risen to the level of Yonko. Yet
            with One Piece providing more and more evidence for this claim by
            the chapter, it’s inarguable that Luffy is indeed One Piece’s Fifth
            Emperor.
          </Text>
          <Text style={styles.articleText}>
            Throughout the New World, Luffy has surpassed himself and opponents
            time and time again in terms of power and strength. The debut of
            Gear Fourth’s Bounce Man against Doflamingo was the foundation,
            showing Luffy had developed new means of fighting over the
            time-skip. The debut of Snake Man versus Katakuri also contributes
            to this foundation.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default Home;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#D3CAB1',
  },
  heading: {
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(15),
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: '#3D2F23',
    borderBottomColor: '#3D2F23',
    backgroundColor: '#D3CAB1',
    color: '#3D2F23',
    fontSize: moderateScale(25),
    fontWeight: 'bold',
    fontFamily: 'NoticiaText-Regular',
  },
  article: {
    marginVertical: verticalScale(25),
    marginHorizontal: horizontalScale(15),
  },
  date: {
    marginBottom: verticalScale(20),
    color: '#3D2F23',
    fontWeight: 'bold',
  },
  headline: {
    marginBottom: verticalScale(25),
    color: '#3D2F23',
    fontSize: moderateScale(35),
    fontWeight: 'bold',
  },
  imageContainer: {
    marginBottom: verticalScale(20),
    alignItems: 'center',
  },
  posterContainer: {
    height: verticalScale(350),
    width: horizontalScale(230),
    borderColor: '#3D2F23',
    borderWidth: 2,
  },
  poster: {
    flex: 1,
  },
  articleTextConatiner: {},
  articleText: {
    marginBottom: verticalScale(10),
    color: '#3D2F23',
    fontSize: verticalScale(20),
    lineHeight: moderateScale(30),
  },
});
