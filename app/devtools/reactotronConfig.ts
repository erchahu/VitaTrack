import Reactotron from "reactotron-react-native"
import reactotronZustand from 'reactotron-plugin-zustand';
import { useSportHistoryStore } from "@/stores";

const reactotron = Reactotron.configure({
  name: 'VitaTrack'
})
  .useReactNative() // add all built-in react native plugins
  .use(
    //add this line 🙌
    reactotronZustand({
      stores: [{ name: 'Sport History Store', store: useSportHistoryStore }],
      omitFunctionKeys: true
    })
  )
  .connect(); // let's connect!

export default reactotron;