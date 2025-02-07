import React from "react";
//import { Icon as Icons } from 'galio-framework'
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

class AddCasContact extends React.Component {

  constructor(props, route){
    super(props); 
    // super(route);
    this.state = {
      "switch-1": true, 
      "switch-2": false,
      messages: [],
      nom: "",
      prenom: "",
      username: "",
      datenaiss: null,
      email: "",
      addresse: "",
      telephone: "",
      sexe: "",
      lieu: ""
    };
  }

  componentDidMount() {
  	console.log('this.props', this.props.casContact)
  	let toProps = this.props.casContact;
  	if(toProps !== null){
    	this.setState({
    		prenom: toProps.personne.prenom,
    		nom: toProps.personne.nom,
    		email: toProps.personne.email,
    		datenaiss: toProps.daterencontre,
    		telephone: toProps.personne.telephone,
    		lieu: toProps.lieurencontre,
    	})
    }
    else {
    	this.setState({
    		prenom: "",
    		nom: "",
    		email: "",
    		datenaiss: "",
    		telephone: "",
    		lieu: "",
    	})
    }
  }
 
  render() {
  	console.log('this.props.cascontat', this.props.casContact)
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
				                    <Block width={width * 0.8}>
				                      <Input
				                        borderless
				                        placeholder="Prénom"
				                        value={this.state.prenom}
				                        onChangeText={(us) => {
				                          this.setState({prenom: us});
				                          console.log(us);
				                        }}
				                        iconContent={
	                          				<Ionicons name="md-person" style={styles.inputIcons} size={18} color="#343D46" />
		                        		}
				                        
				                      />
				                    </Block>
				                    <Block width={width * 0.8}>
				                      <Input
				                        borderless
				                        placeholder="Email"
				                        value={this.state.email}
				                        onChangeText={(us) => {
				                          this.setState({email: us});
				                          console.log(us);
				                        }}
				                        iconContent={
	                          				<Ionicons name="md-mail" style={styles.inputIcons} size={18} color="#343D46" />
		                        		}
				                        
				                      />
				                    </Block>
				                    <Block width={width * 0.8}>
				                      <Input
				                        borderless
				                        placeholder="Télephone"
				                        value={this.state.telephone}
				                        onChangeText={(us) => {
				                          this.setState({telephone: us});
				                          console.log(us);
				                        }}
				                        iconContent={
	                          				<Ionicons name="md-phone-portrait" style={styles.inputIcons} size={18} color="#343D46" />
	                        				}
				                      />
				                    </Block>
				                    <Block width={width * 0.8}>
				                      <Input
				                        borderless
				                        placeholder="Sexe"
				                        value={this.state.username}
				                        onChangeText={(us) => {
				                          this.setState({sexe: us});
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
				                        borderless
				                        placeholder="Lieu de rencontre"
				                        value={this.state.lieu}
				                        onChangeText={(us) => {
				                          this.setState({lieu: us});
				                          console.log(us);
				                        }}
				                        iconContent={
	                          				<Icon
	                            				size={16}
	                            				color={argonTheme.COLORS.ICON}
	                            				name="calendar-date"
	                            				family="ArgonExtra"
	                            				style={styles.inputIcons}
	                         				 />
	                         			}
				                        
				                      />
				                    </Block>
				                    <Block width={width * 0.8}>
				                      <Input
				                        borderless
				                        placeholder="Date"
				                        value={this.state.datenaiss}
				                        onChangeText={(us) => {
				                          this.setState({datenaiss: us});
				                          console.log(us);
				                        }}
				                        iconContent={
	                          				<Icon
	                            				size={16}
	                            				color={argonTheme.COLORS.ICON}
	                            				name="calendar-date"
	                            				family="ArgonExtra"
	                            				style={styles.inputIcons}
	                         				 />
	                         			}
				                        
				                      />
				                    </Block>
				                    
				                    <Block middle style={{ marginTop: 30, marginBottom: 16 }}>
	                    				<Block style={styles.divider} />
	                  				</Block>
					                
				                 
				                    <Block middle>
				                      <Button color="primary" 
				                        style={styles.createButton}
				                        onPress={() => this.onLogin()}
				                      >
				                        <Text bold size={14} color={argonTheme.COLORS.WHITE}>
				                          Enregistrer
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
    // height: height * 1,
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
const mapStateToProps = (state) => { 
  return state
}
const mapDispatchToProps = dispatch => {
  return {
    showLocalisationFunction: async () => {
      dispatch({type: "SHOW_LOCALISATION"});
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCasContact);