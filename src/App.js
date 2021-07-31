import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NewPost from './components/NewPost';
import Posts from './components/Posts';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DetailPost from './components/DetailPost';
import './index.css'

function App() {
  return (
   <>      
      <Header></Header>  
      <ToastContainer 
      position="bottom-right"
      autoClose={5000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable={false}
      pauseOnHover={false}    
      />
      <BrowserRouter>    
        <Switch>
          <Route path="/" exact={true} component={Posts} />
          <Route path="/newPost" component={NewPost} />
          <Route path="/detailPost/:id" component={DetailPost} />
        </Switch>
     </BrowserRouter>
   </>
  );
}

export default App;
