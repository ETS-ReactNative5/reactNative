import React from "react";
import { ScrollView, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
// Galio components
import { Block, Text, Button as GaButton, theme } from "galio-framework";
// Argon themed components
import { argonTheme, tabs } from "../constants/";
import { Button, Select, Icon, Input, Switch } from "../components/";
import Header  from "../components/Header";
import { GiftedChat } from 'react-native-gifted-chat'
import { getOneMessages } from "./StatteFullComponents";
import { connect } from 'react-redux'
import LoadingView from 'react-native-loading-view'
 
const { width } = Dimensions.get("screen");


class Messages extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      "switch-1": true, 
      "switch-2": false,
      messages: [],
    };
     console.log('componentDidMount componentDidMount', this.props.idMed)
  }

  async componentDidMount() {
      console.log('componentDidMount componentDidMount',this.props.idMed)
      //let mess = await getOneMessages(this.props.id, this.props.idMed)
      //console.log('messages', mess)
      let messages = [
        {
          _id: 1,
          text: 'Hello mon patient',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Doctor',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ];
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
    let messages1 = [
        {
          _id: 2,
          text: 'Bonjour docteur',
          createdAt: new Date(),
          user: {
            _id: 1,
            name: 'Patient',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ];
      this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages1),
    }));
    let messages2 = [
        {
          _id: 3,
          text: 'Comment vous vous sentez aujourdui',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Patient',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ];
      this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages2),
    }));
      let messages3 = [
        {
          _id: 4,
          text: '😋 Tes bien docteur',
          createdAt: new Date(),
          user: {
            _id: 1,
            name: 'Patient',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ];
      this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages3),
    }));
    let messages4 = [
            {
              _id: 5,
              text: '😞 Ok tres bien tout paraait donc ok',
              createdAt: new Date(),
              user: {
                _id: 2,
                name: 'Patient',
                avatar: 'https://placeimg.com/140/140/any',
              },
            },
          ];
          this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, messages4),
        }));

  }
  addMessages = (mess) =>{
    let mes = this.state.messages;
    mess.push({
      _id: Math.floor(Math.random() * Math.floor(100)),
      text: mess.text,
      createdAt: new Date(),
      user: {
            _id: 1,
            name: 'Patient',
            avatar: 'https://placeimg.com/140/140/any',
      },
    })
     this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, mess),
    }));
  }
 
  render() {
    console.log('this.props.mess', this.props.mess)
    return (
        <LoadingView loading={this.props.mess === null}>
          <GiftedChat
            messages={this.state.messages}
            onSend={messages => {this.addMessages(messages); console.log(this.state.messages)}}
            user={{
              _id: 1,
            }}
          />
        </LoadingView>
    );
  }
}

const styles = StyleSheet.create({
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
    toSetIdMedecin: async (id) => {
      dispatch({type: "TO_SET_ID_MEDECIN", data: id}); 
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Messages);