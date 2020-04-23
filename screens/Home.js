import React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Block, theme } from 'galio-framework';

import { Card } from '../components';
import { CardMesure } from '../components';
import articles from '../constants/articles';
const { width } = Dimensions.get('screen'); 
import { connect } from 'react-redux'

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
            {this.props.showMesure ?
              <CardMesure item={articles[0]} horizontal  /> : null
            }
            {this.props.showCenter ?
            <Block flex row>
              <Card item={articles[1]} style={{ marginRight: theme.SIZES.BASE }} />
              <Card item={articles[2]} />
            </Block> : null
            }
            {this.props.showLocalisation ?
              <Card item={articles[4]} full /> : null
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


