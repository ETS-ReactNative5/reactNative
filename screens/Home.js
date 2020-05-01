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
import Modal, { SlideAnimation, ModalContent, ModalTitle } from 'react-native-modals';
import { Button } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

class Home extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      bottomModalAndTitle: false,
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
            <Block row space="evenly"> 
              <Block flex left>
                <Text>Toux</Text>
              </Block>
              <Block  right>
                <Ionicons name="md-checkmark-circle" size={25} color="green" />
              </Block>
            </Block>
            <Block row space="evenly"> 
              <Block flex left>
                <Text>Rhume</Text>
              </Block>
              <Block  right>
                <Ionicons name="md-close" size={25} color="red" />
              </Block>
            </Block>
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
              <Card item={articles[4]} full /> : null
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


