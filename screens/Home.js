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


class Home extends React.Component {

  constructor(props){
    super(props);
  }

 

  render() {
    console.log(this.props);
    return (
      <Block flex center style={styles.home}>
        <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
          <Block flex>
            {this.props.currentItem === "activite" ?
            <Block flex>
              {/*<Text size={24} style={{textAlign: "center"}}>Activitées</Text>*/}
              <CardMesure item={articles[0]} horizontal  /> 
              <CardMesure item={articles[0]} horizontal  /> 
              <CardMesure item={articles[0]} horizontal  /> 
              <CardMesure item={articles[0]} horizontal  /> 
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


