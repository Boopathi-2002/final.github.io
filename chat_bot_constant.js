// Options the user could type in
const prompts = [
    ["hi", "hey", "hello","hai","hey you","hey u"],
    ["how are you", "how is life", "how are things","how are u"],
    ["what are you doing", "what is going on", "what is up","what r u doing"],
    ["your fathers name","your mothers name","your father name","your mother name"," what is your mothers name","what is your fathers name"],
    ["fuck you ","ass","69","dig","can you mate","tell any bad word","speak any bad words","speak any bad word","bad word","fuck"],
    ["can u had a girl friend","are you single","are you committed","what is your girlfriend name","tell your girlfriend name","can you had a lover"],
    ["why are you created","what is the purpose of using you","what is the purpose to created you "],
    ["tell about ancient thirunelveli","tirunelveli","tell about ancient tirunelveli"],
    ["pandyas","pandiyas","pandyaas","relation between thirunelveli and pandiyas","relation between pandiyas and thirunelveli"," relation between pandiyas and tirunelveli","relation between tirunelveli and pandiyas"],
    ["major areas under pandiyas kingdom","tell the  major areas which were ruled by pandiyas","pandiyas region","pandya kingdom"],
    ["pandiyas time period","pandiyas period","period of pandyas"],
    ["unavu mandapam","siru koodam","idincha mandapam"],
    ["naming reason for puliyangudi","puliyangudi","puliyangudi name","name of puliyangudi"],
    ["food culture","food culture followed by ancient people","tell any example for food culture followed by ancient tirunelveli people","tell any example for food culture follwed by pandiyas"],
    ["who ruled tirunelveli over long years","tirunelveli was ruled by"],
    ["is there any other kingdom related with tirunelveli in historical period","any other kingdom related with thirunelveli","other kings related with tirunelveli"],
    ["which dynasty culture was followed in ancient tirunelveli","which culture was followed in ancient tirunelveli"],
    ["tell about nayakas culture","nayakas culture","Tell nayakas culture"],
    ["can you tell any example for nayakas culture"],
    ["after pandiyas who ruled the tirunelveli region","who ruled tirunelveli region after pandiyas"],
    ["atlast where pandiyas was go","where pandiyas were go finally"],
    ["is pandiyas still alive","Is pandiyas still alive"],
    ["relation between pandiyas and pandalam","relationship between pandiyas and pandalam","pandiyas and pandalam","pandalam"],
    ["fall of pandalam dynasty","what happened to pandalam","what happened to pandiyas after settled in kerala"],
    ["hero stone","tell any example for nadukal"],
    ["tell any example for cheras culture in tirunelveli","cheras culture in tirunelveli"],
    ["sivagiri","war","british period"],
    ["best tenkasi pandiya king","notable tenkasi ruler"],
    ["Why pandiyas were defeated","what happened to pandiyas"],
    ["varaguna pandiyan"],
    ["who are you", "are you human", "are you bot", "are you human or bot"],
    ["who created you", "who made you","who mades you"],
    [
      "your name please",
      "your name",
      "may i know your name",
      "what is your name",
      "what call yourself",
      "can you tell your name",
      "how can i call you",
      "how can i call u"
    ],
    ["Tell"],
    ["happy", "good", "fun", "wonderful", "fantastic", "cool"],
    ["bad", "bored", "tired"],
    ["help me", "tell me story", "tell me joke"],
    ["ah", "yes", "ok", "okay", "nice"],
    ["bye", "good bye", "goodbye", "see you later"],
    ["what should i eat "],
    ["bro"],
    ["what", "why", "how", "where", "when"],
    ["no","not sure","maybe","no thanks"],
    [""],
    ["who are your designers","who designed u"],
  

  ]
  
  // Possible responses, in corresponding order
  
  const replies = [
    ["Hello!", "Hi!", "Hey!", "Hi there!","Howdy"],
    [
      "Fine... how are you?",
      "Pretty well, how are you?",
      "Fantastic, how are you?"
    ],
    [
      "I am just interact with you",
      "I am just helping you",
      "Can you guess?",
      "I don't know actually"
    ],
    ["I am a bot,I was not born , I was just created!"],
    ["I am a good bot,Don't speak unnecessary words to me"],
    ["No my desiners was single ,so I am also single"],
    ["I was created to preserve endangered heritage and culture in the region of tirunelveli and I help you to get knowledge about our ancient culture"],
    ["Ancient name of Tirunelveli is venu vanam (venu means bamboo tree).Earlier days the area surrounded by thirunelveli region was fully covered by bamboo trees and lot of streams"],
    ["tirunelveli is the second capital of midperiod pandyaas and lateral pandyaas .."],
    ["More over pandyass ruled under a longer boundary ,their most well known cities are Madurai, Tirunelveli, tenkasi, thoothukudi, kapadapuram, Ramanadhapuram, several places in virudhunagar"],
    ["pandyaas is the only dynasty were ruled over 2000 years[not continously] "],
    ["The areas from madurai to rajapalayam, There are several mandapams were builted by a pandiyan king. According to shaivism , once upon a time ,A pandyaan King who was ruled region below the madurai, was suffered from stomach pain , so as per advises , he planned to reach srivilliputhur (madavar  valakam) siva temple .... In that period, there is no more popular transport facility . so the king decided to built temporary stayings on his travel path.. As per his wish , He travelled to srivilliputhur by using this temporary buildings..But vaishnavites thoughts was the temple was srivilliputhur aandal temple"],
    ["puliyankudi was created by a pandiyan king ,named as pooliyan,so this region was named under the king ...Also this area was covered by lot of tamarind trees"],
    ["In idincha mandapams(temperory buildings) were used as a 'DHARMA SATRAM' -to provide food for the people ,and acts as a decision making place for the local peoples"],
    ["Tirunelveli was ruled and controlled by pandian dynasty over long years. "],
    ["Yes , Along with pandian dynasty , Tirunelveli was controlled by  cholas(847-1279) , kalabras(3rd -6th century),cheras, vijayanagar empire , Nawabs under mugals and Delhi sultanates and several palayakaras on the later period ..."],
    ["Eventhough Tirunelveli was ruled by pandian clans ,, The people in this region was followed cheras culture significantly.."],
    ["Compared to other culture, the nayakas culture were slightly different,Especially in south side...They adopted the policies and system followed by the previous dynasty,which were helpful to the people"],
    ["The example for nayakas culture is The food/staying mandapams was built by pandiyan kings to assist the people , the same culture was adopted by nayakas without any hesitation/demolition , Because it was More beneficial for the needy people..."],
    ["After the tenkasi pandiyas, the whole south tamilnadu was taken over by the Delhi sultans. In the same period of Delhi sultans, The subsidiary kings announced them as a separate kingdom in the name of madurai sultans.. After several years vijayanagar Kingdom was taken over the control of whole south tamilnadu"],
    ["Maravarman kulashekara has two sons , named Veera pandian and sundara pandiyan.  kulashekara appointed Veera pandian as his next successor .But it was opposed by sundara pandian . After the death of kulashekara, there was a huge conflict between these two brothers. At last Veera pandian won that conflict. He forgived his brother Sundara pandian. At that time , Malik kafur the commander of Alauddin Khalji, was matched towards South India for seeking wealth... Sundara pandian formed an alliance with Malik kafur ,and defeated his brother Veera pandian. Veera pandiyan escaped to tenkasi,and sundara pandian was killed by malik kafur... So ,this was the end of madurai pandiyas..."],
    ["Yes pandiyas still alive in kerala. The pandiyas made the alliance with pandalam royal dynasty and made their small kingdom and ruled over several years"],
    ["The successors of Veera pandian were settled in tenkasi after the demolition of malik kafur. They lived over several years. They faced lot of difficulties from nayakas , vijayanagar empires  along with their own clans..so,they decided to move towards kerala via senkottai.Atlast they settled in kerala in several regions"],
    ["In 1789, Tippu sultan declared war against Travancore royal Kingdom (friendly nation of British)..During, this war pandalam kingdom was fought in the favour of Travancore kingdom.In that war ,Tippu was defeated,And Travancore gained more areas.But pandalam kingdom faced lot of struggles .They need a lot of financial support from Travancore..But they can't able to resettle this settlement.So, they gave more territories to the Travancore kingdom.Atlast their assets were three palace , Two temples and small land areas.."],
    ["Hero stone or na-du-kal was a special tribute to the prior warrior,or a saviour or a sacrifier .It was practised by our ancestors ,and it was considered as much equal to God .."],
    ["The areas in tamilnadu like Tirunelveli, tenkasi, Thoothukudi,virudhunagar,and several regions in kanyakumari district, were followed only kollam year  not Thiruvalluvar year"],
    ["We all know , the first world war was fought between 1914-1918.several nations were participate in that war.At that time, India was under the rule of British.So far along with British ,89 soldiers of Sivagiri samasthanam ,went for the war .As per their rememberence , a small memorial block was built at the entrance of the village (Sivagiri),by the native people."],
    ["Varaguna pandiyan was considered as one of the best ruler in the history of tenkasi pandiyas .Some records say , Tenkasi Kasi viswanathar temple was built by varaguna pandiya."],
    ["The pandalam royal dynasty was formed in 903 A.D , with the help of pandiyan kings.The successors of Veera pandian, were marched towards kerala and settled in pandalam .After that ,they both formed a new pandalam royal Kingdom."],
    ["Certainly i provide it ,please refer in my website"],
    ["I am just a bot ", "I am a bot. What are you?"],
    ["The true Gods, java ,javascript,html,css and finally hopeness "],
    ["my name is interactive interface"],
    ["I love you too", "Me too"],
    ["Have you ever felt bad?", "Glad to hear it"],
    ["Why?", "Why? You shouldn't!", "Try watching TV"],
    ["What about?", "Once upon a time..."],
    ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
    ["Bye", "Goodbye", "See you later"],
    ["Go to any hotel or order any food in online"],
    ["Bro!"],
    ["Great question"],
    ["That's ok","I understand","What do you want to talk about?"],
    ["Please say something :("],
    ["I was created by boopathi , manoj nirmal kumar , luther and karthick raja "],
  ]
  
  // Random for any other user input
  
  const alternative = [
    "Same",
    "Go on...",
    "Bro...",
    "Try again",
    "I'm listening...",
    "I don't understand :/"
  ]
  
  // Whatever else you want :)
  
 const coronavirus = ["thirunelveli"]
