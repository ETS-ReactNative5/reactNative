import React from "react";
import { ScrollView, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { connect } from 'react-redux'
// Galio components
import { Block, Text, Button as GaButton, theme } from "galio-framework";
// Argon themed components
import { argonTheme, tabs } from "../constants/";
import { Button, Select, Icon, Input, Switch } from "../components/";
import Header  from "../components/Header";
import { CardMesure } from '../components';
import articles from '../constants/articles';
import Images from "../constants/Images";
import Modal, { SlideAnimation, ModalContent, ModalTitle ,
  ModalFooter,
  ModalButton,
  ScaleAnimation} from 'react-native-modals';
const { width } = Dimensions.get("screen");
import { Ionicons } from '@expo/vector-icons';
import { ListItem } from 'react-native-elements'

class Donnees extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      "switch-1": true, 
      "switch-2": false,
      bottomModalAndTitle: false,
      currentCliqued: null,
      currentIndex: null
    };
  }


 preset = (ind) => {
  this.setState(previousState => ({
      currentIndex: ind,
    }))
  //this.setState({bottomModalAndTitle: true});
  console.log('this.state.daig', this.state.currentCliqued);
 }
 
  render() {
    console.log('render ecore')
    return (
      <Block flex  style={styles.home} center>
        <ScrollView showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.articles}>
          <Block flex>
              {
                this.props.data.user.diagnostiques.map((diag, ind) => {
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
    marginTop: 44,
    color: argonTheme.COLORS.HEADER
  },
  group: {
    paddingTop: theme.SIZES.BASE * 2
  },
  shadow: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.2,
    elevation: 2
  },
  button: {
    marginBottom: theme.SIZES.BASE,
    width: width - theme.SIZES.BASE * 2
  },
  optionsButton: {
    width: "auto",
    height: 34,
    paddingHorizontal: theme.SIZES.BASE,
    paddingVertical: 10
  },
  input: {
    borderBottomWidth: 1
  },
  inputDefault: {
    borderBottomColor: argonTheme.COLORS.PLACEHOLDER
  },
  inputTheme: {
    borderBottomColor: argonTheme.COLORS.PRIMARY
  },
  inputTheme: {
    borderBottomColor: argonTheme.COLORS.PRIMARY
  },
  inputInfo: {
    borderBottomColor: argonTheme.COLORS.INFO
  },
  inputSuccess: {
    borderBottomColor: argonTheme.COLORS.SUCCESS
  },
  inputWarning: {
    borderBottomColor: argonTheme.COLORS.WARNING
  },
  inputDanger: {
    borderBottomColor: argonTheme.COLORS.ERROR
  },
  social: {
    width: theme.SIZES.BASE * 3.5,
    height: theme.SIZES.BASE * 3.5,
    borderRadius: theme.SIZES.BASE * 1.75,
    justifyContent: "center"
  },
});

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Donnees);