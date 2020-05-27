import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions, 
  StatusBar,
  KeyboardAvoidingView,
  ActivityIndicator,
  Image
} from "react-native";
import { connect } from 'react-redux'
import { Block, Checkbox, Text, theme } from "galio-framework";

import { Button, Icon, Input } from "../components";
import { Images, argonTheme } from "../constants";
import { login } from "./StatteFullComponents";


const { width, height } = Dimensions.get("screen");
import AnimatedLoader from "react-native-animated-loader";
import { Loader } from "./Load";
import Modal, { SlideAnimation, ModalContent, ModalTitle ,
  ModalFooter,
  ModalButton,
  ScaleAnimation} from 'react-native-modals';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      visible: false,
      password: '',
      username: '',
      error: false,
      eror_m:  "",
      defaultAnimationModal: false,
    }
  }
 
  onLogin = async () => {
    const { navigation } = this.props;
    this.setState({visible: true})
     //setTimeout(() => this.setState({visible: false}), 3000);

    //!this.state.visible ? navigation.navigate("App") : null
      

    let ob = {
      username: this.state.username,
      password: this.state.password
    }
    //let data = await login(ob); 
      this.setState({visible: false, error: false})
      this.props.setId(2);
      console.log('ths.state.id', this.state.id);
      navigation.navigate("App")
    // if(data.data.success && data.data.success == true){
    //   console.log('in login',data);
    // }
    // else{
    //   this.setState({
    //     eror_m: "Une erreur inconnue est survenue",
    //     visible: false,
    //     error: true,
    //     defaultAnimationModal: true
    //   })
    // }
    return;
  }
  render() {
    const { navigation } = this.props;
    return (
      <Block flex middle>
        <Modal
                width={0.9}
                visible={this.state.defaultAnimationModal}
                rounded
                actionsBordered
                onTouchOutside={() => {
                  this.setState({ defaultAnimationModal: false });
                }}
                modalTitle={
                  <ModalTitle
                    title="Erreur de connexion"
                    align="center"
                  />
                }
                footer={
                  <ModalFooter>
                    <ModalButton
                      text="OK"
                      bordered
                      onPress={() => {
                        this.setState({ defaultAnimationModal: false });
                      }}
                      key="button-2"
                    />
                  </ModalFooter>
                }
              >
                <ModalContent
                  style={{ backgroundColor: '#fff' }}
                >
                  <Text>{this.state.eror_m}</Text>
                </ModalContent>
              </Modal>
        <StatusBar hidden /> 
        <ImageBackground
          source={Images.RegisterBackground}
          style={{ width, height, zIndex: 1 }}
        >
          <Block flex middle>
            <Block style={styles.registerContainer}>
              <Block flex={0.25} middle style={styles.socialConnect}>
                <Image styles={styles.logo} source={Images.mamedLogo} />
              </Block>
              <Block flex>
                <Block flex={0.17} middle>
                  <Text color="#8898AA" size={12}>
                    Entrez vos informations
                  </Text>
                </Block>
                <Block flex center>
                  <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior="padding"
                    enabled
                  >
                    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                      <Input
                        borderless
                        placeholder="Username"
                        onChangeText={(us) => {
                          this.setState({username: us});
                          console.log(us);
                        }}
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="ic_mail_24px"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                    </Block>
                    <Block width={width * 0.8}>
                      <Input
                        password
                        borderless
                        placeholder="Password"
                        onChangeText={(us) => {
                          this.setState({password: us});
                          console.log(us);
                        }}
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="padlock-unlocked"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                    {                      
                      <Block row >
                        <AnimatedLoader
                          visible={this.state.visible}
                          overlayColor="rgba(255,255,255,0.75)"
                          source={Loader}
                          animationStyle={styles.lottie}
                          speed={1}
                        />
                      </Block>
                    }
                    </Block>
                    <Block middle>
                      <Button color="primary" 
                        style={styles.createButton}
                        onPress={() => this.onLogin()}
                      >
                        <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                          SE CONNECTER
                        </Text>
                      </Button>
                    </Block>
                    <Block middle>
                      
                    </Block>
                    <Block middle flex={0.44}>
                      <Text bold size={14} 
                        color={argonTheme.COLORS.WHITE}
                         onPress={() => console.log('click')}
                         style={styles.text}
                        >
                        CREER UN COMPTE
                      </Text>
                    </Block>
                  </KeyboardAvoidingView>
                </Block>
              </Block>
            </Block>
          </Block>
        </ImageBackground>
      </Block>
    );
  }
}



const styles = StyleSheet.create({
  registerContainer: {
    width: width * 0.9,
    height: height * 0.78,
    backgroundColor: "#F4F5F7",
    borderRadius: 4,
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: "hidden"
  },
  socialConnect: {
    backgroundColor: argonTheme.COLORS.WHITE,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#8898AA"
  },
  socialButtons: {
    width: 120,
    height: 40,
    backgroundColor: "#fff",
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1
  },
  socialTextButtons: {
    color: argonTheme.COLORS.PRIMARY,
    fontWeight: "800",
    fontSize: 14
  },
  inputIcons: {
    marginRight: 12
  },
  text: {
    color: "#399BD6", 
    // marginTop: "15px"
  },
  passwordCheck: {
    paddingLeft: 15,
    paddingTop: 13,
    paddingBottom: 30
  },
  createButton: {
    width: width * 0.5,
    marginTop: 25
  },
  lottie: {
    width: 100,
    height: 100
  }
});

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    setId: async (id) => {
      dispatch({type: "SET_ID", id: id});
    },

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
