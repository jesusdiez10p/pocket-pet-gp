import React from "react";


import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./src/redux/reducers";
import QueyClientProvider, { QueryClient, QueryClientProvider } from "react-query"
import Constants from "expo-constants";
import firebase from "firebase/app";
import Route from "./src/navigation/main/index.js";

import { LogBox } from 'react-native';
import _ from 'lodash';

const store = createStore(rootReducer, applyMiddleware(thunk));

if (firebase.apps.length == 0) {
  firebase.initializeApp(Constants.manifest.web.config.firebase);
  
}
//------CODIGO PARA EVITAR WARNINGS-------------//
LogBox.ignoreLogs(['Warning:...']); // ignore specific logs
LogBox.ignoreAllLogs(); // ignore all logs
const _console = _.clone(console);
console.warn = message => {
if (message.indexOf('Setting a timer') <= -1) {
   _console.warn(message);
   }
};
//--------------------------------------------------------------//

const queryClient = new QueryClient({
  defaultOptions: {queries: {refetchInterval: false, staleTime: Infinity}}
})

export default function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Route />
      </QueryClientProvider>
    </Provider>
    
  );
}
