import React from 'react';
import { StyleSheet, Dimensions, ScrollView, Image } from 'react-native';
import { Block, theme, Text } from 'galio-framework';

import { Card } from '../components';
import { CardMesure } from '../components';
import { Centre } from '../components';
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

class Home extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      bottomModalAndTitle: false,
      defaultAnimationModal: false,
    }
  }

 showDetail = (id) => {
  this.setState({bottomModalAndTitle: true})
 }

  render() {
    console.log(this.props);
    return (
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
                  <ListItem
                    //key={i}
                    title={"Diarrhée"}
                    // leftIcon={{ name: item.icon }}
                    bottomDivider
                    chevron={ <Ionicons name="md-close" size={25} color="red" />}
                  />
                  <ListItem
                    //key={i}
                    title={"Odorat"}
                    // leftIcon={{ name: item.icon }}
                    bottomDivider
                    chevron={<Ionicons name="md-close" size={25} color="red" />}
                  />
                  <ListItem
                    //key={i}
                    title={"Tete"}
                    // leftIcon={{ name: item.icon }}
                    bottomDivider
                    chevron={<Ionicons name="md-close" size={25} color="red" />}
                  />
                  <ListItem
                    //key={i}
                    title={"Fievre"}
                    // leftIcon={{ name: item.icon }}
                    bottomDivider
                    chevron={<Ionicons name="md-close" size={25} color="red" />}
                  />
                  <ListItem
                    //key={i}
                    title={"Gorge"}
                    // leftIcon={{ name: item.icon }}
                    bottomDivider
                    chevron={<Ionicons name="md-close" size={25} color="red" />}
                  />
                  <ListItem
                    //key={i}
                    title={"Gene"}
                    // leftIcon={{ name: item.icon }}
                    bottomDivider
                    chevron={<Ionicons name="md-close" size={25} color="red" />}
                  />
                  <ListItem
                    //key={i}
                    title={"Fatigue"} 
                    // leftIcon={{ name: item.icon }}
                    bottomDivider
                    chevron={<Ionicons name="md-close" size={25} color="red" />}
                  />
                  <ListItem
                    //key={i}<Ionicons name="md-close" size={25} color="red" />
                    title={"Courbature"}
                    // leftIcon={{ name: item.icon }}
                    bottomDivider
                    chevron={<Ionicons name="md-close" size={25} color="red" />}
                  />
                  <ListItem
                    //key={i}
                    title={"Etranger"}
                    // leftIcon={{ name: item.icon }}
                    bottomDivider
                    chevron={<Ionicons name="md-close" size={25} color="red" />}
                  />
          </ModalContent>
        </Modal.BottomModal>
        <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
          <Block flex>
            {this.props.currentItem === "activite" ?
            <Block flex>
              {/*<Text size={24} style={{textAlign: "center"}}>Activitées</Text>*/}
              <CardMesure showDetail={this.showDetail} item={articles[0]} horizontal  /> 
              <CardMesure showDetail={this.showDetail} item={articles[0]} horizontal  /> 
              <CardMesure showDetail={this.showDetail} item={articles[0]} horizontal  /> 
              <CardMesure showDetail={this.showDetail} item={articles[0]} horizontal  /> 
            </Block>: null
            }
            {this.props.currentItem === "centre" ?
            <Block flex row>
              <Centre item={articles[1]} style={{ marginRight: theme.SIZES.BASE }} />
              <Centre item={articles[2]} />
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
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);


