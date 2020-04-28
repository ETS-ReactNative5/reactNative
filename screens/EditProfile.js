import React from "react";
import { Icon as Icons } from 'galio-framework'
import { ScrollView, StyleSheet, Dimensions, TouchableOpacity, Image } from "react-native";
// Galio components
import { Block, Text, theme } from "galio-framework";
// Argon themed components
import { argonTheme, tabs, Images } from "../constants/";
import { Button, Select, Icon, Input, Switch } from "../components/";
import Header  from "../components/Header";
import { Card } from '../components';
import { CardMesure } from '../components';
import { Centre } from '../components';
import articles from '../constants/articles';
import { connect } from 'react-redux'
import { Ionicons } from '@expo/vector-icons';
import {
  ImageBackground,
  StatusBar,
  KeyboardAvoidingView,
  ActivityIndicator
} from "react-native";
const { width, height } = Dimensions.get("screen");

class EditProfile extends React.Component {

  constructor(props){
    super(props); 
    this.state = {
      "switch-1": true, 
      "switch-2": false,
      messages: [],
    };
  }

  componentDidMount() {
      
  }
 
  render() {
    return (
    	<Block flex center style={styles.home}>
    		<ScrollView
		        showsVerticalScrollIndicator={false}
		        contentContainerStyle={styles.articles}>
		        	<Block flex>
		        		<Block flex middle>
				            <Block style={styles.registerContainer}>
				              <Block flex>
				                <Block flex={0.03} middle>
				                  
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
				                        placeholder="Nom"
				                        onChangeText={(us) => {
				                          this.setState({nom: us});
				                          console.log(us);
				                        }}
				                        // iconContent={
		                          // 				<Icons
		                          //   				size={16}
		                          //   				color={argonTheme.COLORS.ICON}
		                          //   				name="verticleleft"
		                          //   				family="ArgonExtra"
		                          //   				style={styles.inputIcons}
		                         	// 			 />
		                        		// 		}
					                     />
				                    </Block>
				                    <Block width={width * 0.8}>
				                      <Input
				                        borderless
				                        placeholder="Prénom"
				                        onChangeText={(us) => {
				                          this.setState({prenom: us});
				                          console.log(us);
				                        }}
				                        
				                      />
				                    </Block>
				                    <Block width={width * 0.8}>
				                      <Input
				                        borderless
				                        placeholder="Email"
				                        onChangeText={(us) => {
				                          this.setState({email: us});
				                          console.log(us);
				                        }}
				                        
				                      />
				                    </Block>
				                    <Block width={width * 0.8}>
				                      <Input
				                        borderless
				                        placeholder="Télephone"
				                        onChangeText={(us) => {
				                          this.setState({tel: us});
				                          console.log(us);
				                        }}
				                        
				                      />
				                    </Block>
				                    <Block width={width * 0.8}>
				                      <Input
				                        borderless
				                        placeholder="Date de Naissance"
				                        onChangeText={(us) => {
				                          this.setState({ddn: us});
				                          console.log(us);
				                        }}
				                        
				                      />
				                    </Block>
				                    <Block width={width * 0.8}>
				                      <Input
				                        borderless
				                        placeholder="Addresse"
				                        onChangeText={(us) => {
				                          this.setState({addresse: us});
				                          console.log(us);
				                        }}
				                        
				                      />
				                    </Block>
				                    <Block middle style={{ marginTop: 30, marginBottom: 16 }}>
	                    				<Block style={styles.divider} />
	                  				</Block>
					                <Block width={width * 0.8}>
				                      <Input
				                        borderless
				                        placeholder="username"
				                        onChangeText={(us) => {
				                          this.setState({username: us});
				                          console.log(us);
				                        }}
				                        
				                      />
				                    </Block>					                
				                    <Block width={width * 0.8}>
				                      <Input
				                      	password
				                        borderless
				                        placeholder="password"
				                        onChangeText={(us) => {
				                          this.setState({password: us});
				                          console.log(us);
				                        }}
				                        
				                      />
				                    </Block>
				                 
				                    <Block middle>
				                      <Button color="primary" 
				                        style={styles.createButton}
				                        onPress={() => this.onLogin()}
				                      >
				                        <Text bold size={14} color={argonTheme.COLORS.WHITE}>
				                          Metre à Jour
				                        </Text>
				                      </Button>
				                    </Block>
				                    <Block middle>
				                 </Block>
			                  </KeyboardAvoidingView>
			                </Block>
			              </Block>
			            </Block>
			         </Block>
	        	</Block>
		    </ScrollView>
		</Block>
          
    );
  }
}



const styless = StyleSheet.create({
 
  stretch: {

    width: 50,
    height: 0,
    resizeMode: 'stretch',
  },
});

const styles = StyleSheet.create({
  home: {
    width: width,    
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },

  registerContainer: {
    width: width * 0.9,
    height: height * 1,
    // backgroundColor: "#F4F5F7",
    borderRadius: 4,
    // shadowColor: argonTheme.COLORS.BLACK,
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
  },
  divider: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#E9ECEF"
  },
});

export default EditProfile;