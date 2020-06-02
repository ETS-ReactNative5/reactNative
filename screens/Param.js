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
import Spinner from 'react-native-loading-spinner-overlay';
import { onSaveActivity } from "./StatteFullComponents";
import AlertPro from "react-native-alert-pro";

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
      fievre: null,
      generespiratiore: false,
      maugorge: false,
      fatigue: false,
      coubaturemusc: false,
      etatetrange: false,
      voyage: false,
      contact: false,
      spinner: false,
    }
  }
  onSave = async () => {
    const { navigation } = this.props;
    this.setState({spinner: true})
    let ob  = {
        diagnostique: {
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
          contact: this.state.contact
        }
    }
    console.log('this.props.data.user.personne.id', ob)
    let rs = await onSaveActivity(this.props.data.user.personne.id, ob, this.props.id);
    //let data = await getPersonalData('/api_v1/apis/'+this.props.id+'/profiles.json');
    console.log('rsrsrsrsrsrsrsrs rs',rs)
    if(rs.data.data.success){
    } 
    this.props.addNewInDiag(ob);
    this.setState({spinner: false})
    navigation.goBack()
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
         <Spinner
          visible={this.state.spinner}
          textContent={'En cours...'}
          textStyle={styles.spinnerTextStyle}
        />
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
                      value={this.state.fievre}
                      onChangeText={(us) => {
                        this.setState({fievre: us});
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
                      onPress={() => this.AlertPro.open()}
                    >
                      <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                        Enregistrer
                      </Text>
                    </Button>
                  </Block>
                </Block>
            </Block>
        </ScrollView> 
        <AlertPro
          ref={ref => {
            this.AlertPro = ref;
          }}
          onConfirm={() => {this.AlertPro.close(); this.onSave()}}
          onCancel={() => this.AlertPro.close()}
          title="Confirmation de sauvegarde"
          message="Voulez vous vraiment sauvegarder?"
          textCancel="Annuler"
          textConfirm="Sauver"
          customStyles={{
            mask: {
              backgroundColor: "transparent"
            },
            container: {
              borderWidth: 1,
              borderColor: "#9900cc",
              shadowColor: "#000000",
              shadowOpacity: 0.1,
              shadowRadius: 10
            },
            buttonCancel: {
              backgroundColor: "#4da6ff"
            },
            buttonConfirm: {
              backgroundColor: "#ffa31a"
            }
          }}
        />
      </Block>
    );
  }
}


const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: '#FFF'
  },
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
    addNewInDiag: async (data) => {
      dispatch({type: "ADD_DATA", data: data});
    },

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Param);