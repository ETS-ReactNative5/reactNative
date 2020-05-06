import React from 'react';
import { StyleSheet, Dimensions, ScrollView, Image } from 'react-native';
import { Block, theme, Text } from 'galio-framework';

import articles from '../constants/articles';
const { width } = Dimensions.get('screen'); 
import { connect } from 'react-redux'
import Images from "../constants/Images";
import { argonTheme } from "../constants/";
import { Button, Input } from "../components/";
import Modal, { SlideAnimation, ModalContent, ModalTitle ,
  ModalFooter,
  ModalButton,
  ScaleAnimation} from 'react-native-modals';
// import { Button } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { Switch } from "../components/";
import { CheckBox } from "react-native";

class Param extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      toMap: [],
      toux: false,
      rhume: false,
      podorat: false,
      diarrhee: false,
      mautete: false,
      fievre: false,
      generespiratiore: false,
      maugorge: false,
      fatigue: false,
      coubaturemusc: false,
      etatetrange: false,
      voyage: false,
      contact: false,
      temperature: ""
    }
  }
  onSave = () => {
    let ob  = {
      toux: this.state.toux ,
      rhume: this.state.rhume ,
      podorat: this.state.podorat ,
      diarrhee: this.state.diarrhee ,
      mautete: this.state.mautete ,
      fievre: this.state.fievre ,
      generespiratiore: this.state.generespiratiore ,
      maugorge: this.state.maugorge ,
      fatigue: this.state.fatigue ,
      coubaturemusc: this.state.coubaturemusc ,
      etatetrange: this.state.etatetrange ,
      voyage: this.state.voyage ,
      contact: this.state.contact ,
      temperature: this.state.temperature,
    }

    console.log(ob)
  }
  componentDidMount(){
    let itel = [
      {label: "Toux ?", key: "toux"},
      {label: "Rhume ?", key: "rhume"},
      {label: "Odorat ?", key: "podorat"},
      {label: "Diarrhée ?", key: "diarrhee"},
      {label: "Tete ?", key: "mautete"},
      {label: "Fievre ?", key: "fievre"},
      {label: "Gene ?", key: "generespiratiore"},
      {label: "George ?", key: "maugorge"},
      {label: "Fatigue ?", key: "fatigue"},
      {label: "Courbature ?", key: "coubaturemusc"},
      {label: "Etranger ?", key: "etatetrange"},
      {label: "Voyager ?", key: "voyage"},
      {label: "Contact ?", key: "contact"},
    ];
    this.setState({toMap: itel});
  }

  render() {
    console.log('centre',this.props.data);
    return ( 
      <Block flex center style={styles.home}>
        <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
          <Block flex style={styles.group}>
                <Text bold size={16} style={styles.title}>
                  AVEZ-VOUS :
                </Text>
                <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
                {this.state.toMap.map((item, key) =>{
                  return(
                    <Block
                      row
                      key={key}
                      middle
                      space="between"
                      style={{ marginBottom: theme.SIZES.BASE }}
                    >
                    <Text style={styles.label}>{item.label}</Text>
                      <CheckBox
                      value={this.state[item.key]}
                      onValueChange={() => {this.setState({[item.key]: !this.state[item.key]})}}
                      // style={styles.checkbox}
                    />
                      
                    </Block>
                    )
                })}
                  <Block width={width * 0.8}>
                    <Input
                      borderless
                      placeholder="Votre température"
                      value={this.state.temperature}
                      onChangeText={(us) => {
                        this.setState({temperature: us});
                        console.log(us);
                      }}
                      iconContent={
                          <Ionicons name="md-refresh" style={styles.inputIcons} size={18} color="#343D46" />
                      }
                      
                    />
                  </Block>
                  <Block middle>
                    <Button color="primary" 
                      style={styles.createButton}
                      onPress={this.onSave}
                    >
                      <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                        ENregistrer
                      </Text>
                    </Button>
                  </Block>
                </Block>
            </Block>
        </ScrollView> 
      </Block>
    );
  }
}


const styles = StyleSheet.create({
  home: {
    width: width,    
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
  title: {
    paddingBottom: theme.SIZES.BASE,
    paddingHorizontal: theme.SIZES.BASE * 2,
    marginTop: -30,
    color: argonTheme.COLORS.HEADER
  },
  group: {
    paddingTop: theme.SIZES.BASE * 2
  },
  createButton: {
    width: width * 0.5,
    marginTop: 25
  },
});

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Param);