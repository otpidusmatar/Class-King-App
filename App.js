import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Launch from './Launch.jsx';
import Home from './Home.jsx';
import Help from './HelpGuide.jsx';
import Howto from './HowToUse.jsx';
import ContactUs from './ContactUs.jsx';
import BCTE from './quizletpages/biologyhonors/BCellTransportandEnergy.jsx';
import BDNASR from './quizletpages/biologyhonors/BDNAStructureandReplication.jsx';
import BPSGER from './quizletpages/biologyhonors/BProteinSynthesisandGeneExpReg.jsx';
import EAML from './mappinglabs/EastAsia.jsx';
import CSEZSAR from './quizletpages/eastasia/CSEZSAR.jsx';
import EAPF from './quizletpages/eastasia/EastAsiaPhysicalFeatures.jsx';
import LAML from './mappinglabs/LatinAmerica.jsx';
import LAMC from './quizletpages/latinamerica/LatinAmericaMajorCities.jsx';
import LAPF from './quizletpages/latinamerica/LatinAmericaPhysicalFeatures.jsx';
import LARL from './quizletpages/latinamerica/LatinAmericaReligionLanguage.jsx';
import LAWW from './quizletpages/latinamerica/LatinAmericaWhyWhere.jsx';
import NSML from './mappinglabs/NorthAfricaSouthwestAsia.jsx';
import NSMC from './quizletpages/northafricasouthwestasia/NASWAMajorCities.jsx';
import NSPF from './quizletpages/northafricasouthwestasia/NASWAPhysicalFeatures.jsx';
import NSDT from './quizletpages/northafricasouthwestasia/NASWADisputedTerritories.jsx';
import NSSIFM from './quizletpages/northafricasouthwestasia/NASWASaudiIranForcedMigration.jsx';
import NSWW from './quizletpages/northafricasouthwestasia/NASWAWhyWhere.jsx';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Launch" component={Launch} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Help Guide" component={Help} />
        <Stack.Screen name="How To Use" component={Howto} />
        <Stack.Screen name="Contact Us" component={ContactUs} />
        <Stack.Screen name="Cell Transport & Energy" component={BCTE} />
        <Stack.Screen name="DNA Structure & Replication" component={BDNASR} />
        <Stack.Screen name="Protein Synthesis & Gene Expression/Regulation" component={BPSGER} />
        <Stack.Screen name="East Asia Mapping Lab" component={EAML} />
        <Stack.Screen name="China SEZs and SARs" component={CSEZSAR} />
        <Stack.Screen name="East Asia Physical Features" component={EAPF} />
        <Stack.Screen name="Latin America Mapping Lab" component={LAML} />
        <Stack.Screen name="Major Cities in Latin America" component={LAMC} />
        <Stack.Screen name="Physical Features of Latin America" component={LAPF} />
        <Stack.Screen name="Religions and Languages of Latin America" component={LARL} />
        <Stack.Screen name="Latin America: The Why of Where" component={LAWW} />
        <Stack.Screen name="North Africa & Southwest Asia Mapping Lab" component={NSML} />
        <Stack.Screen name="Major Cities in North Africa Southwest Asia" component={NSMC} />
        <Stack.Screen name="Physical Features of North Africa Southwest Asia" component={NSPF} />
        <Stack.Screen name="North Africa Southwest Asia: Disputed Territories" component={NSDT} />
        <Stack.Screen name="Saudi Arabia vs. Iran Conflict Forced Migration" component={NSSIFM} />
        <Stack.Screen name="North Africa Southwest Asia: The Why of Where" component={NSWW} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;