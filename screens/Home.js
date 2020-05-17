import React from 'react';
import { StyleSheet, Dimensions, ScrollView, Image, Linking, TouchableOpacity} from 'react-native';
import { Block, theme, Text } from 'galio-framework';
import { FloatingAction } from "react-native-floating-action";
import LoadingView from 'react-native-loading-view'
import { Card } from '../components';
import { CardMesure } from '../components';
import { CasContact } from '../components';
import { Centre } from '../components';
import { Rapport } from '../components';
import articles from '../constants/articles';
const { width } = Dimensions.get('screen'); 
import { connect } from 'react-redux'
import Images from "../constants/Images";
import Modal, { SlideAnimation, ModalContent, ModalTitle ,
  ModalFooter,
  ModalButton,
  ScaleAnimation} from 'react-native-modals';
import { Button } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { ListItem } from 'react-native-elements'
import { getPersonalData } from "./StatteFullComponents";
import {  argonTheme } from "../constants";
import { baseUri } from "./StatteFullComponents";

class Home extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      bottomModalAndTitle: false, 
      defaultAnimationModal: false,
      currentCliqued: null,
      currentIndex: null, 
      isLoanding: true,
    }
  }
  async componentDidMount() {
    console.log('idididi',this.props.id)
    let data = await getPersonalData('/api_v1/apis/'+this.props.id+'/profiles.json');
    console.log('data',data)
    this.props.setDataState(data);
    this.setState({isLoanding: false})
  }

 preset = (ind) => {
  this.setState(previousState => ({
      currentIndex: ind,
    }))
  //this.setState({bottomModalAndTitle: true});
  console.log('this.state.daig', this.state.currentCliqued);
 }

  render() {
    console.log('centre',this.props);
    const { navigation } = this.props;
    return (
      <LoadingView loading={this.state.isLoanding}>
        <Block flex center style={styles.home}>
          
          <Modal.BottomModal
            visible={this.state.bottomModalAndTitle}
            onTouchOutside={() => this.setState({ bottomModalAndTitle: false })}
            height={0.95}
            width={1}
            onSwipeOut={() => this.setState({ bottomModalAndTitle: false })}
            modalTitle={
              <ModalTitle
                title="Mardi 12/04/2020 12h30"
                hasTitleBar
              />
            }
          >
            <ModalContent
              style={{
                flex: 1, 
                backgroundColor: 'fff',
              }}
            >

              <ListItem
                //key={i}
                title={"Toux"}
                // leftIcon={{ name: item.icon }}
                bottomDivider
                chevron={<Ionicons name="md-checkmark-circle" size={25} color="green" />}
              />
              <ListItem
                //key={i}
                title={"Rhume"}
                // leftIcon={{ name: item.icon }}
                bottomDivider
                chevron={ <Ionicons name="md-close" size={25} color="red" />}
              />
            </ModalContent>
          </Modal.BottomModal>

          <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.articles}>
            <Block flex>
              {this.props.currentItem === "activite" && this.props.data  !== null ?
              <Block flex>
                {/*<Text size={24} style={{textAlign: "center"}}>Activitées</Text>*/}
                {this.props.data.user.diagnostiques.slice(0, 7).map((diag, ind) => {
                  return(
                    <CardMesure 
                      showDetail={() => this.preset(ind)} 
                      item={diag} horizontal key={ind} 
                      indexState={this.state.currentIndex}
                      index={ind}
                    />  : null 
                    )
                  })
                }
              </Block>: null
              }

              {this.props.currentItem === "cascontact" && this.props.data  !== null ?
              <Block flex>
                {/*<Text size={24} style={{textAlign: "center"}}>Activitées</Text>*/}
                {this.props.data.user.personnes.map((diag, ind) => {
                  return(
                    <ListItem
                        key={ind}
                        onPress={()=>{
                          this.props.toSetCasContact(diag);
                          console.log(diag);
                          navigation.navigate("AddCasContact");
                        }}
                        title={diag.personne.nom}
                        // leftIcon={{ name: item.icon }}
                        bottomDivider
                        chevron
                      />
                    )
                  })
                }
              </Block>: null
              }
              {
                this.props.currentItem === "result" && this.props.data !== null?
                <Block flex row>
                  {this.props.data.user.fichiers.map((center, ind) =>{
                    return (
                      <TouchableOpacity  key={ind} 
                        onPress={async()=>{
                            console.log("dd{jdjdjdjdjdj");
                            let base = "https://covid.mamed.care/web/uploads/images/rapports/";
                            const supported = await Linking.canOpenURL(base+center.fichier);
                            await Linking.openURL(base+center.fichier);
                          }
                        }>
                          <Image
                            key={ind}
                            item={articles[0]}
                            item1={center}
                            source={
                              ["png", "jpg", "jpeg", "jpeg"].includes(center.fichier.split('.')[1]) ? 
                              { uri: "https://covid.mamed.care/web/uploads/images/rapports/"+center.fichier}
                              : ["pdf"].includes(center.fichier.split('.')[1]) ?
                              { uri: "https://covid.mamed.care/web/uploads/images/rapports/default-pdf.jpeg"}
                              : ["odt"].includes(center.fichier.split('.')[1]) ?
                              { uri: "https://covid.mamed.care/web/uploads/images/rapports/default-word.png"}
                              : null
                            }
                            style={styles.avatar} 
                          />
                      </TouchableOpacity>
                      )
                  })
                  }
                </Block> : null
              }
              {
                this.props.currentItem === "centre" && this.props.data !== null?
                <Block flex row>
                  {this.props.data.centres.map((center, ind) =>{
                    return (
                        <Centre item={articles[0]} item1={center} key={ind} 
                          style={ ind % 2 == 0 ?
                            { marginRight: theme.SIZES.BASE } : null
                          }
                        />
                      )
                  })
                  }
                </Block> : null
              }
              {this.props.currentItem === "geolocalisation" ?
                <Card item={articles[4]} full /> : null
              }
              {this.props.currentItem === "aprops" ?
                <Card item={articles[4]} full /> : null
              }
              {this.props.currentItem === "antecedent" ?
              <Block flex>
                <ListItem 
                //key={i}
                title={"Hypertension"}
                leftIcon={<Ionicons name="md-return-right" size={25} color="green" />}
                bottomDivider
                chevron
                onPress={() =>  this.setState({ defaultAnimationModal: true })}
              />
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
                    title="Détails Hypertension"
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
                  <Text>Cette personne est hypertendue</Text>
                  <Text>Autre information .......................;;</Text>
                </ModalContent>
              </Modal>
              </Block> : null
              }

            </Block>
          </ScrollView> 
        </Block>
        {this.props.currentItem === "cascontact" && this.props.data  !== null ?
             <FloatingAction
                  actions={[
                      {
                        text: "Nouveau Contact",
                        icon: <Ionicons name="md-add" size={25}  />,
                        name: "bt_videocam",
                        position: 4
                      }
                    ]}
                  onPressItem={name => {
                    this.props.toSetCasContact(null)
                    console.log('bccncncbccccncbcbcnccn')
                    navigation.navigate("AddCasContact", {obj: null});
                  }}
                  // color={argonTheme.COLORS.WHITE}
                  // position={"right"}
                /> : null
          }
      </LoadingView>
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
  avatar: {
    width: 75,
    height: 50,
    borderRadius: 22,
    borderWidth: 0,
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
  // float: {
  //   marginBottom: '0px',
  // }
});
 
const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    showLocalisationFunction: async () => {
      dispatch({type: "SHOW_LOCALISATION"});
    },
    showCenterFunction:  async () => {
      dispatch({type: "SHOW_CENTER"});
    },
    showMesureFunction:  async () => {
      dispatch({type: "SHOW_MESURE"});
    },
    setDataState:  async (data) => {
      dispatch({type: "SET_DATA_STATE", data: data});
    },
    toSetCasContact: async (data) => {
      dispatch({type: "SET_CAS_CONTACT", data: data});
    },

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);