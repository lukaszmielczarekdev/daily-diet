import React, { useState, useCallback, useMemo } from "react";
import Article from "../../organisms/Article/Article";
import Description from "../../atoms/Description/Description";
import TextField from "../../molecules/TextField/TextField";
import Container from "../../templates/Container/Container";
import Gallery from "../../organisms/Gallery/Gallery";
import { ControlPanel } from "../../molecules/ControlPanel/ControlPanel";
import Image from "../../atoms/Image/Image";
import breakfast from "../../../assets/Images/breakfast.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import Attributes from "../../molecules/Attributes/Attributes";
import { sendMessage } from "../../../store/auth";
import { aboutSummary } from "../../../data/constants";
import { debounce } from "../../../utils/helpers";
import { FiMail } from "react-icons/fi";
import {
  FormContainer,
  StyledSpan,
  Form,
  Input,
  Button,
  TextArea,
} from "./AboutStyles";

const About = () => {
  const [characters, setCharacters] = useState(0);
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user.authData);

  const {
    register: registerMessage,
    handleSubmit: handleRegisterMessage,
    // formState: { errors },
    reset: resetForm,
  } = useForm({
    defaultValues: {
      username: currentUser ? currentUser.name : null,
      email: currentUser ? currentUser.email : null,
      message: null,
    },
  });

  const handleSendMessage = useCallback(
    (data) => {
      dispatch(sendMessage(data));
      resetForm();
      setCharacters(0);
    },
    [dispatch, resetForm]
  );

  const debouncedHandleSendAMessage = useMemo(
    () => debounce((data) => handleSendMessage(data), 400),
    [handleSendMessage]
  );

  return (
    <Container fillColor>
      <Article
        padding={"5rem 4rem 1rem 4rem"}
        right={
          <Image
            right
            justify={"end"}
            alt={"breakfast on the table"}
            src={breakfast}
            primary={"Delicious\nBreakfast"}
            secondary={"For Two"}
          />
        }
        left={
          <>
            <TextField
              titlePrimary={"Your"}
              titleSecondary={"Diet Assistant"}
              description={
                "Registered users can create their own products, meals and diet diaries that they can use in building their diet. Once created, the author can edit or delete them.\nThe huge product base is constantly expanded with new products, including user-created products.\n\nDiaries can be anonymously rated by users.\n\nUseful tips are available to everyone, highlighting important dietary aspects.\nThings created by other users can also be an inspiration."
              }
            />
            <Attributes items={aboutSummary} />
          </>
        }
      />
      <ControlPanel padding={"0 1rem"} margin={"0 4rem"}>
        <Attributes smallScreen items={aboutSummary} />
      </ControlPanel>
      <Gallery
        text={"center"}
        justify={"center"}
        padding={"3rem"}
        titlePrimary={"We look forward to"}
        titleSecondary={"Your feedback"}
        children={
          <FormContainer>
            <FiMail size={"2rem"} />
            <StyledSpan>Contact</StyledSpan>
            <Description
              smallText
              text={"center"}
              padding={"1rem 0.5rem"}
              width={"240px"}
              marginBottom={"0"}
            >
              Didn't get a confirmation? Don't forget to check the SPAM folder.
            </Description>
            <Form onSubmit={handleRegisterMessage(debouncedHandleSendAMessage)}>
              <Input
                type="text"
                placeholder={"User Name *"}
                {...registerMessage("username", {
                  required: true,
                  minLength: 3,
                  maxLength: 30,
                })}
              />
              <Input
                type="text"
                placeholder={"Email *"}
                {...registerMessage("email", {
                  required: true,
                  minLength: 5,
                  maxLength: 40,
                  pattern:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
              />
              <TextArea
                type="text"
                {...registerMessage("message", {
                  required: true,
                  minLength: 5,
                  maxLength: 1200,
                  onChange: (e) => setCharacters(e.target.value.length),
                })}
              />
              <StyledSpan>{characters} / 1200</StyledSpan>
              <Button margin={"1rem 0"} type="submit" green color={"white"}>
                Send a message
              </Button>
            </Form>
          </FormContainer>
        }
      />
    </Container>
  );
};

export default About;
