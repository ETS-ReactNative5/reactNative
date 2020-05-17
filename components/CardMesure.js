import React from 'react';
import { withNavigation } from '@react-navigation/compat';
import PropTypes from 'prop-types';
import { StyleSheet, Dimensions, Image, TouchableWithoutFeedback } from 'react-native';
import { Block, Text, theme } from 'galio-framework';
import Modal, { SlideAnimation, ModalContent, ModalTitle ,
  ModalFooter,
  ModalButton,
  ScaleAnimation} from 'react-native-modals'
import { Ionicons } from '@expo/vector-icons';
import { ListItem } from 'react-native-elements'

import { argonTheme } from '../constants';


class CardMesure extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    const { navigation, item, horizontal, full, style, ctaColor, imageStyle } = this.props;
    
    const imageStyles = [
      full ? styles.fullImage : styles.horizontalImage,
      imageStyle
    ];
    const cardContainer = [styles.card, styles.shadow, style];
    const imgContainer = [styles.imageContainer,
      horizontal ? styles.horizontalStyles : styles.verticalStyles,
      styles.shadow
    ];

    return ( 
      <Block row={horizontal} card flex style={cardContainer}>
        <Modals item={this.props.item} indexState={this.props.indexState} index={this.props.index}/>
        <TouchableWithoutFeedback onPress={() => {this.props.showDetail(1); console.log("on pass")}}>
          <Block flex space="between" style={styles.cardDescription}>
            <Text size={14} style={styles.cardTitle} style={{textAlign: "center"}}>
              {this.props.item !== null ?
            	 this.props.item.datesave: null
              }
              {this.props.item.datesave ?
                 null : Date()
              }
            </Text>
            <Text size={13} style={{ textAlign: "center"}}>
            	Temperature {"    "}:{"    "} {this.props.item.fievre} {"°C"}
            </Text>
            <Text size={12} muted={!ctaColor} 
            	color={ctaColor || argonTheme.COLORS.ACTIVE} 
            	bold
            	style={{textAlign: "center"}}
           	>
            	<Text>Taper Pour Voir</Text> {"    "}
            </Text>
          </Block>
        </TouchableWithoutFeedback>
      </Block>
    );
  }
}

class Modals extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      item: null,
      bottomModalAndTitle: true,
      internalItem: [],
    }
  }
  componentDidMount(){
    this.setState({item: this.props.item, bottomModalAndTitle: true});
    let itel;
    itel = [
      {label: "Toux", key: "toux"},
      {label: "Rhume", key: "rhume"},
      {label: "Odorat", key: "podorat"},
      {label: "Diarrhée", key: "diarrhee"},
      {label: "Tete", key: "mautete"},
      // {label: "Fievre", key: "fievre"},
      {label: "Gene", key: "generespiratiore"},
      {label: "George", key: "maugorge"},
      {label: "Fatigue", key: "fatigue"},
      {label: "Courbature", key: "coubaturemusc"},
      {label: "Etranger", key: "etatetrange"},
      {label: "Voyager", key: "voyage"},
      {label: "Contact", key: "contact"},
    ];
    this.setState({internalItem: itel});
  }
  render () {
    return(
      <Modal.BottomModal
          visible={this.props.index == this.props.indexState && this.state.bottomModalAndTitle}
          onTouchOutside={() => this.setState({ bottomModalAndTitle: false })}
          height={0.95}
          width={1}
          onSwipeOut={() => this.setState({ bottomModalAndTitle: false })}
          modalTitle={
            <ModalTitle
              title={this.state.item !== null ? this.state.item.datesave : null}
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
            {this.state.internalItem.map((it, ind) => {
              return(
                <ListItem
                  key={ind}
                  title={it.label}
                  // leftIcon={{ name: item.icon }}
                  bottomDivider
                  chevron={
                    <Ionicons 
                      name={this.state.item[it.key] ? "md-checkmark-circle": "md-close"}
                      size={25} 
                      color={this.state.item[it.key] ? "green": "red"}
                    />
                  }
                />
                )
            })}
          </ModalContent>
        </Modal.BottomModal>
    )
  }
}

CardMesure.propTypes = {
  item: PropTypes.object,
  horizontal: PropTypes.bool,
  full: PropTypes.bool,
  ctaColor: PropTypes.string,
  imageStyle: PropTypes.any,
}

const styles = StyleSheet.create({
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

export default withNavigation(CardMesure);