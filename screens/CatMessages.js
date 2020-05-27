import React from 'react';
import { StyleSheet, Dimensions, ScrollView, Image, Linking, TouchableOpacity, 
  TouchableWithoutFeedback} from 'react-native';
import { Block, Text, theme } from 'galio-framework';
import Modal, { SlideAnimation, ModalContent, ModalTitle ,
  ModalFooter,
  ModalButton,
  ScaleAnimation} from 'react-native-modals'
import { Ionicons } from '@expo/vector-icons'; 
import { ListItem } from 'react-native-elements'
const { width } = Dimensions.get('screen'); 
import { argonTheme } from '../constants';
import { getAllMessages } from "./StatteFullComponents";
import { baseUri } from "./StatteFullComponents";
import { Card } from '../components';
import LoadingView from 'react-native-loading-view'
import { connect } from 'react-redux'
import { getOneMessages } from "./StatteFullComponents";


class CatMessages extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      list: [],
      isLoanding: false,
      trueList: null,
    }
  }

  async componentDidMount() {
    console.log("catMessages is mounted mounted componenet", this.props.id)
    let mess = await getAllMessages(this.props.id);
    this.setState({trueList: mess.data})
    console.log('getMessage', mess);
    let  list = [
      {
        name: 'Chris',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
      },
      {
        name: 'Romain',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
      },
      {
        name: 'Ismaelo',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
      },
    ]
    this.setState({list: list});
    // console.log('messs mess', mess)
  }


  render() {
    let base = baseUri+"/bundles/mamedcovid/assets/images/pictures/";
    console.log(baseUri+"/bundles/mamedcovid/assets/images/pictures/2.jpeg");
    console.log('this.state', this.props)
   const {navigation, data} = this.props;
    return (
      <LoadingView loading={this.state.trueList === null}> 
          <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.articles}>
            {this.state.trueList !== null &&
              this.state.trueList.map((l, i) => (
                <ListItem
                  key={i}
                  leftAvatar={{ source: { uri: base+l.medecin.personne.image } }}
                  title={l.medecin.personne.prenom+' '+l.medecin.personne.nom}
                  subtitle={()=>{
                    const ls = l.medecin.personne.envoyes.length;
                    let item = l.medecin.personne.envoyes.slice(ls-1, ls)[0]
                    return <Text>{item.message.slice(0, 33)}{item.message.length > 33  ? "...": null}</Text>;
                  }}
                  bottomDivider
                  chevron
                  onPress={()=>{
                    this.props.toSetIdMedecin(l.medecin.personne.id, this.props.id);
                    //console.log(diag);
                    navigation.navigate("Messages");
                  }}
                />
              ))
            }

          </ScrollView>
      </LoadingView>
    );
  }
}


const styles = StyleSheet.create({
  home: {
    width: width,    
  },
  card: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE,
    borderWidth: 0,
    minHeight: 114,
    marginBottom: 16
  },
  cardTitle: {
    flex: 1,
    flexWrap: 'wrap',
    paddingBottom: 6
  },
  cardDescription: {
    padding: theme.SIZES.BASE / 2
  },
  imageContainer: {
    borderRadius: 3,
    elevation: 1,
    overflow: 'hidden',
  },
  image: {
    // borderRadius: 3,
  },
  horizontalImage: {
    height: 122,
    width: 'auto',
  },
  horizontalStyles: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  verticalStyles: {
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0
  },
  fullImage: {
    height: 215
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
  },
});

const mapStateToProps = (state) => { 
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    toSetIdMedecin: async (id, id1) => {
      let mass = await getOneMessages(id1, id)
      dispatch({type: "TO_SET_ID_MEDECIN", data: id, mess: mass}); 
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CatMessages);