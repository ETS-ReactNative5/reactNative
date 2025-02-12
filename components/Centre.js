import React from 'react';
import { withNavigation } from '@react-navigation/compat';
import PropTypes from 'prop-types';
import { StyleSheet, Dimensions, Image, TouchableWithoutFeedback } from 'react-native';
import { Block, Text, theme } from 'galio-framework';
import Images from "../constants/Images";

import { argonTheme } from '../constants';


class Centre extends React.Component {
  constructor (props) {
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
        <TouchableWithoutFeedback onPress={() => {}}>
          <Block flex style={imgContainer}>
            <Image source={!this.props.source ? Images.Host : this.props.source} style={imageStyles} />
          </Block>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => {}}>
          {!this.props.source ?
            <Block flex space="between" style={styles.cardDescription}>
              <Text size={14} style={styles.cardTitle}>{this.props.item1.nom}</Text>
              <Text size={12} muted={!ctaColor} color={ctaColor || argonTheme.COLORS.ACTIVE} bold>
                {this.props.item1.email}
              </Text>
              <Text size={12} muted={!ctaColor} color={ctaColor || argonTheme.COLORS.ACTIVE} bold>
                {this.props.item1.telephone}
              </Text>
            </Block> :
            <Block flex space="between" style={styles.cardDescription}>
              <Text size={12} muted={!ctaColor} color={ctaColor || argonTheme.COLORS.ACTIVE} bold>
                Visualiser
              </Text>
            </Block>
          }
        </TouchableWithoutFeedback>
      </Block>
    );
  }
}

Centre.propTypes = {
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

export default withNavigation(Centre);