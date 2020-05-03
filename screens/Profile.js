import React from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Image, 
  ImageBackground,
  Platform,
  View
} from "react-native";
import { connect } from 'react-redux'
import { Block, Text, theme } from "galio-framework";
import { Button } from "../components";
import { Images, argonTheme } from "../constants";
import { HeaderHeight } from "../constants/utils";

import { Card, ListItem } from 'react-native-elements'
const { width, height } = Dimensions.get("screen");
import { baseUri } from "./StatteFullComponents";

const thumbMeasure = (width - 48 - 32) / 3;

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    console.log(baseUri+"/bundles/mamedcovid/assets/images/pictures/2.jpeg");
    console.log('this.state', this.props)
   const {navigation, data} = this.props;
    return (
      <Block flex style={styles.profile}>
        <Block flex>
          <ImageBackground
            source={Images.ProfileBackground}
            style={styles.profileContainer}
            imageStyle={styles.profileBackground}
          >
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ width, marginTop: '25%' }}
            >
              <Block flex style={styles.profileCard}>
                <Block middle style={styles.avatarContainer}>
                  <Image
                    source={{ uri: baseUri+"/bundles/mamedcovid/assets/images/pictures/2.jpeg" }}
                    style={styles.avatar}
                  />
                </Block>
                <Block style={styles.info}>
                  <Block
                    middle
                    row
                    space="evenly"
                    style={{ marginTop: 20, paddingBottom: 24 }}
                  >
                    <Button
                      small
                      style={styles.optionsButton}
                    >
                      Take picture
                    </Button>
                  </Block>
                  <Block row space="between">
                    <Block middle>
                      <Text
                        bold
                        size={18}
                        color="#525F7F"
                        style={{ marginBottom: 4 }}
                      >
                        Email
                      </Text>
                      <Text size={12} color={argonTheme.COLORS.TEXT}>{data.user.personne.email}</Text>
                    </Block>
                    <Block middle>
                      <Text
                        bold
                        color="#525F7F"
                        size={18}
                        style={{ marginBottom: 4 }}
                      >
                        Tel
                      </Text>
                      <Text size={12} color={argonTheme.COLORS.TEXT}>{data.user.personne.telephone}</Text>
                    </Block>
                  </Block> 
                  <Block row space="between">
                    <Block middle>
                      <Text
                        bold
                        size={18}
                        color="#525F7F"
                        style={{ marginBottom: 4 }}
                      >
                        DDN
                      </Text>
                      <Text size={12} color={argonTheme.COLORS.TEXT}>
                        {data.user.personne.datenaiss}
                      </Text>
                    </Block>
                    <Block middle>
                      <Text
                        bold
                        color="#525F7F"
                        size={18}
                        style={{ marginBottom: 4 }}
                      >
                        Genre
                      </Text>
                      <Text size={12} color={argonTheme.COLORS.TEXT}>{data.user.personne.sexe}</Text>
                    </Block>
                  </Block>
                </Block>
                <Block flex>
                  <Block middle style={styles.nameInfo}>
                    <Text bold size={23} color="#32325D">
                      {data.user.personne.nom}
                    </Text>
                    <Text size={16} color="#32325D" style={{ marginTop: 10 }}>
                      {data.user.personne.prenom}
                    </Text>
                  </Block>
                  <Block middle style={{ marginTop: 30, marginBottom: 16 }}>
                    <Block style={styles.divider} />
                  </Block>
                  <Block middle>
                    <Block middle>
                      <Text
                        bold
                        size={18}
                        color="#525F7F"
                        style={{ marginBottom: 4 }}
                      >
                        Contact Urgence
                      </Text>
                      <Text size={12} color={argonTheme.COLORS.TEXT}>695 93 07 73</Text>
                    </Block>
                    <Block middle>
                      <Text
                        bold
                        color="#525F7F"
                        size={18}
                        style={{ marginBottom: 4 }}
                      >
                        Persone
                      </Text>
                      <Text size={12} color={argonTheme.COLORS.TEXT}>Nom person</Text>
                    </Block>
                  </Block>

                </Block>
                <Block
                    middle
                    row
                    space="evenly"
                    style={{ marginTop: 20, paddingBottom: 24 }}

                  >
                    <Button
                      onPress={() => navigation.navigate("EditProfile")}
                      style={{ backgroundColor: argonTheme.COLORS.INFO }}
                    >
                      EDIT
                    </Button>
                  </Block>
              </Block>
            </ScrollView>
          </ImageBackground>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  profile: {
    marginTop: Platform.OS === "android" ? -HeaderHeight : 0,
    // marginBottom: -HeaderHeight * 2,
    flex: 1
  },
  options: {
    marginBottom: 24,
    marginTop: 10,
    elevation: 4,
  },
  optionsButton: {
    width: "auto",
    height: 34,
    paddingHorizontal: theme.SIZES.BASE,
    paddingVertical: 10
  },
  profileContainer: {
    width: width,
    height: height,
    padding: 0,
    zIndex: 1
  },
  profileBackground: {
    width: width,
    height: height / 2
  },
  profileCard: {
    // position: "relative",
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: 65,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2
  },
  info: {
    paddingHorizontal: 40
  },
  avatarContainer: {
    position: "relative",
    marginTop: -80
  },
  avatar: {
    width: 124,
    height: 124,
    borderRadius: 62,
    borderWidth: 0
  },
  nameInfo: {
    marginTop: 35
  },
  divider: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#E9ECEF"
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: "center",
    width: thumbMeasure,
    height: thumbMeasure
  }
});

const mapStateToProps = (state) => {
  return state
}
export default connect(mapStateToProps)(Profile);
