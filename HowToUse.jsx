import { ScrollView, View, Text, Pressable, StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { Component, useRef } from 'react';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import OptionsToolbar from './OptionsToolbar.jsx';
import BackgroundImage from './assets/learning-3245793_1280.jpg';
import HomeScreen from './assets/HomeScreen (2).jpg';
import HSHighlightedSubjects from './assets/HomeScreenSubjectBar (1).jpg';
import HSArrow from './assets/HomeScreenSubjectBarArrow.jpg';
import HS2 from './assets/HomeScreen2 (1).jpg';
import HSHighlightedList from './assets/HomeScreenModuleList.jpg';
import HSHighlightedToolbar from './assets/HomeScreenOptionsToolbar.jpg';
import HSHighlightedTitle from './assets/HomeScreenPageTitle.jpg';
import HSHighlightedBack from './assets/HomeScreenBackButton.jpg';
import QPLoad from './assets/QuizletsPortraitLoad (1).jpg'
import QPStartButton from './assets/QuizletsStartButton.jpg';
import QPPlay from './assets/QuizletsPortraitPlay (1).jpg';
import QLPlay from './assets/QuizletsLandscapePlay (1).jpg';
import QLStudyOptions from './assets/QuizletsLandscapeStudyOptions 1.jpg';
import QLOptionsMenu from './assets/QuizletsLandscapeOptions (1).jpg';

export default function HelpGuide() {
  const navigation = useNavigation();
  const scrollViewRef = useRef();

  const scrollToPosition = (height) => {
    scrollViewRef.current.scrollTo({ x: 0, y: height, animated: true });
  };

  
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView ref={scrollViewRef}>
    <ImageBackground source={BackgroundImage} resizeMode={'cover'} style={styles.container}>
      <Card style={styles.image}>
        <Text style={styles.tochead} onPress={() => scrollToPosition(0)}>Contents</Text>
        <Text style={styles.subheading} onPress={() => scrollToPosition(400)}>{'\u2022'} Page Controls</Text>
        <Text style={styles.text} onPress={() => scrollToPosition(980)}>-How to check what page I am on?</Text>
        <Text style={styles.text} onPress={() => scrollToPosition(1460)}>-How to go back to the previous page?</Text>
        <Text style={styles.text} onPress={() => scrollToPosition(1950)}>-How to change the subject that I am viewing?</Text>
        <Text style={styles.text} onPress={() => scrollToPosition(3200)}>-How to select a study guide?</Text>
        <Text style={styles.text} onPress={() => scrollToPosition(3775)}>-How to navigate to home or help guide quickly?</Text>
        <Text style={styles.subheading} onPress={() => scrollToPosition(4270)}>{'\u2022'} Quizlet Controls</Text>
        <Text style={styles.text} onPress={() => scrollToPosition(4670)}>-How to start playing a Quizlet?</Text>
        <Text style={styles.text} onPress={() => scrollToPosition(5500)}>-How to view Quizlet, Match cards, and images clearly?</Text>
        <Text style={styles.text} onPress={() => scrollToPosition(5800)}>-How to play a different Quizlet study mode?</Text>
        <Text style={styles.text} onPress={() => scrollToPosition(6300)}>-What are the different Quizlet study modes?</Text>
        <Text style={styles.paragraph}>Page Controls</Text>
        <Text style={styles.text}>All pages have a set of controls that can be used to navigate the app. To illustrate these controls, let's use the home screen as an example.</Text>
        <Text style={styles.text}>This is the home screen:</Text>
        <ImageBackground source={HomeScreen} resizeMode={'contain'} style={styles.image2} />
        <Text style={styles.text}>The home screen has five major components: the page name, the back button, the subject bar, the module list, and the options toolbar.</Text>
        <Text style={styles.subheading}>Page Name</Text>
        <Text style={styles.text}>The page name, located at the top section of the screen, states the name of the page being currently viewed. This can be used to keep track of page navigation throughout the app.</Text>
        <ImageBackground source={HSHighlightedTitle} resizeMode={'contain'} style={styles.image2} />
        <Text style={styles.subheading}>Back Button</Text>
        <Text style={styles.text}>The back button, located at the top left corner of the screen, can be used to navigate back to the previously accessed page. This control is useful for quickly returning to prior pages.</Text>
        <ImageBackground source={HSHighlightedBack} resizeMode={'contain'} style={styles.image2} />
        <Text style={styles.subheading}>Subject Bar</Text>
        <Text style={styles.text}>The subject bar, located at the top of the page, is used to navigate between content for different subjects.</Text>
        <ImageBackground source={HSHighlightedSubjects} resizeMode={'contain'} style={styles.image2} />
        <Text style={styles.text}>To switch subjects, click on one of the blue subject buttons. The button for the currently selected subject will appear highlighted in red.</Text>
        <ImageBackground source={HSArrow} resizeMode={'contain'} style={styles.image2} />
        <ImageBackground source={HS2} resizeMode={'contain'} style={styles.image2} />
        <Text style={styles.subheading}>Module List</Text>
        <Text style={styles.text}>The module list, located in the center of the screen, contains a collection of red module buttons that can be clicked to access study content.</Text>
        <ImageBackground source={HSHighlightedList} resizeMode={'contain'} style={styles.image2} />
        <Text style={styles.text}>Each module is labeled with a certain topic. Upon clicking a module, you will either be directed to a study page or a list of associated study pages.</Text>
        <Text style={styles.subheading}>Options Toolbar</Text>
        <Text style={styles.text}>The options toolbar, located at the bottom of the screen, holds red buttons used for navigation between pages.</Text>
        <ImageBackground source={HSHighlightedToolbar} resizeMode={'contain'} style={styles.image2} />
        <Text style={styles.text}>You can click on these buttons to access the home screen and help screen respectively at any time.</Text>

        <Text style={styles.paragraph}>Quizlet Controls</Text>
        <Text style={styles.text}>Class King makes use of Quizlet to provide study aids for users. These Quizlets can be accessed by clicking individual module buttons. For this example, let's look at the Cell Transport and Energy Quizlet module by clicking the button on the home page.</Text>
        <ImageBackground source={QPLoad} resizeMode={'contain'} style={styles.image2} />
        <Text style={styles.text}>By default, the page directs you to the Match gamemode, which prompts the user to match study terms as quickly as possible. To start playing, click the blue Start Playing button.</Text>
        <ImageBackground source={QPStartButton} resizeMode={'contain'} style={styles.image2} />
        <ImageBackground source={QPPlay} resizeMode={'contain'} style={styles.image2} />
        <Text style={styles.text}>Viewing Quizlet in portrait orientation makes the screen harder to interpret and use. Portrait orientation also makes images difficult to render, which is especially important for image-extensive study sets such as mapping labs. It is highly recommended to view Quizlets in landscape orientation.</Text>
        <ImageBackground source={QLPlay} resizeMode={'contain'} style={styles.image3} />
        <Text style={styles.text}>Quizlet offers many study modes. To change the study mode, click on the Choose a Study Mode dropdown menu at the bottom right corner of the window.</Text> 
        <ImageBackground source={QLStudyOptions} resizeMode={'contain'} style={styles.image3} />
        <Text style={styles.text}>This will provide you with a list of study modes:</Text> 
        <ImageBackground source={QLOptionsMenu} resizeMode={'contain'} style={styles.image3} />
        <Text style={styles.text}>The Learn mode helps the user learn concepts through a mixture of multiple choice and written prompts.</Text> 
        <Text style={styles.paragraph}></Text>
        <Text style={styles.text}>The Test mode creates a mock test based on the study set content using a mixture of multiple choice and written prompts.</Text> 
        <Text style={styles.paragraph}></Text>
        <Text style={styles.text}>The Flashcards mode allows the user to review all of the terms and definitions in the study set individually.</Text> 
        <Text style={styles.paragraph}></Text>
        <Text style={styles.text}>The Spell mode prompts the user with a written and spoken term, asking for the matching definition to be typed out.</Text> 
        <Text style={styles.paragraph}></Text>
        <Text style={styles.text}>It is highly recommended to use the Flashcards mode to revise concepts before attempting the other study modes.</Text> 
        <Text style={styles.paragraph}></Text>
        <Text style={styles.paragraph}></Text>
      </Card>
      </ImageBackground>
      </ScrollView>
      <OptionsToolbar navigation={navigation} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'top',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  image: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'top',
      alignItems: 'left',
      padding: 10,
      margin: 2,
      width: 380,
      borderColor: '#2a4944',
      borderWidth: 1,
      backgroundColor: 'white',
   },
  image2: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'top',
      alignItems: 'left',
      width: 200,
      height: 350,
      marginBottom: 10,
   },
  image3: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'top',
      alignItems: 'left',
      width: 350,
      height: 200,
      marginBottom: 10,
   },
  buttonContainer: {
    width: 70,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '25%',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonForList: {
    borderRadius: 10,
    width: '25%',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonLabel: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'absolute',
    color: 'white',
    textShadowColor: 'black',
    textShadowRadius: 1,
    textShadowOffset: {width: 2, height: 2}
  },
  item: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 0,
      margin: 0,
   },
  paragraph: {
    margin: 0,
    marginTop: 10,
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    // textShadowColor: 'rgba(0, 0, 0, 1)',
    // textShadowRadius: 0,
    // textShadowOffset: {width: 3, height: 3},
    color: 'black',
    opacity: 1,
  },
  tochead: {
    margin: 0,
    marginTop: 0,
    marginBottom: 5,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    // textShadowColor: 'rgba(0, 0, 0, 1)',
    // textShadowRadius: 0,
    // textShadowOffset: {width: 3, height: 3},
    color: 'black',
    opacity: 1,
  },
  text: {
    margin: 0,
    marginBottom: 2,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
    // textShadowColor: 'rgba(0, 0, 0, 1)',
    // textShadowRadius: 0,
    // textShadowOffset: {width: 3, height: 3},
    color: 'black',
    opacity: 1,
  },
  subheading: {
    margin: 0,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    // textShadowColor: 'rgba(0, 0, 0, 1)',
    // textShadowRadius: 0,
    // textShadowOffset: {width: 3, height: 3},
    color: 'black',
    opacity: 1,
  },
});